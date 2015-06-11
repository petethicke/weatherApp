$(function() {

  $('#search').on('keyup', function(e) {
    e.preventDefault();
    var query = $('#search').val();
    $.ajax ({
      url: 'http://autocomplete.wunderground.com/aq?query=' + query + "&cb=callback",
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback:'callback',
      // error: function() {
      // },
      success: function(data) {
        console.log(query);
        $('#results').empty();
        $('#weather').empty();
        $.each(data, function(i, places){
          places.forEach(function(place){
            var $list = $("<li>").text(place.name);
            $list.appendTo('#results');
            $("li").on('click', function(){
              var city = $(this).text();
              $("#input").val(city);
            });
          });
        });
      }
    });
  });

  $('#btn').on('click', function(e) {
    e.preventDefault();
    var query = $('#search').val();
    //console.log(query);
    $.ajax ({
      url: 'http://api.wunderground.com/api/08cfbef71abd6291/conditions/q/' + query + ".json?callback=jsonCallback",
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback:'callback',
      success: function(data) {
        $('#results').empty();
        $('#weather').empty();
        if(data.current_observation){
          var cityName = data.current_observation.display_location.city;
          var conditions = data.current_observation.weather;
          $('<h3>').appendTo('#results').html(cityName);
          $('<p>').appendTo('#results').html(conditions);
        }
      }
    });
  });
});



