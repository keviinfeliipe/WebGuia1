
window.onload = function () {
    drawnLine();
    drawnRectangle();
    drawnCircle();
};

function drawnRectangle() {
    var canvas = document.getElementById("rectangle");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(100, 50, 100, 100);
};

function drawnCircle() {
    var canvas = document.getElementById("circle");
    var context = canvas.getContext("2d");
    context.fillStyle = "#FF0000";
    context.arc(150, 100, 70, 0, 2 * Math.PI, false);
    context.stroke();
};

function drawnLine() {
    var canvas = document.getElementById("line");
    var context = canvas.getContext("2d");
    context.fillStyle = "#ff0000";
    context.moveTo(100, 100);
    context.lineTo(0, 0);
    context.stroke();
}

function getZodiacal() {
    var dateString = new String(document.getElementById("dateInput").value).split('-');
    var date = new Date(dateString[0], dateString[1] - 1, dateString[2]);

    if (compareDates(new Date(date.getFullYear(), 3 - 1, 21), new Date(date.getFullYear(), 4 - 1, 19), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Aries";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 5 - 1, 2), new Date(date.getFullYear(), 5 - 1, 20), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Tauro";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 5 - 1, 21), new Date(date.getFullYear(), 6 - 1, 20), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Geminis";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 6 - 1, 21), new Date(date.getFullYear(), 7 - 1, 22), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Cancer";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 7 - 1, 23), new Date(date.getFullYear(), 8 - 1, 22), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Leo";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 8 - 1, 23), new Date(date.getFullYear(), 9 - 1, 22), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Virgo";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 9 - 1, 23), new Date(date.getFullYear(), 10 - 1, 22), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Libra";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 10 - 1, 23), new Date(date.getFullYear(), 11 - 1, 21), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Escorpion";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 11 - 1, 22), new Date(date.getFullYear(), 12 - 1, 21), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Sagitario";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 12 - 1, 22), new Date(date.getFullYear() + 1, 1 - 1, 19), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Capricornio";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 1 - 1, 20), new Date(date.getFullYear(), 2 - 1, 18), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Acuario";
        return
    }

    if (compareDates(new Date(date.getFullYear(), 2 - 1, 19), new Date(date.getFullYear(), 3 - 1, 20), date)) {
        document.getElementById("signoZodiacal").innerHTML = "Piscis";
        return
    }

}

function compareDates(startDate, endDate, dateNow) {
    return dateNow.getTime() >= startDate.getTime() && dateNow.getTime() <= endDate.getTime();
}

