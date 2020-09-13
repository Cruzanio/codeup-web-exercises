(function () {
    "use strict";
    $().ready(function () {
        var lat = 29.424122
        var lon = -98.493629

        mapboxgl.accessToken = MAPBOX_TOKEN2;
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
            center: [lon, lat], // starting position [lng, lat]
            zoom: 12// starting zoom
        });

        $('#update').html('Click to show current weather for: San Antonio')
        $('#cityName').html('San Antonio')

        var currentWeatherLoad = function () {
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
            ).done(function (data) {
                    $('#weatherType').html(data.current.weather[0].main)
                    $('#degrees').html(Math.round(data.current.temp) + '&#176')
                    $('#cloudy').html(data.current.clouds + '%')
                    $('#humidity').html(data.current.humidity + '%')
                    $('#wind').html(data.current.wind_speed + ' km/h')

                    //Turn DT into readable data/time stamp
                    //Uses dayInput Switch function
                    var unix = data.current.dt * 1000
                    var date = new Date(unix)
                    $('#date').html(dayInput(date.getDay()) + ' ' + date.getDate() + ', ' + date.getFullYear() + '<br>\n' +
                        'Last Updated: ' + date.getHours() + ':' + date.getMinutes())

                    //Rain data is not guaranteed
                    if (data.daily[0].rain === undefined) {
                        $('#rain').html('No Available Data')
                    } else {
                        $('#rain').html(data.daily[0].rain + ' mm')
                    }

                    //Dynamic Background
                    if (data.current.weather[0].main === 'Rain') {
                        // $('#bg').css('background-image', "url(img/rain.jpg)")
                        $('#icon').html('<img class="image mt-5" src="img/rain-icon.png">')
                    } else if (data.current.weather[0].main === 'Clouds') {
                        // $('#bg').css('background-image', "url(img/cloudy-bg.jpeg)")
                        $('#icon').html('<img class="image mt-5" src="img/cloudy.png">')
                        // $('.card1').css('color', 'black')
                    } else if (data.current.weather[0].main === 'Clear') {
                        // $('#bg').css('background-image', "url(img/xp.jpg)")
                        $('#icon').html('<img class="image mt-5" src="img/sun.png">')
                    }

                    //High Low HTML Injections
                    for (var i = 1; i <= data.daily.length - 1; i++) {
                        unix = data.daily[i].dt * 1000
                        date = new Date(unix)
                        if (dayInput(date.getDay()) === 'Sunday') {
                            $('#Sunday').html('<p>Sunday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        } else if (dayInput(date.getDay()) === 'Monday') {
                            $('#Monday').html('<p>Monday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        } else if (dayInput(date.getDay()) === 'Tuesday') {
                            $('#Tuesday').html('<p>Tuesday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        } else if (dayInput(date.getDay()) === 'Wednesday') {
                            $('#Wednesday').html('<p>Wednesday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        } else if (dayInput(date.getDay()) === 'Thursday') {
                            $('#Thursday').html('<p>Thursday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        } else if (dayInput(date.getDay()) === 'Friday') {
                            $('#Friday').html('<p>Friday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        } else if (dayInput(date.getDay()) === 'Saturday') {
                            $('#Saturday').html('<p>Saturday</p>' + 'H: ' + Math.round(data.daily[i].temp.max) + ' ' + 'L: ' + Math.round(data.daily[i].temp.min))
                        }
                    }
                }
            )
        }
        currentWeatherLoad()

        //Takes the id of clicked item and runs newDay
        $('.dayOfTheWeek').click(function () {
            var dayOut = $(this).attr('id')
            newDay(dayOut)
        })

        //Takes in the day from above and checks forecast array displaying info of matching day
        var newDay = function (day) {
            $.get("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=hourly,minutely&appid=" + OPEN_WEATHER_MAP_API + "&units=imperial"
            ).done(function dataRead(data) {
                for (var i = 0; i <= data.daily.length - 1; i++) {
                    var unix = data.daily[i].dt * 1000
                    var date = new Date(unix)
                    if ((dayInput(date.getDay()) === day)) {
                        $('#weatherType').html(data.daily[i].weather[0].description)
                        $('#degrees').html(Math.round(data.daily[i].temp.max) + '&#176')
                        $('#date').html(dayInput(date.getDay()) + ' ' + date.getDate() + ', ' + date.getFullYear() + '<br>\n' +
                            'Last Updated: ' + date.getHours() + ':' + date.getMinutes())
                        $('#cloudy').html(data.daily[i].clouds + '%')
                        $('#humidity').html(data.daily[i].humidity + '%')
                        $('#wind').html(data.daily[i].wind_speed + ' km/h')

                        //Rain is not guaranteed
                        if (data.daily[i].rain === undefined) {
                            $('#rain').html('No Available Data')
                        } else {
                            $('#rain').html(data.daily[i].rain + ' mm')
                        }

                        //Dynamic Background
                        if (data.daily[i].weather[0].main === 'Rain') {
                            // $('#bg').css('background-image', "url(img/rain.jpg)")
                            $('#icon').html('<img class="image mt-5" src="img/rain-icon.png">')
                            $('.card1').css('color', 'white')
                        } else if (data.daily[i].weather[0].main === 'Clouds') {
                            // $('#bg').css('background-image', "url(img/cloudy-bg.jpeg)")
                            $('#icon').html('<img class="image mt-5" src="img/cloudy.png">')
                            // $('.card1').css('color', 'black')
                        } else if (data.daily[i].weather[0].main === 'Clear') {
                            // $('#bg').css('background-image', "url(img/xp.jpg)")
                            $('#icon').html('<img class="image mt-5" src="img/sun.png">')
                            $('.card1').css('color', 'white')
                        }
                    }
                }
            })
        }

        //Displays current weather for selected place
        $('#update').click(function () {
            currentWeatherLoad()
        })

        function createMarker(LLObj) {
            var userMarker = new mapboxgl.Marker()
                .setLngLat(LLObj)
                .addTo(map)
                .setDraggable(true)
            map.setCenter(LLObj);
            map.setZoom(14);

            function onDragEnd() {
                var lngLat = userMarker.getLngLat()
                lat = lngLat.lat
                lon = lngLat.lng
                map.setCenter(lngLat)
                map.setZoom(10)
                currentWeatherLoad()
            }
            userMarker.on('dragend', onDragEnd)
        }

        function findForUser() {
            var userInput = document.getElementById('userSearch')
            geocode(userInput.value, MAPBOX_TOKEN2)
                .then(function (result) {
                    console.log(result)
                    lat = result[1]
                    lon = result[0]
                    var LLObj = {lng: lon, lat: lat}
                    createMarker(LLObj)
                    reverseGeocode(LLObj, MAPBOX_TOKEN2)
                        .then(function (data) {
                            $('#cityName').html(data)
                            $('#update').html('Show Current Weather for: ' + data)
                        })
                    currentWeatherLoad()
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
})();
