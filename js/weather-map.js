(function () {
    "use strict";
    $().ready(function () {
        var mapLoad = function () {
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.424122&lon=-98.493629&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
            ).done(function (data) {
                console.log(data)
                $('#cityName').html('San Antonio')
                $('#weatherType').html(data.current.weather[0].main)
                if (data.current.weather[0].main === 'Rain') {
                    $('#bg').css('background-image', "url(img/rain.jpg)")
                    $('#icon').html('<img class="image mt-5" src="img/rain-icon.png">')
                } else if (data.current.weather[0].main === 'Clouds') {
                    $('#bg').css('background-image', "url(img/cloudy-bg.jpeg)")
                    $('#icon').html('<img class="image mt-5" src="img/cloudy.png">')
                    $('.card1').css('color', 'black')
                } else if (data.current.weather[0].main === 'Sun') {
                    $('#bg').css('background-image', "url(img/xp.jpg)")
                    $('#icon').html('<img class="image mt-5" src="img/sun.png">')
                }
                $('#degrees').html(Math.round(data.current.temp) + '&#176')
                var unix = data.current.dt * 1000
                var date = new Date(unix)
                $('#date').html(dayInput(date.getDay()) + ' ' + date.getDate() + ', ' + date.getFullYear() + '<br>\n' +
                    'Last Updated: ' + date.getHours() + ':' + date.getMinutes())
                $('#cloudy').html(data.current.clouds + '%')
                $('#humidity').html(data.current.humidity + '%')
                $('#wind').html(data.current.wind_speed + ' km/h')
                $('#rain').html(data.daily[0].rain + ' mm')
            })
        }
        mapLoad()


        var newDay = function (day) {
            var day1 = day
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=29.424122&lon=-98.493629&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
            ).done(function (data) {
                console.log(data)
            for (var i = 0; i <= data.daily.length - 1; i++) {
                console.log('here')
                var unix = data.daily[i].dt * 1000
                var date = new Date(unix)
                console.log(dayInput(date.getDay()))
                console.log(day1)
                if ((dayInput(date.getDay()) === day1)) {
                    $('#weatherType').html(data.daily[i].weather[0].description)
                    if (data.daily[i].weather[0].main === 'Rain') {
                        $('#bg').css('background-image', "url(img/rain.jpg)")
                        $('#icon').html('<img class="image mt-5" src="img/rain-icon.png">')
                        $('.card1').css('color', 'white')
                    } else if (data.daily[i].weather[0].main === 'Clouds') {
                        $('#bg').css('background-image', "url(img/cloudy-bg.jpeg)")
                        $('#icon').html('<img class="image mt-5" src="img/cloudy.png">')
                        $('.card1').css('color', 'black')
                    } else if (data.daily[i].weather[0].main === 'Clear') {
                        $('#bg').css('background-image', "url(img/xp.jpg)")
                        $('#icon').html('<img class="image mt-5" src="img/sun.png">')
                    }
                    $('#degrees').html(Math.round(data.daily[i].temp.max) + '&#176')
                    $('#date').html(dayInput(date.getDay()) + ' ' + date.getDate() + ', ' + date.getFullYear() + '<br>\n' +
                        'Last Updated: ' + date.getHours() + ':' + date.getMinutes())
                    $('#cloudy').html(data.daily[i].clouds + '%')
                    $('#humidity').html(data.daily[i].humidity + '%')
                    $('#wind').html(data.daily[i].wind_speed + ' km/h')
                    $('#rain').html(data.daily[i].rain + ' mm')
                }
            }
            $('#cityName').html('San Antonio')
            })
        }

        $('.dayOfTheWeek').click(function () {
            var dayOut = ($(this).html())
            newDay(dayOut)
        })

        $('#update').click(function () {
            mapLoad()
        })

        function dayInput(input) {
            switch (input) {
                case 0:
                    return "Sunday"
                    break;
                case 1:
                    return "Monday"
                    break;
                case 2:
                    return "Tuesday"
                    break;
                case 3:
                    return "Wednesday"
                    break;
                case 4:
                    return "Thursday"
                    break;
                case 5:
                    return "Friday"
                    break;
                case 6:
                    return "Saturday"
                    break;
            }
        }
    });

    //Vanilla JS
    mapboxgl.accessToken = MAPBOX_TOKEN2;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
        center: [-98.493629, 29.424122], // starting position [lng, lat]
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

// var tempList = []
// for (var i = 1; i <= data.daily.length - 1; i++) {
//     for (var j = 0; j <= data.daily[i].temp.length - 1; j++) {
//         for (var y = 0; y <= data.daily[i].temp.length - 1)
//             tempList.push(data.daily[i].temp[j])
//     }
//     console.log(tempList)
//     tempList = []
// }