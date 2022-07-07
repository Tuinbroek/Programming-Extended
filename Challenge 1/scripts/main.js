//Distance
var distanceCount = 0;
var distance = setInterval(function () {
    document.getElementById('distance_left').innerHTML = ++distanceCount;
}, 1500);

//Fuel
var fuelCount = 20000;
var fuelNumber = 0;
var fuel = setInterval(function () {
    document.getElementById('fuel_left').innerHTML = --fuelCount;
    if (fuelCount === fuelNumber) {
      fuelCount = 20000;
    }
}, 1500);

//Throttle
var throttleCount = 100;
var throttleNumber = 0;
var fuel = setInterval(function () {
    document.getElementById('throttle_percentage').innerHTML = --throttleCount;
    if (throttleCount === throttleNumber) {
      throttleCount = 100;
    }
}, 1500);

//Speed
var speedCount = 0;
var fuel = setInterval(function () {
    document.getElementById('speed_current').innerHTML = ++speedCount;
}, 10);

//Acceleration
var accelerationCount = 0;
var accelerationNumber = 100;
var fuel = setInterval(function () {
    document.getElementById('acceleration_percentage').innerHTML = ++accelerationCount;
    if (accelerationCount === accelerationNumber) {
      accelerationCount = 0;
    }
}, 100);

//Gravity
var gravityCount = 9;
var gravityNumber = 0;
var fuel = setInterval(function () {
    document.getElementById('gravity_current').innerHTML = --gravityCount;
    if (gravityCount === gravityNumber) {
      gravityCount = 9;
    }
}, 5000);

//Atmosphere
function atmosphere() {
  document.getElementById("oxygen_ship").innerHTML = "Oxygen: " + Math.floor(Math.random() * 6) + 1 + "%";
  document.getElementById("nitrogen_ship").innerHTML = "Nitrogen: " + Math.floor(Math.random() * 9) + 3 + "%";
  document.getElementById("carbondioxide_ship").innerHTML = "Carbon dioxide: " + Math.floor(Math.random() * 3) + 1 + "%";
}

//Food
var food = Math.floor(Math.random() * 10000) + 1;
document.getElementById("food").innerHTML = food + ' KG';

//Water
var water = Math.floor(Math.random() * 1000000) + 1;
document.getElementById("water").innerHTML = water + ' L';

//Gravity Converter
function convertGravity() {
  var earthGravity = parseFloat(document.getElementById("earth_gravity").value);
  var marsGravity = earthGravity * 2.642589598491;
  document.getElementById("mars_gravity").innerHTML = "The gravity on Mars is " + marsGravity.toFixed(2) + " g";
}

//Miles Converter
function convertMiles() {
  var earthMiles = parseFloat(document.getElementById("earth_miles").value);
  var marsMiles = earthMiles * 5;
  document.getElementById("mars_miles").innerHTML = "The miles on Mars is " + marsMiles + " miles";
}