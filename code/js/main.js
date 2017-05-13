//create an array for all the cities that will appear in your dropdown
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

// Wait for the DOM element to load before executing 
$(document).ready(function() {
	
	//go through the array and for every value, select the city type and add html that you need for the page
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
}

//if user submits "NYC" from dropdown display New York City

$("form").on("change", "#city-type" , function(){
	var city = $("#city-type").val();
	if(city== "NYC"){
		$("body").attr("class" , "nyc");
	}

//else if user submits "SF" from dropdown display San Fransisco
else if (city=="SF") {
	$("body").attr("class","sf");
}

else if (city=="LA") {
	$("body").attr("class","la");
}

else if (city=="ATX") {
	$("body").attr("class","austin");
}

else if (city=="SYD") {
	$("body").attr("class","sydney");
}

  });
});