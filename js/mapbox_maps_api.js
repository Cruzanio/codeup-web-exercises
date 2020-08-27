'use strict';

mapboxgl.accessToken = MAPBOX_TOKEN2;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [12.5881, 46.0695], // starting position [lng, lat]
    zoom: 15// starting zoom
});

//New RistoPizza
var marker1 = new mapboxgl.Marker().setLngLat([12.586885, 46.072371]).addTo(map)

//BeFeds
var marker2 = new mapboxgl.Marker().setLngLat([12.5886, 46.0748]).addTo(map)

//Kebabs
var marker3 = new mapboxgl.Marker().setLngLat([12.587187, 46.070614]).addTo(map)

var avianoPopup = new mapboxgl.Popup().setHTML("<p><em>New RistoPizza</em></p>").addTo(map)
var beFedsPopup = new mapboxgl.Popup().setHTML("<p><em>BeFeds</em></p>").addTo(map)
var kebabPopup = new mapboxgl.Popup().setHTML("<p><em>Buonissimo Kebabs</em></p>").addTo(map)

marker1.setPopup(avianoPopup)
marker2.setPopup(beFedsPopup)
marker3.setPopup(kebabPopup)


