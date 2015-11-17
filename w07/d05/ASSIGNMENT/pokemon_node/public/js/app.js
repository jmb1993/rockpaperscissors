'use strict'
$(function(){


  Handlebars.registerHelper('grandChildren_sorted', function(context, options) {
    var moves = []
    Object.keys(context).forEach( function(key){
      moves.push( '<li>'+key+ '<ul>'+ context[key].map(function(move){
          return '<li>'+move.name+'</li>'
        })
        .sort()
        .join('')
        +'</ul></li>');

    })

  return (moves.join(''))

});


  var renderTemplate_showOne = Handlebars.compile($("template#show-one").html());
  var renderTemplate_showMany = Handlebars.compile($("template#show-many").html());


  // recompose the render function above with preset values
/* 
  function renderData(template,data){
    // seed the template
    var html  = template(data);
    // append the template html to the page
    this.html('').show().append(html);

    // clear the form field
    $('#search-name-field').val('')
  }
 var renderOne = renderData.bind( $('#solo-pokemon') , renderTemplate_showOne);
  var renderMany = function(data){ 
    var f = renderData.bind( $('#results-container') , renderTemplate_showMany );
    return f({pokemon:data});
  };*/


// start out with these functions, and then explain why they're not dry. 
// recompose them above and comment out
  var renderOne = function(data){
    // capture the jQuery 
    var $container = $('#solo-pokemon')
    //$container.parents().show()
    // seed the template
    var html  = renderTemplate_showOne(data);

    // append the template html to the page
    $container.html('').show().append(html);
    console.info(data)
    // clear the form field
    $('#search-name-field').val('')
  }


  var renderMany = function(data){

    var $container = $('#results-container')

    // seed the template
    var html  = renderTemplate_showMany({pokemon:data});

    // append the template html to the page
    $container.html('').show().append(html);

    // clear the form field
    $('#search-name-field').val('')


  }


  $('#search-button').click(e=>{

    e.preventDefault();

    if($('#byType').prop('checked')){
     
      $.get('/pokemons/searchByType?type='+$('#search-field').val() , renderMany );

    }else{

      $.get('/pokemons/searchByName?name='+$('#search-field').val() , renderOne );
    }
    return false;
  })

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
