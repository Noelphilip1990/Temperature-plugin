// v3.1.0
//Docs at http://simpleweatherjs.com
$(document).ready(function() {
  $.simpleWeather({
    location: 'Dubai, UAE',
    woeid: '',
    unit: 'c',
    success: function(weather) {
      html = '<div class="inline"><i class="icon-'+weather.code+'"></i><h2>Dubai &nbsp; '+weather.temp+'&deg;'+weather.units.temp+'</h2></div>';
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
