'use strict';

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 17// starting zoom
});

//Geekdom
var marker = new mapboxgl.Marker().setLngLat([-98.4935, 29.4264]).addTo(map)

//Codeup
var marker1 = new mapboxgl.Marker().setLngLat([-98.4896, 29.4268]).addTo(map)