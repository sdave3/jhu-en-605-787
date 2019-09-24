// STEP 6:
(function (window) {
	// STEP 7:
	var byeSpeaker = {}

	// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
	var speakWord = "Good Bye";

	// STEP 8:
	byeSpeaker.speak = function(name){
		console.log(speakWord + " " + name);
	}

	// *******************************
  	// Additional Requirments
  	// *******************************
	byeSpeaker.speakSimple = function(name){
		return (speakWord + " " + name);
	}

	// STEP 9:
	window.byeSpeaker = byeSpeaker;

})(window);
