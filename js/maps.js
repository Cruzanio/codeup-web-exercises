'use strict';

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 1// starting zoom
});

//Geekdom
var marker1 = new mapboxgl.Marker().setLngLat([-98.4935, 29.4264]).addTo(map)

//Codeup
var marker2 = new mapboxgl.Marker().setLngLat([-98.4896, 29.4268]).addTo(map)

//Aviano
var marker3 = new mapboxgl.Marker().setLngLat([12.586885, 46.072371]).addTo(map)


var avianoPopup = new mapboxgl.Popup().setHTML("<p><em>Italy</em></p>").addTo(map)


marker3.setPopup(avianoPopup)