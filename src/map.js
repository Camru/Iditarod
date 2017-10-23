import {musherResults} from './assets/Iditarod_2017';
import {route, trails, musherPoints} from './store';
import Settings from './settings';
import Config from '../config';
mapboxgl.accessToken = Config.API_KEY;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-157.0, 64.2008],
    zoom: 5,
    pitch: 40,
    bearing: 40
});

map.on('load', function() {
    map.addSource('route', {
        type: 'geojson',
        data: route
    });

    map.addLayer({
        id: 'route',
        source: 'route',
        type: 'line',
        paint: {
            'line-width': Settings.trailWidth,
            'line-color': Settings.trailColor
        }
    });

    map.addSource('point', {
        type: 'geojson',
        data: musherPoints
    });

    map.addLayer({
        id: 'point',
        source: 'point',
        type: 'circle',
        paint: {
            'circle-radius': Settings.musherRadius,
            'circle-color': {
                property: 'myColor',
                type: 'categorical',
                stops: [['24', '#e74c3c']],
                default: Settings.musherColor 
            }
        }
    });

    map.addSource('highlightPoint', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-157.0, 64.2008] 
                }}]
            } 
    });

    map.addLayer({
        id: 'highlight',
        source: 'highlightPoint',
        type: 'circle',
        'layout': {
            'visibility': 'none'
        },
        paint: {
            'circle-radius': Settings.musherRadius,
            'circle-color': Settings.highlightPointColor 
        }
    });
});

function highlightMusherPoint (coords) {
    let updatedData = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": coords 
            }}]
        } 

    // let visibility = map.getLayoutProperty('highlight', 'visibility');
    map.setLayoutProperty('highlight', 'visibility', 'visible');
    map.getSource('highlightPoint').setData(updatedData); 
}


createMusherListElement(musherResults);
let hoveringOn = null;
function createMusherListElement (results) {
    const list = document.getElementById('name-list');
    const listItemClass = 'list-item';
    for (let i = 0; i < results.length; i++) {
        const listItem = document.createElement('li');
        listItem.innerHTML = results[i].name;
        listItem.className = listItemClass;
        list.appendChild(listItem);
    }

    list.addEventListener('mouseover', function (e) {
        if (e.target.className === listItemClass) {
            const {childNodes} = list;
            childNodes.forEach(child => child.id = "");
            hoveringOn = e.target.innerHTML;
            e.target.id = 'list-item-highlighted';
        };
    }, false);
}

let counter = 0;
let raf;
function play() {
    // Update point geometry to a new position based on counter denoting
    // the index to access the arc.

    // if (counter === null) return;
    for (let i = 0; i < musherPoints.features.length; i++) {
        if (musherPoints.features[i].properties.name === hoveringOn) {
            let currentPos = trails[i][counter]; // (camden)
            highlightMusherPoint(currentPos);
        }
        if (counter < trails[i].length) {
            musherPoints.features[i].geometry.coordinates =
                trails[i][counter];
        } else {
            console.log('bib', musherPoints.features[i].properties.myColor);
            musherPoints.features.splice(i, 1);
            trails.splice(i, 1);
            // i = 0;
        }
    }
    // map.on('mouseenter', 'point', function(e) {
    //     // Change the cursor style as a UI indicator.
    //     map.getCanvas().style.cursor = 'pointer';

    //     // Populate the popup and set its coordinates
    //     // based on the feature found.
    //     console.log('e', e); // (camden)

    //     map.addSource(e.lngLat.lng, {
    //         type: 'geojson',
    //         data: {
    //             "type": "FeatureCollection",
    //             "features": [{
    //                 "type": "Feature",
    //                 "geometry": {
    //                     "type": "Point",
    //                     "coordinates": [e.lngLat.lng, e.lngLat.lat] 
    //                 }}]
    //             }
    //     }); 

    //     map.addLayer({
    //         id: e.lngLat.ln,
    //         source: 'test1',
    //         type: 'circle',
    //         paint: {
    //             'circle-radius': 10,
    //             'circle-color': '#FFFF00'
               
    //         }
    //     });
    // });

    // Update the source with this new data.
    map.getSource('point').setData(musherPoints);

    // // Request the next frame of animation so long as destination has not
    // // been reached.
    // if (point.features[0].geometry.coordinates[0] !== destination[0]) {
    //     requestAnimationFrame(play);
    // }

    raf = requestAnimationFrame(play);

    counter = counter + 1;
}

function reset() {
    counter = 0;
}

function stop() {
    cancelAnimationFrame(raf);
}

const playBtn = document.getElementById('play-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
playBtn.addEventListener('click', play);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

export default map;
