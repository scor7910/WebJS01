
//function to Set Active Tab
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {

        	tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*function to calculate BMR in Metric*/
function calculateBMRInMetric() {
  var gender = document.getElementById("genderM").value;
  var age = document.getElementById("ageM").value;
  var height = document.getElementById("heightM").value;
  var weight = document.getElementById("weightM").value;
  var bmrResult = 0;
  if (validateUserInput(age) == false || validateUserInput(height) == false ||
     validateUserInput(weight) == false) {
      alert("Input correct value.");
      return false;
  }

  if (gender == "male") {
      bmrResult = 10*weight + 6.25*height - 5*age + 5;
  }
  else {
      bmrResult = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }
  
  displayBMRResult(bmrResult);
  return false;
}

/*function to calculate BMR in Imperial*/
function calculateBMRInImperial() {
  var gender = document.getElementById("genderI").value;
  var age = document.getElementById("ageI").value;
  var height = document.getElementById("heightI").value;
  var weight = document.getElementById("weightI").value;
  var bmrResult = 0;

  if (validateUserInput(age) == false || validateUserInput(height) == false ||
    validateUserInput(weight) == false) {
      alert("Input correct value.");
      return false;
  }
  if (gender == "male") {      
      bmrResult = 66 + ( 6.23*weight ) + ( 12.7*height ) - ( 6.8 * age );
  }
  else {
      bmrResult = 655 + ( 4.35*weight) + ( 4.7*height) - ( 4.7*age );
  }
  displayBMRResult(bmrResult);
  return false;
}

/*function to validate user input*/
function validateUserInput(inputValue) {
    if (isNaN(inputValue) || inputValue < 1)
        return false;
    else
        return true;
}

/*function to display BMR result*/
function displayBMRResult(result) {
    document.getElementById("bmrResult").innerHTML = " <h3>Your BMR result is <h2>" + result + "</h2></h3>";
    document.getElementById('bmrResult').style.display = "block";
}
