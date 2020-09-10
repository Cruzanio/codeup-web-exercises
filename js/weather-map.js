(function () {
    "use strict";
    $().ready(function () {
        var mapLoad = function () {
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.424122&lon=-98.493629&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
            ).done(function (data) {
                console.log(data)
                // $('#city').html(data.city['name'])
                var imgToUse = ""
                $('#cityName').html(dataToShow)
            })
        }
        mapLoad()

        $('#refresh').click(function () {
            mapLoad()
        })
    });

    //Vanilla JS
    mapboxgl.accessToken = MAPBOX_TOKEN2;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
        center: [-98.493629,29.424122], // starting position [lng, lat]
        zoom: 12// starting zoom
    });

})();

// (data.list[0].weather[0].main === 'Clouds')
// //selects for list item
// for (var i = 0; i <= data.list.length - 1; i++) {
//     //runs all list items against the i item for same date
//     for (var j = 0; j <= data.list.length - 1; j++) {
//         //if date is the same push the temp of j item to array
//         if (data.list[i].dt_txt.split(" ")[0] === data.list[j].dt_txt.split(" ")[0]) {
//             sameDate.push(data.list[j].main['temp_max'])
//
//         }
//     }
//     forecast.push((Math.max.apply(Math, sameDate)))
//     console.log(forecast)
//     sameDate = []
// }

// "https://api.openweathermap.org/data/2.5/forecast", {
// q: "San Antonio",
//     APPID: OPEN_WEATHER_MAP_API,
//     units: 'imperial'