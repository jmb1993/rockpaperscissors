
module.exports =
	findRegion: function(object, name_of_country){
		for(var item in object){
			if(name_of_country == item){
				return object[item].region
			}
		}
};
