'use strict'
$(function(){

  // We'll create our own handlebars helper for our data
  Handlebars.registerHelper('grandChildren_sorted', function(context, options) {

    // Array.reduce is idiomatic for "convert this array to something else"

    // Array.reduce maintains a collection obj, to be accessed upon each iteration
    // The collection obj is passed in as the last param of the reduce function
    // In this case, we're passing in an empty array.
    // We'll be pushing each sorted move list.
    var moves = Object.keys(context).reduce( function(collector,key){

      // go into the moves array and return each move wrapped in a <li>
      var sortedMoves = context[key]
        .map( (move)=> '<li>'+move.name+'</li>' )
        .sort()   /* sort the new array */
        .join('') /* convert it into a string */
        //debugger;
      // Add the sorted moves string to the larger <ul>; label it with the current key
      // push the new string into our collector
      collector.push( '<li>'+ key +'<ul>'+ sortedMoves +'</ul></li>');
      
      // for the collector to work properly, we have to return it to the next iteration  
      return collector;
    },[]);

    // convert the whole array into a string, and return it
    return moves.join('');
  });


  // Handlebars.compile takes the html from the template frags 
  // and turns it into a template wrapped in an executable function
  var renderTemplate_showOne  = Handlebars.compile( $("template#show-one").html()  );
  var renderTemplate_showMany = Handlebars.compile( $("template#show-many").html() );

  // this function's params will be bound below
  function renderData(template,data){
    // seed the template
    var html = template(data);
    // append the template html to the page
    this.html('').show().append(html);
  }

  // we need to recompose the functions above to bind two of three variables: $this, template_function
  // the third function (data)  will be provided by the ajax get function later
  var renderOne = renderData.bind( $('#solo-pokemon') , renderTemplate_showOne);
  
  // this function needs to be intercepted and the data param changed
  // because we need data-->{pokemon:data}
  var renderMany = function(data){ 
    var f = renderData.bind( $('#results-container') , renderTemplate_showMany );
    return f({pokemon:data});
  };


  // click event for the search button
  $('#search-button').click(e=>{
    e.preventDefault();

    if($('#byType').prop('checked')){
     
      $.get('/pokemons/searchByType',{type:$('#search-field').val()} , renderMany);
      $('#search-name-field').val('')
    
    }else{

      $.get('/pokemons/searchByName',{name:$('#search-field').val()} , renderOne);
      $('#search-name-field').val('')
    }
    return false;
  });

  // random button click handler
  $('#random-button').click( function(e){
    e.preventDefault();
    $.get('/pokemons/random', renderOne)
  })


  // delegated event
  $('#results-container').on('click','.thumbPokemon',function(e){
    e.preventDefault();
    // 
    $.get('/pokemons/'+$(this).data('pokeid') , renderOne);
  })

})
