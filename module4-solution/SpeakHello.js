// STEP 2:
(function (window) {
	// STEP 3:
	var helloSpeaker = {}

	// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
	var speakWord = "Hello";

	// STEP 4:
	helloSpeaker.speak = function(name){
		console.log(speakWord + " " + name);
	}

	// *******************************
  	// Additional Requirments
  	// *******************************
	helloSpeaker.speakSimple = function(name){
		return (speakWord + " " + name);
	}

	// STEP 5:
	window.helloSpeaker = helloSpeaker;

})(window);
