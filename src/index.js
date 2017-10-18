import Config from '../config';
import {idit_data} from './assets/Iditarod_2017';
import {normalize, lerp} from './utils'
import cheapRuler from 'cheap-ruler'

let checkpoints = { 
   'Fairbanks': 0,
   'Nenana': 1,
   'Manley': 2,
   'Tanana': 3,
   'Ruby': 4,
   'Galena': 5,
   'Huslia': 6,
   'Koyukuk': 7,
   'Nulato': 8,
   'Kaltag': 9,
   'Unalakleet': 10,
   'Shaktoolik': 11,
   'Koyuk': 12,
   'Elim': 13,
   'White Mountain': 14,
   'Safety': 15,
   'Nome': 16
};

let first = idit_data.filter(musher => {
   return musher.Name === 'Ryan Redington'; 
});



let sortedByCheckpoint = [];
first.forEach(d => {
  sortedByCheckpoint[checkpoints[d.Checkpoint]] = d; 
});

console.log('sortedByCheckpoint', sortedByCheckpoint); // (camden)

// get coordinates of each checkpoint for geoJSON line layer of Iditarod trail 
const checkpointCoords = sortedByCheckpoint.map(d => {
    return [+d.Longitude, +d.Latitude];
});

const checkpointTimes = sortedByCheckpoint.map(d => {
    return +d.Time;
});
checkpointTimes.shift();


const checkpointSpeeds = sortedByCheckpoint.map(d => {
    return +d.Speed;
});
checkpointSpeeds.shift();

const checkpointLayovers = sortedByCheckpoint.map(d => {
    return +d['Elapsed Time'];
});
checkpointLayovers.shift();
console.log('checkpointLayovers', checkpointLayovers); // (camden)

const timesN = normalize(checkpointTimes);
const speedsN = normalize(checkpointSpeeds); 


function getCheckpointPairs (coords) {
    let pairs = [];
    for (var i=0 ; i<coords.length ; i++) {
        if (coords[i+1] !== undefined) {
            pairs.push ([coords[i], coords[i+1]]);
        } 
    }

    return pairs;
} 

function createFeature (long, lat) {
    return {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [long, lat]
        }
    } 
}

let checkpointPairs = getCheckpointPairs(checkpointCoords);
let cpFeatures = checkpointPairs.map(cp => createFeature(cp[0], cp[1]));

let route = {
    "type": "FeatureCollection",
    "features": cpFeatures 
};

let point = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [sortedByCheckpoint[0].Longitude, sortedByCheckpoint[0].Latitude]
        }
    }]
};

// this is calculating the geodesic distance between checkpoints since we 
// are drawing straight paths between checkpoints instead of the true path 
// that a musher would use. So we don't use their distance traveled
const distanceBetweenCheckpoints = cpFeatures.map(ft => turf.lineDistance(ft, 'miles'));
console.log('distanceBetweenCheckpoints', distanceBetweenCheckpoints); // (camden)



// use linear interpolation to get position of dot along path
// progress = (now — start) / (end — start)
// since we don't have a 'now', we can use a use a step variable to mimic 
// elapsed time. For example, find the new position of the dot every minute
// cheapRuler peformed path segment trail 3.6x faster than turf.js

/**
 * start = 0
 * end = time
 * now = step * speed
 */
let trail = [];
let ruler = cheapRuler(64.5, 'miles');
for (let i = 0; i < route.features.length; i++) {
    let step = 0.01;
    let simSpeed = 0.05;
    let segment = createFeature(0, 0);
    let progress = 0;
    
   
    while ((progress * distanceBetweenCheckpoints[i]) <= distanceBetweenCheckpoints[i]) {
        const now = step * checkpointSpeeds[i];
        progress = lerp(now, 0, checkpointTimes[i]);
        // Takes a line and returns a point at a specified distance along the line.
        segment = ruler.along(route.features[i].geometry.coordinates, progress * distanceBetweenCheckpoints[i]);

        trail.push(segment);  
        step += simSpeed;
    }

    step = 0.01;
    while (step < checkpointLayovers[i]) {
        segment = ruler.along(route.features[i].geometry.coordinates, distanceBetweenCheckpoints[i]);
        trail.push(segment);
        step += 0.10
    }

}

// // // Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = trail;

mapboxgl.accessToken = Config.API_KEY;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-149.4937, 64.2008],
    zoom: 4,
    pitch: 40,
    bearing: 40
});

function addPoint(long, lat) {
    return {
        "type": "Point",
        "coordinates": [
            long,
            lat
        ]
    };
}

let counter = 0;

map.on('load', function () {

    map.addSource('route', {
        "type": "geojson",
        "data": route
    });

    map.addLayer({
        "id": "route",
        "source": "route",
        "type": "line",
        "paint": {
            "line-width": 2,
            "line-color": "#007cbf"
        }
    });

    map.addSource('point', {
        "type": "geojson",
        "data": point 
    });

    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": 5,
            "circle-color": "#ff9b00"
        }
    });

    
    let routeInd = 0;
    function play() {
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc.
        if (counter >= route.features[0].geometry.coordinates.length) {
            counter = null;
        }
        if (counter === null) return;
        point.features[0].geometry.coordinates = route.features[0].geometry.coordinates[counter];

        // Update the source with this new data.
        map.getSource('point').setData(point);

        // // Request the next frame of animation so long as destination has not
        // // been reached.
        // if (point.features[0].geometry.coordinates[0] !== destination[0]) {
        //     requestAnimationFrame(play);
        // }

        requestAnimationFrame(play);

        counter = counter + 1;
    }


    function reset () {
        counter = 0;
    }

    const playBtn = document.getElementById('play-btn');
    const resetBtn = document.getElementById('reset-btn');
    playBtn.addEventListener('click', play);
    resetBtn.addEventListener('click', reset);

});

