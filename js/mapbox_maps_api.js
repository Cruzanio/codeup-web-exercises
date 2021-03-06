'use strict';


mapboxgl.accessToken = MAPBOX_TOKEN2;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
    center: [12.5881, 46.0695], // starting position [lng, lat]
    zoom: 12// starting zoom
});


document.getElementById('map-reset').addEventListener("click", reset)
function reset() {
    location.reload(true)
}

var markers = []

function restaurant1 () {
    geocode("Via Ippolito Nievo Nr 2, 33081, Aviano Italy", MAPBOX_TOKEN2)
        .then(function (result) {
            console.log('Geocode for New Risto Pizza results: ' + result);
            var marker1 = new mapboxgl.Marker().setLngLat([12.586282, 46.073095]).addTo(map)
            markers.push(marker1)
            map.setCenter(result);
            map.setZoom(17);
            marker1.setPopup(avianoPopup)
        });
}

function restaurant2 () {
    geocode("Viale per Costa, 6/B, 33081 Castello d'Aviano PN, Italy", MAPBOX_TOKEN2)
        .then(function (result) {
            console.log('Geocode for Befeds results: ' + result);
            var marker2 = new mapboxgl.Marker().setLngLat([12.5886, 46.0748]).addTo(map)
            markers.push(marker2)
            map.setCenter(result);
            map.setZoom(17);
            marker2.setPopup(beFedsPopup)
        });
}

function restaurant3 () {
    geocode("Via Giuseppe Mazzini, 15, 33081 Castello d'Aviano PN, Italy", MAPBOX_TOKEN2)
        .then(function (result) {
            console.log('Geocode for Buonissimo Kebabs results: ' + result);
            var marker3 = new mapboxgl.Marker().setLngLat([12.587187, 46.070614]).addTo(map)
            markers.push(marker3)
            map.setCenter(result);
            map.setZoom(17);
            marker3.setPopup(kebabPopup)
        });
}

var res1 = document.getElementById('fav1')
res1.addEventListener('click', restaurant1)

var res2 = document.getElementById('fav2')
res2.addEventListener('click', restaurant2)

var res3 = document.getElementById('fav3')
res3.addEventListener('click', restaurant3)


var bigSelect = document.querySelector('.options')
bigSelect.addEventListener('change', (event) => {
    if(`${event.target.value}` === '5') {
        map.setZoom(5)
    }
    if(`${event.target.value}` === '15') {
        map.setZoom(15)
    }
    if(`${event.target.value}` === '20') {
        map.setZoom(20)
    }
});



var zoom5 = document.getElementById('5')
function changeZoom5() {
    map.setZoom(5)
}

var zoom15 = document.getElementById('15')
function changeZoom15() {
    map.setZoom(15)
}

var zoom20 = document.getElementById('20')
function changeZoom20() {
    map.setZoom(20)
}




zoom5.addEventListener('click', changeZoom5)
zoom15.addEventListener('click', changeZoom15)
zoom20.addEventListener('click', changeZoom20)



var avianoPopup = new mapboxgl.Popup()
    .setHTML("<p><em>New RistoPizza</em></p>" +
        "<ul>" +
        "<li>Free Scorpino</li>" +
        "<li>Bacon Wrapped Green Beans</li>" +
        "<li>Amazing Limoncello</li>" +
        "</ul>" +
        "<a target='_blank' href='https://www.newristobymario.com/'>Click to Visit Website</a>").addTo(map)

var beFedsPopup = new mapboxgl.Popup()
    .setHTML("<img src='img/befed-logo.png' alt='befed-logo' class='befed'>" +
        "<p><em>Befeds</em></p>" +
        "<ul>" +
        "<li>Chicken</li>" +
        "<li>Fries</li>" +
        "<li>Red Beer</li>" +
        "</ul>" +
        "<a target='_blank' href='https://www.befedpub.com/en/'>Click to Visit Website</a").addTo(map)

var kebabPopup = new mapboxgl.Popup()
    .setHTML("<p><em>Buonissimo Kebab</em></p>" +
        "<ul>" +
        "<li>Best Kebabs</li>" +
        "<li>Number 8 (extra Meat)</li>" +
        "</ul>" +
        "<a target='_blank' href='https://www.newristobymario.com/'>Click to Visit Website</a").addTo(map)


let newRistoPizza = {
    name: 'New RistoPizza',
    owner: 'Mario',
    formality: 'formal'
}

let beFeds = {
    name: 'BeFeds',
    owner: 'Giovanni',
    formality: 'informal'
}

let buonKebabs = {
    name: 'Buonissimo Kebabs',
    owner: 'The Twins',
    formality: 'informal'
}

let avianoEats = [newRistoPizza, beFeds, buonKebabs]
avianoEats.forEach(function (restaurant, i) {
    console.log("The owner of " + restaurant.name + " is " + restaurant.owner)
    console.log("The formality type at " + restaurant.name + " is " + restaurant.formality)
})

function findForUser() {
    var userInput = document.getElementById('userSearch')
    geocode(userInput.value, MAPBOX_TOKEN2)
        .then(function (result) {
            console.log('Geocode for ' + userInput.value + ' is: ' + result);
            var userMarker = new mapboxgl.Marker()
                .setLngLat(result)
                .addTo(map)
            map.setCenter(result);
            map.setZoom(17);
            // console.log(marker4)
        });
}

document.getElementById('search').addEventListener('click', findForUser)

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

function showMarkers() {
    setMapOnAll(map);
}

var toggleButton = document.getElementById('markers');
toggleButton.addEventListener('click', clearMarkers)

function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}