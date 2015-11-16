$(function(){
  $('#search-by-name').click(e=>{
    $.get('/pokemons/searchByName?name='+$('#search-name-field').val() , data=>renderOne(data));
  })
})

var renderOne = (data)=>{
  
}