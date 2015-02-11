$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them


  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()

  $('.search').click(function(event){
    var post = $('.tweets').val();
    $('#loading').show();

    $.ajax({
      type:"POST",
      url: "/tweet",
      data: { "tweet" : post},
      success: function(data){
       $('#loading').hide();
       $('#result').html("");
       $('#result').append('<p>' + data + '</p>');
    },
});
event.preventDefault();

  })
});
