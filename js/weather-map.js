(function () {
    "use strict";
    $().ready(function () {
        var lat = 29.424122
        var lon = -98.493629
        var currentWeatherLoad = function () {
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
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
                } else if (data.current.weather[0].main === 'Clear') {
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
                if (data.daily[0].rain === undefined) {
                    $('#rain').html('No Available Data')
                } else {
                    $('#rain').html(data.daily[0].rain + ' mm')
                }

            })
        }
        currentWeatherLoad()

        var newDay = function (day) {
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
            ).done(function dataRead(data) {
                $('#cityName').html('Diff Name')
                for (var i = 0; i <= data.daily.length - 1; i++) {
                    var unix = data.daily[i].dt * 1000
                    var date = new Date(unix)
                    console.log(dayInput(date.getDay()))
                    if ((dayInput(date.getDay()) === day)) {
                        $('#weatherType').html(data.daily[i].weather[0].description)
                        if (data.daily[i].weather[0].main === 'Rain') {
                            console.log(data.daily[i].weather[0].main)
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
                            $('.card1').css('color', 'white')
                        }
                        $('#degrees').html(Math.round(data.daily[i].temp.max) + '&#176')
                        $('#date').html(dayInput(date.getDay()) + ' ' + date.getDate() + ', ' + date.getFullYear() + '<br>\n' +
                            'Last Updated: ' + date.getHours() + ':' + date.getMinutes())
                        $('#cloudy').html(data.daily[i].clouds + '%')
                        $('#humidity').html(data.daily[i].humidity + '%')
                        $('#wind').html(data.daily[i].wind_speed + ' km/h')
                        if (data.daily[i].rain === undefined) {
                            $('#rain').html('No Available Data')
                        } else {
                            $('#rain').html(data.daily[i].rain + ' mm')
                        }
                    }
                }
            })
        }

        $('#update').click(function () {
            currentWeatherLoad()
        })

        $('.dayOfTheWeek').click(function () {
            var dayOut = ($(this).html())
            newDay(dayOut)
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
                    map.setZoom(14);
                    lat = result[1]
                    lon = result[0]
                    var LLObj = {lng: lon, lat: lat}
                    currentWeatherLoad()
                    reverseGeocode(LLObj, MAPBOX_TOKEN2).then(function (data) {
                        return data
                    })
                });
        }

        document.getElementById('search').addEventListener('click', findForUser)

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

    mapboxgl.accessToken = MAPBOX_TOKEN2;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
        center: [-98.493629, 29.424122], // starting position [lng, lat]
        zoom: 12// starting zoom
    });
})();
