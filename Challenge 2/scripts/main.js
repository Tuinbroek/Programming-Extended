// Date
var currentDate = new Date();
var date = zero(currentDate.getDate());
var year = currentDate.getFullYear();
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthNames[currentDate.getMonth()];
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = dayNames[currentDate.getDay()];

document.getElementById("date").innerHTML = day + ", " + date + " " + month + " " + year;


// Time
function clock() {
    var clock = document.getElementById('clock');
    var time = new Date();
    var hours = zero(time.getHours());
    var minutes = zero(time.getMinutes());
    var seconds = zero(time.getSeconds());

    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(clock, 1000);

function zero(number) {
    if (number < 10) {
        number = "0" + number;
    }
    return number;
}
