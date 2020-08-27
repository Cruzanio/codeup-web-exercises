"use strict";

//Geocoder
function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function (res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function (data) {
            return data.features[0].center;
        });
}

geocode("Via Ippolito Nievo Nr 2, 33081, Aviano Italy", MAPBOX_TOKEN2)
    .then(function (result) {
        console.log('Geocode for New Risto Pizza results: ' + result);
        map.setCenter(result);
        map.setZoom(15);
    });

//Reverse Geocode
function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[0].place_name;
        });
}
var   codeUpCor={lng: -98.4935, lat: 29.4264}

reverseGeocode(codeUpCor, MAPBOX_TOKEN2)
    .then(function (result) {
        console.log("Did we find New RistoPizza? " + result)
    })