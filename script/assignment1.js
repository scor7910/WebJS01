
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
function calculateBMOInMetric() {
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");

  if(gender =="Male") {

  }
  else {

  }
}

/*function to calculate BMR in Imperial*/
function calculateBMOInImperial {
  var gender = document.getElementById("gender").value;
  var age = document.getElementById("age");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");

  if(gender =="Male") {

  }
  else {
  }
}
