$(function(){
  var pokeShow_template = Handlebars.compile($("#pokeShow-template").html());
  var pokemons_template = Handlebars.compile($("#pokemons-template").html());

  var renderOne = (data)=>{
    // capture the jQuery 
    var $container = $('#solo-pokemon')
    //$container.parents().show()
    // seed the template
    var html  = pokeShow_template(data);

    // append the template html to the page
    $container.html('').show().append(html);

    // clear the form field
    $('#search-name-field').val('')
  }


  var renderMany = data=>{

    var $container = $('#results-container')

    console.log({pokemon:data})
    // seed the template
    var html  = pokemons_template({pokemon:data});

    console.log(html)

    // append the template html to the page
    $container.html('').show().append(html);

    // clear the form field
    $('#search-name-field').val('')


  }


  $('#search-button').click(e=>{

    e.stopPropagation;

    if($('#byType').prop('checked')){
     
      $.get('/pokemons/searchByType?type='+$('#search-field').val() , function(data){return renderMany(data)});

    }else{

      $.get('/pokemons/searchByName?name='+$('#search-field').val() , function(data){return renderOne(data)});
    }
    return false;
  })

  $('#random-button').click(e=>{
    e.stopPropagation;
    $.get('/pokemons/random', data=>renderOne(data))
    return false;
  })


})
