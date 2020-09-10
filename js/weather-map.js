(function() {
    "use strict";
    $().ready(function () {
        var mapLoad = function () {
            $.get("http://api.openweathermap.org/data/2.5/weather", {
                APPID: OPEN_WEATHER_MAP_API,
                q:     "San Antonio, US"
            }).done(function (data) {
                console.log(data)
                var dataToShow = ''
                dataToShow += '<h1>' + data.name + '</h1>'
                $('#show').html(dataToShow)
            })
        }
        mapLoad()

        $('#refresh').click(function () {
            mapLoad()
        })
    });
})();