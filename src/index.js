import Config from '../config';
import {idit_data} from './assets/Iditarod_2017';
import {normalize, lerp} from './utils'
import cheapRuler from 'cheap-ruler'



function getMusherData(numberOfMushers) {
    let data = [];

    // musher bibs start at 2
    for (let i = 2; i < numberOfMushers + 2; i++) {
        let nums = ["16", "18", "24"];
        let groupedByBib = idit_data.filter(d => d.Number == i)
        if (groupedByBib.length === 17 && nums.includes(groupedByBib[0].Number)) {
            data.push(groupedByBib); 
        }
    }
    return data;
}

function sortByCheckpoint(musherData) {
    const checkpoints = { 
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

    let sorted = [];
    return musherData.map(d => {
        return sorted[checkpoints[d.Checkpoint]] = d
    });
    
}


let data = getMusherData(70);
let sortedByCheckpoint = sortByCheckpoint(data);
const numberOfMushers = sortedByCheckpoint.length;
console.log('sortedByCheckpoint', sortedByCheckpoint); // (camden)

// get coordinates of each checkpoint for geoJSON line layer of Iditarod trail 
const checkpointCoordinates = [
    [-147.813, 64.8321],
    [-149.0897, 64.5952],
    [-150.6352, 65.0317],
    [-152.0816, 65.201],
    [-155.5011, 64.7386],
    [-156.9352, 64.7322],
    [-156.455, 65.6568],
    [-157.8039, 64.8431],
    [-158.1046, 64.7188],
    [-158.7257, 64.3138],
    [-160.7863, 63.8742],
    [-161.1918, 64.3519],
    [-161.168, 64.9286],
    [-162.2494, 64.6162],
    [-163.4067, 64.6798],
    [-164.7519, 64.4681],
    [-165.3996, 64.4964]
];

function getDataPoint (mushers, key) {
    return mushers.map(musher => {
        let output = musher.map(d => {
            return +d[key];
        });

        // we don't need the first data point, which is the start of the race
        return output.slice(1);
    });
}

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

function createPoints (mushers, long, lat) {

   let features = mushers.map(musher => {
        return {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [long, lat]
            },
            "properties": {
                "title": musher[0].Number,
                "myColor": musher[0].Number 
            }
        }
    });

    return {
        "type": "FeatureCollection",
        "features": features
    };
}

let checkpointTimes = getDataPoint(sortedByCheckpoint, 'Time');
let checkpointSpeeds = getDataPoint(sortedByCheckpoint, 'Speed');
let checkpointLayovers = getDataPoint(sortedByCheckpoint, 'Elapsed Time');
let checkpointPairs = getCheckpointPairs(checkpointCoordinates);
let cpFeatures = checkpointPairs.map(cp => createFeature(cp[0], cp[1]));

const originLong = checkpointCoordinates[0][0];
const originLat = checkpointCoordinates[0][1]; 
let musherPoints = createPoints(sortedByCheckpoint, originLong, originLat); 
console.log('musherPoints', musherPoints); // (camden)

let route = {
    "type": "FeatureCollection",
    "features": cpFeatures 
};



// this is calculating the geodesic distance between checkpoints since we 
// are drawing straight paths between checkpoints instead of the true path 
// that a musher would use. So we don't use their distance traveled
//TODO: (camden) change turf to cheap_ruler

let ruler = cheapRuler(64.5, 'miles');
const distanceBetweenCheckpoints = cpFeatures.map(ft => ruler.lineDistance(ft.geometry.coordinates));
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
let trails = [];
for (let k = 0; k < numberOfMushers; k++) {
    let trail = [];
    for (let i = 0; i < route.features.length; i++) {
        let step = 0.01;
        let simSpeed = 0.05;
        let segment = createFeature(0, 0);
        let progress = 0;
        
       
        while ((progress * distanceBetweenCheckpoints[i]) <= distanceBetweenCheckpoints[i]) {
            const now = step * checkpointSpeeds[k][i];
            progress = lerp(now, 0, checkpointTimes[k][i]);
            // Takes a line and returns a point at a specified distance along the line.
            segment = ruler.along(route.features[i].geometry.coordinates, progress * distanceBetweenCheckpoints[i]);
    
            trail.push(segment);  
            step += simSpeed;
        }
    
        step = 0.01;
        while (step < checkpointLayovers[k][i]) {
            segment = ruler.along(route.features[i].geometry.coordinates, distanceBetweenCheckpoints[i]);
            trail.push(segment);
            step += 0.10
        }
    
    }
    trails.push(trail);

}

console.log('trails', trails); // (camden)



// // // Update the route with calculated arc coordinates
route.features[0].geometry.coordinates = trails;

mapboxgl.accessToken = Config.API_KEY;

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-149.4937, 64.2008],
    zoom: 4,
    pitch: 40,
    bearing: 40
});


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
        "data": musherPoints 
    });

    map.addLayer({
        "id": "point",
        "source": "point",
        "type": "circle",
        "paint": {
            "circle-radius": 5,
            "circle-color":  {
                property: 'myColor',
                type: 'categorical',
                stops: [
                ['16', "#FFFF00"],
                ['18', '#fbb03b'],
                ['24', '#ff00FF']
                ]
            }
        }
       
    });
    
let counter = 0;
    let routeInd = 0;
    function play() {
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc.
        
        // if (counter === null) return;
        for (let i = 0; i < musherPoints.features.length; i++) {
            if (counter < route.features[0].geometry.coordinates[i].length) {
                musherPoints.features[i].geometry.coordinates = route.features[0].geometry.coordinates[i][counter];
            } else {
                console.log('bib', musherPoints.features[i].properties.myColor); 
                // musherPoints.features.splice(i, 1);
                // i = 0;
            }  
        }

        // Update the source with this new data.
        map.getSource('point').setData(musherPoints);

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

