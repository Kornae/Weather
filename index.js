var query = $('#search').val();

if ($("#search").keypress(function (event) {
    if (event.keyCode === 13) {
        $('.card').css('opacity', 0.9);
        $('.card').removeClass('hidden');
        $('#search').addClass('hidden');
        $('.card-box').show();
        $('.intro, .secondary').hide();
        $('.search-icon').hide();


        query = $('#search').val()
        console.log(query)


        const api = 'https://api.weatherapi.com/v1/current.json?key=' + key + '&q=' + query + '&aqi=no';

        function getWeather() {
            fetch(api)
                .then(response => response.json())
                .then(data => {
                    var city = data.location.name;
                    var temperature = data.current.temp_f;
                    var celcius = data.current.temp_c;
                    var state = data.location.region;
                    var country = data.location.country;
                    var description = data.current.condition.text;
                    var icon = data.current.condition.icon;
                    var uv = data.current.uv;
                    var humid = data.current.humidity;
                    var visibility = data.current.vis_miles;
                    var wind = data.current.wind_mph;
                    var windDirection = data.current.wind_dir;

                    $('#location').text(city + ', ' + state);
                    $('#country').text(country);
                    $('#temp').text(Math.round(temperature) + '° F');
                    $('#description').text(description);
                    $('#uv').text(uv);
                    $('#humidity').html(humid + '%');
                    $('#visibility').html(visibility + ' mi')
                    $('#wind').html(wind + ' mph ' + windDirection)


                    const imageURL = "https:" + icon;
                    $("#icon").attr("src", imageURL);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }

        getWeather();
    }

})) {

}