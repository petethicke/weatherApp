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
        $.each(data, function(i, cities){
          cities.forEach(function(city){
            var $list = $("<li>").text(city.name);
            $list.appendTo('#results');
          });
        });
      }
    });
  });

  $('#searchForm').on('submit', function(e) {
    e.preventDefault();
    var query = $('#search').val();
    $.ajax ({
      url: 'http://api.wunderground.com/api/2516967/conditions/q/CA/San_Francisco.json',
      type: 'GET',
      dataType: 'jsonp',
      success: function(data) {
        $('data').appendTo('#weather');
      }
    });

  });

});


