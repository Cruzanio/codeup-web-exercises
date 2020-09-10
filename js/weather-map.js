(function () {
    "use strict";
    $().ready(function () {
        var mapLoad = function () {
            $.get("http://api.openweathermap.org/data/2.5/forecast", {
                APPID: OPEN_WEATHER_MAP_API,
                q: "San Antonio, US"
            }).done(function (data) {
                console.log(data.list[0].dt_txt.split(' ')[0])
                console.log(data)
                $('#city').html(data.city['name'])
                var imgToUse = ""
                var dataToShow = ""
                var high = ""
                var forecast = []
                var sameDate = []

                //selects for list item
                for (var i = 0; i <= data.list.length - 1; i++) {
                    //runs all list items against the i item for same date
                    for (var j = 0; j <= data.list.length - 1; j++) {
                        //if date is the same push the temp of j item to array
                        if (data.list[i].dt_txt.split(" ")[0] === data.list[j].dt_txt.split(" ")[0]) {
                            sameDate.push(data.list[j].main['temp_max'])
                            console.log(sameDate)
                            // forecast.push((Math.max.apply(Math, sameDate)))
                            // console.log(forecast)

                        }
                    }
                    sameDate = []
                }

                data.list.forEach(function () {
                    if (data.list[0].weather[0].main === 'Clouds') {
                        imgToUse = "<img class='card-img-top' src='img/cloudy.png' alt='cloudy'>"
                    }
                    dataToShow += '<div class="card" style="width: 18rem;">' +
                        imgToUse +
                        '<div class="card-body">' +
                        '<h5 class="card-title">Card title</h5>' +
                        "<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>" +
                        '</div>' +
                        '</div>'
                })
                $('#show').html(dataToShow)
            })
        }
        mapLoad()

        $('#refresh').click(function () {
            mapLoad()
        })
    });
})();