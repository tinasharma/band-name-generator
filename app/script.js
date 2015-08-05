'use strict';

$(function() {
  $('#name').click(function() {
    //$.get(); //this tells jquery to get ajax
    $.get('adjective', function(response) {
      console.log(response);
      var adjective = response.word; //out here you can name the var anything, not just adjective
      $('#adjective').text(adjective);
    });

    $.get('verb', function(response) {
      console.log(response);
      var verb = response.word;
      $('#verb').text(verb);
    });

    $.get('noun', function(response) {//verb is the url, response is the response the server sends back
      console.log(response);//log the response
      var noun = response.word;// create a variable verb and save the response in it. .word means you're accessing the key called word in the JSON response
      $('#noun').text(noun);//this assigns the text in the variable verb to the id verb in html file.
    });
  });

  //make an event handler that, when the button is clicked
  //sends a POST request to our server
  $('#submitWords').on('submit', function(e) { //add a event e
    e.preventDefault(); //default action is to reload page and we don't want the page to reload before response comes in

    //get the text entered in the text box and save to a variable
    var adjective = $('input[name=adjective]').val();
    var adjectivePost; //this will be the object we'll pass in

    var verb = $('input[name=verb]').val();
    var verbPost;

    var noun = $('input[name=noun]').val();
    var nounPost;

    if (adjective) { //this will run only if there is a word in it
      adjectivePost = {word: adjective}; //this is not JSON because jquery will convert it to JSON
      //now we'll make post request
      //object handler for post request
      //its very common to use same route name (adjectives) for get the object or post the object
      //$.post(route, function(){ //we will change the route here
      //$.post('adjective', function(){ //add another argument
      $.post('adjective', adjectivePost, function(response) {
        console.log(response);
        var adjectiveRes = response.message;

        //p tag name
        $('#adjectiveRes').text(adjectiveRes);
      });
    }

    if (verb) {
      verbPost = {word: verb};
      $.post('verb', verbPost, function(response) {
        console.log(response);
        var verbRes = response.message;
        $('#verbRes').text(verbRes);
      });
    }

    if (noun) {
      nounPost = {word: noun};
      $.post('noun', nounPost, function(response) {
        console.log(response);
        var nounRes = response.message;
        $('#nounRes').text(nounRes);
      });
    }

  });

});
