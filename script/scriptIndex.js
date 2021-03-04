function time() {
    var date = new Date();
    var date1 = date.toLocaleString();
    var p1 = document.getElementById("date");
    p1.innerHTML = date1;
}

setInterval(time, 1000);