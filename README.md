# Iditarod 2017 
This visualization shows the flurry of mushers trekking along the [Iditarod Trail](https://en.wikipedia.org/wiki/Iditarod_Trail_Sled_Dog_Race) during 2017's [Last Great Race on Earth](http://iditarod.com/about/).

Each dot represents a musher whose pace is calculated based on their real-life speed, including the duration they stopped at each checkpoint to rest. You can click on a name in the musher's list to highlight their dot.

The dataset was found on [Kaggle](https://www.kaggle.com/iditarod/iditarod-race).

The map was built with [Mapbox GL](https://www.mapbox.com/mapbox-gl-js/api/).

[View demo](https://camru.github.io/Iditarod/)

### To build yourself
1. `git clone https://github.com/Camru/Iditarod.git`
2. `npm install`
3. `npm run build`
4. `npm start`


#### Converting data file from csv to json
 `npm install -g csvtojson`
 `csvtojson source.csv > output.json`
