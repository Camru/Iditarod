import {musherResults} from './assets/Iditarod_2017';
import {route, trails, musherPoints} from './store';
import Settings from './settings';
import Config from '../config';
mapboxgl.accessToken = Config.API_KEY;

const map = new mapboxgl.Map({
    container: 'map',
    style: Settings.style,
    center: Settings.center,
    zoom: Settings.zoom,
    pitch: Settings.pitch,
    bearing: Settings.bearing
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
            'circle-color': Settings.musherColor
        }
    });

    map.addSource('highlightPoint', {
        type: 'geojson',
        data: {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-157.0, 64.2008]
                    }
                }
            ]
        }
    });

    map.addLayer({
        id: 'highlight',
        source: 'highlightPoint',
        type: 'circle',
        layout: {
            visibility: 'none'
        },
        paint: {
            'circle-radius': Settings.musherRadius,
            'circle-color': Settings.highlightPointColor
        }
    });
});

function highlightMusherPoint(coords) {
    let updatedData = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: coords
                }
            }
        ]
    };

    map.setLayoutProperty('highlight', 'visibility', 'visible');
    map.getSource('highlightPoint').setData(updatedData);
}

let highlightedMusher = null;
let counter = 0;
let raf;
export const play = () => {
    // prevent multiple play btn clicks from duplicating animation frames
    if (raf) {
        cancelAnimationFrame(raf);
    }

    for (let i = 0; i < musherPoints.features.length; i++) {
        if (musherPoints.features[i].properties.name === highlightedMusher) {
            let currentPos = trails[i][counter];
            highlightMusherPoint(currentPos);
        }
        if (counter < trails[i].length) {
            musherPoints.features[i].geometry.coordinates = trails[i][counter];
        } else {
            musherPoints.features.splice(i, 1);
            trails.splice(i, 1);
        }
    }

    // Update the source with this new data.
    map.getSource('point').setData(musherPoints);
    counter += 1;

    raf = requestAnimationFrame(play);
};

export const reset = () => {
    counter = 0;
};

export const pause = () => {
    cancelAnimationFrame(raf);
};

export const getHighlightedMusher = e => {
    if (e.target.className === 'list-item') {
        const {childNodes} = e.target.parentNode;
        childNodes.forEach(child => (child.id = ''));
        highlightedMusher = e.target.dataset.name;
        e.target.id = 'list-item-highlighted';
    }
};

export default map;
