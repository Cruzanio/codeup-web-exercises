"use strict";

function geocode(search, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
            // to get all the data from the request, comment out the following three lines...
        }).then(function(data) {
            return data.features[0].center;
        });
}
console.log("Coordinates for Codeup: [-98.4896, 29.4268]");

//asynchronous: the console.log is immediate, the geocode result waits for a response before displaying

geocode("600 Navarro St #350, San Antonio, TX 78205", MAPBOX_TOKEN)
    .then(function(result) {
    console.log('Geocode results: ' + result);
    map.setCenter(result);
    map.setZoom(20);
});