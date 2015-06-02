$(function() {
  
  $('#search').on('keyup', function(e) {
    e.preventDefault();
    var query = $('#search').val();
    console.log(query);
  });

});