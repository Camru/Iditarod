import {idit_data, checkpointCoordinates} from './assets/Iditarod_2017';
import Settings from './settings';
import {lerp, normalize} from './utils';
import cheapRuler from 'cheap-ruler';

const data = getMusherData(74);
const sortedByCheckpoint = sortByCheckpoint(data);
const musherPoints = createMusherPoints(sortedByCheckpoint);

const checkpointPairs = getCheckpointPairs(checkpointCoordinates);
const checkpointFeatures = checkpointPairs.map(cp => createFeature(cp[0], cp[1]));

let route = {
    type: 'FeatureCollection',
    features: checkpointFeatures
};

const trails = getTrailPaths(route, sortedByCheckpoint);

function getDataPoint(mushers, key) {
    return mushers.map(musher => {
        const output = musher.map(d => {
            return +d[key];
        });

        // we don't need the first data point, which is the start of the race
        return output.slice(1);
    });
}

function getCheckpointPairs(coords) {
    let pairs = [];
    for (var i = 0; i < coords.length; i++) {
        if (coords[i + 1] !== undefined) {
            pairs.push([coords[i], coords[i + 1]]);
        }
    }

    return pairs;
}

function createFeature(long, lat) {
    return {
        type: 'Feature',
        geometry: {
            type: 'LineString',
            coordinates: [long, lat]
        }
    };
}

function createMusherPoints(mushers) {
    // lat and long of the start of the race
    const originLong = checkpointCoordinates[0][0];
    const originLat = checkpointCoordinates[0][1];

    const features = mushers.map(musher => {
        return {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [originLong, originLat]
            },
            properties: {
                title: musher[0].Number,
                myColor: musher[0].Number,
                name: musher[0].Name
            }
        };
    });

    return {
        type: 'FeatureCollection',
        features: features
    };
}

function getMusherData(numberOfMushers) {
    let data = [];

    // musher bib numbers start at 2
    const bibStart = 2;

    for (let i = bibStart; i < numberOfMushers + bibStart; i++) {
        let groupedByBib = idit_data.filter(d => d.Number == i);

        // get only the mushers who finished all 17 checkpoints
        if (groupedByBib.length === 17) {
            data.push(groupedByBib);
        }
    }

    return data;
}

function sortByCheckpoint(musherData) {
    const checkpoints = {
        Fairbanks: 0,
        Nenana: 1,
        Manley: 2,
        Tanana: 3,
        Ruby: 4,
        Galena: 5,
        Huslia: 6,
        Koyukuk: 7,
        Nulato: 8,
        Kaltag: 9,
        Unalakleet: 10,
        Shaktoolik: 11,
        Koyuk: 12,
        Elim: 13,
        'White Mountain': 14,
        Safety: 15,
        Nome: 16
    };

    let sorted = [];
    return musherData.map(d => {
        return (sorted[checkpoints[d.Checkpoint]] = d);
    });
}

/**
 * In order to simulate the speed each musher travels the trail, we need to 
 * break up the entire trail into segments which represent the paths between
 * each checkpoint in the race. Then those segments are calculated for each 
 * musher, taking into account their speed and the time they spent on layover 
 * at each checkpoint. Each segment is essentially divided up like a ruler is by
 * inches. The slower the musher, the more slices there are in the segment, 
 * which translates to the dot traveling slower over the trail.
 */

function sumArr(arr) {
    return arr.reduce((a, b) => a + b);
}

function getTrailPaths(route, data) {
    const checkpointTimes = getDataPoint(data, 'Time');
    const checkpointSpeeds = getDataPoint(data, 'Speed');
    const checkpointLayovers = getDataPoint(data, 'Elapsed Time');
    const numberOfMushers = data.length;
    const originLong = checkpointCoordinates[0][0];
    const originLat = checkpointCoordinates[0][1];

    // this calculates the geodesic distance between checkpoints since we
    // are drawing straight paths between checkpoints instead of the true path
    // that a musher would use. So we don't use their provided distance traveled
    const ruler = cheapRuler(64.5, 'miles');
    const distanceBetweenCheckpoints = route.features.map(ft =>
        ruler.lineDistance(ft.geometry.coordinates)
    );

    let trails = [];
    for (let i = 0; i < numberOfMushers; i++) {
        let normalized = normalize(checkpointLayovers[i]);
        let trail = [];
        for (let j = 0; j < route.features.length; j++) {
            const simSpeed = Settings.simSpeed;
            let step = 0;
            let progress = 0;

            /** 
             * use linear interpolation to get position of dot along path.
             * Since we don't have a 'now', we can use a use a step variable to 
             * mimic elapsed time. For example, find the new position of the dot 
             * every minute.
             * 
             * cheapRuler peformed segment calculation 3.6x faster than 
             * turf.js based on performance.now()
            */
            let distanceToCheckpoint = 0;
            while (distanceToCheckpoint <= distanceBetweenCheckpoints[j]) {
                const now = step * checkpointSpeeds[i][j];
                progress = lerp(now, 0, checkpointTimes[i][j]);

                // Takes a line and returns a point at a specified distance along the line.
                let segment = ruler.along(
                    route.features[j].geometry.coordinates,
                    progress * distanceBetweenCheckpoints[j]
                );

                trail.push(segment);
                step += simSpeed;
                distanceToCheckpoint = progress * distanceBetweenCheckpoints[j];
            }

            step = 0;
            let timeTilDeparture = 0;
            while (timeTilDeparture < checkpointTimes[i][j]) {
                const now = step * (1 - normalized[j] + 5);
                progress = lerp(now, 0, checkpointLayovers[i][j]);

                let segment = ruler.along(
                    route.features[j].geometry.coordinates,
                    distanceBetweenCheckpoints[j]
                );
                trail.push(segment);
                step += simSpeed;
                timeTilDeparture = progress * checkpointTimes[i][j];
            }
        }

        trails.push(trail);
    }
    return trails;
}

export {route, trails, musherPoints};