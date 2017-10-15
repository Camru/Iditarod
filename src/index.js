import Config from '../config';
import {idit_data} from './assets/Iditarod_2017';

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

// get coordinates of each checkpoint for geoJSON line layer of Iditarod trail 
const checkpointCoords = sortedByCheckpoint.map(d => {
    return [+d.Longitude, +d.Latitude];
});

console.log('checkpointCoords', checkpointCoords); // (camden)

let route = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": checkpointCoords
        }
    }]
    
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

// // Calculate the distance in kilometers between route start/end point.
let lineDistance = turf.lineDistance(route.features[0], 'kilometers');

let trail = [];

//TODO: (camden) normalize speeds of mushers 
// create list of segments along the trail 
for (let i = 0; i < lineDistance * 2; i++) {
    const segment = turf.along(route.features[0], (i / 2000) * lineDistance, 'kilometers');
    trail.push(segment.geometry.coordinates);
}

// Update the route with calculated arc coordinates
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

    console.log('trail.length', trail.length); // (camden)
   
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

    // map.addLayer({
    //     "id": "route",
    //     "type": "line",
    //     "source": {
    //         "type": "geojson",
    //         "data": route 
    //     },
    //     "layout": {
    //         "line-join": "round",
    //         "line-cap": "round"
    //     },
    //     "paint": {
    //         "line-color": "#fd00ff",
    //         "line-width": 2
    //     }
    // });
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

    
    function play() {
        // Update point geometry to a new position based on counter denoting
        // the index to access the arc.
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

