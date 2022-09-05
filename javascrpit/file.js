console.log('file connected');
setInterval(showtime, 1000);
function showtime() {
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = 'AM';
    if (hours >= 12) {
        am_pm = "PM";
    }
    if (hours < 12) {
        am_pm = "AM";
    }
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let current_time = hours + " : " + min + " : " + sec + " : " + am_pm;
    // console.log(current_time);
    document.getElementById("clock").innerHTML = current_time;
}
showtime();



