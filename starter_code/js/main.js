
// Wait for the DOM element to load before executing 
$(document).ready( function(){
// 1. When user clicks the "submit" button
	$("#submit-btn").click(Update);
// 2. Run Submit button functions
	function Update(event)
	 {event.preventDefault();
// 3. Get the first input
	var submitSomething = $("#city-type").val();
// 4. If user submits "la" , display "la" img
if (submitSomething == "la"||submitSomething == "LA" ||submitSomething == "Los Angelos") {
	$("body").removeClass();
	$("body").attr("class","la") //Attribute Value Pair

}// 5. If user submits "nyc" remove other img and display "nyc" img
else if (submitSomething == "nyc"||submitSomething == "NYC" ||submitSomething == "New York City") {
	$("body").removeClass();
	$("body").addClass("nyc")

}// 8. If user submits "sf" , remove other img and display "sf" img

else if (submitSomething == "sf"||submitSomething == "SF" ||submitSomething == "San Francisco") {
	$("body").removeClass();
	$("body").addClass("sf")

}// 9. If user submits "sydney" , remove other img and display "sydney" img
else if (submitSomething == "sydney"||submitSomething == "Sydney") {
	$("body").removeClass();
	$("body").addClass("sydney")

}// 10. If user submits "saustin" , remove other img and display "austin" img
else if (submitSomething == "austin"||submitSomething == "Austin") {
	$("body").removeClass();
	$("body").addClass("austin")
}
// 11. If none of the images load, show default city pics image
	else {
		$("body").removeClass();
	}


}



});

