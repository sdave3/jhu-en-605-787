// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//

// STEP 1:
(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 10:
  for (var name in names){

    // STEP 11:
    var firstLetter = names[name].charAt(0).toLowerCase();

    // STEP 12:
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[name]);
    }else {
      helloSpeaker.speak(names[name]);
    }
  }

  // *******************************
  // Additional Requirments
  // *******************************

  //named function applied to array map
  var namesAddReqFunct = function(name){
    var firstLetterNew = name.charAt(0).toLowerCase();
    if (firstLetterNew === 'j') {
      return byeSpeaker.speakSimple(name);
    } else {
      return helloSpeaker.speakSimple(name);
    }
  }

  // additional requirements Array of Names mapped
  var additionalReqNames = names.map(namesAddReqFunct);

  // Print out additional requirements list to console
  for (var name in additionalReqNames){
    console.log(additionalReqNames[name]);
  }



  // *******************************
  // Bonus/Optional Requirments
  // *******************************

  // Initial Value Object
  var bonusObj = {};
  bonusObj.helloArr = [];
  bonusObj.byeArr = [];

  //named function applied to array reducer
  var namesBonusFunct = function(namesArr, name){
    var firstLetterBonus = name.charAt(0).toLowerCase();
    if (firstLetterBonus === 'j') {
       bonusObj.byeArr.push(byeSpeaker.speakSimple(name))
    }else {
       bonusObj.helloArr.push(helloSpeaker.speakSimple(name))
    }
    return bonusObj;
  }

  // additional requirements Array of Names Reduced
  var bonusReducedObj = names.reduce(namesBonusFunct, bonusObj);

  // print list of Greetings to console

  // Good Bye
  for (byes in bonusReducedObj['byeArr']){
    console.log(bonusReducedObj['byeArr'][byes])
  }

  // Hello
  for (hellos in bonusReducedObj['helloArr']){
    console.log(bonusReducedObj['helloArr'][hellos])
  }



})();

