function matematicas(){
    // log
    document.write("log 1000: " + Math.log(1000) + "<br>");

    // exp
    document.write("exp 3: " + Math.exp(3) + "<br>");

    // sqrt
    document.write("sqrt 9: " + Math.sqrt(9) + "<br>");

    // pow
    document.write("pow 2 elevado a 3: " + Math.pow(2,3) + "<br>");

    // abs
    document.write("abs -9.6654: " + Math.abs(-9.6654) + "<br>");

    // floor
    document.write("floor -9.6654: " + Math.floor(-9.6654) + "<br>");
    document.write("floor 9.6654: " + Math.floor(9.6654) + "<br>");

    // ceil
    document.write("ceil -9.6654: " + Math.ceil(-9.6654) + "<br>");
    document.write("ceil 9.6654: " + Math.ceil(9.6654) + "<br>");

    // round
    document.write("round -9.6654: " + Math.round(-9.6654) + "<br>");
    document.write("round 9.1654: " + Math.round(9.1654) + "<br>");
    document.write("round 9.5654: " + Math.round(9.5654) + "<br>");

    // random
    document.write("random: " + Math.random() + "<br>");
    document.write("random 0-100: " + Math.random()*100 + "<br>");

    // cos
    document.write("cos 100: " + Math.cos(100) + "<br>");

    // max
    document.write("max: " + Math.max(4,267,100,300,185,23) + "<br>");

    // min
    document.write("min: " + Math.min(4,267,100,300,185,23) + "<br>");
}

function textos(){
    var texto = "Esto es un texto para probar las funciones String";

    // fromCharCode -> Unicode
    document.write("fromCharCode 960: " + String.fromCharCode(960) + "<br>");

    // charCodeAt
    document.write("charCodeAt 3: " + texto.charCodeAt(3) + "<br>");

    // indexOf
    document.write("indexOf a: " + texto.indexOf("a") + "<br>");

    // lastIndexOf
    document.write("lastIndexOf a: " + texto.lastIndexOf("a") + "<br>");

    // substr
    document.write("substr 3,6: " + texto.substr(3,6) + "<br>");

    // slice
    document.write("slice 3: " + texto.slice(3) + "<br>");
    document.write("slice 3,30: " + texto.slice(3,30) + "<br>");

    // substring
    document.write("substring 3,6: " + texto.substring(3,6) + "<br>");

    // toLowerCase
    document.write("toLowerCase: " + texto.toLowerCase() + "<br>");

    // toUpperCase
    document.write("toUpperCase: " + texto.toUpperCase() + "<br>");

    // split
    var datos = "14/7/2022".split("/");
    document.write("dia: " + datos[0] + "<br>");
    document.write("mes: " + datos[1] + "<br>");
    document.write("año: " + datos[2] + "<br>");
}

function fechas(){
    var hoy = new Date();

    // getTime
    document.write("getTime: " + hoy.getTime() + "<br>");

    // getTimezoneOffSet
    document.write("getTimezoneOffSet: " + hoy.getTimezoneOffset() + "<br>");

    // getDay
    document.write("getDay: " + hoy.getDay() + "<br>");

    // getDate
    document.write("getDate: " + hoy.getDate() + "<br>");

    // getMonth
    document.write("getMonth: " + hoy.getMonth() + "<br>");

    // getYear
    document.write("getYear: " + hoy.getYear() + "<br>");

    // getFullYear
    document.write("getFullYear: " + hoy.getFullYear() + "<br>");

    // getHours
    document.write("getHours: " + hoy.getHours() + "<br>");

    // getMinutes
    document.write("getMinutes: " + hoy.getMinutes() + "<br>");

    // getSeconds
    document.write("getSeconds: " + hoy.getSeconds() + "<br>");

    // getMilliseconds
    document.write("getMilliseconds: " + hoy.getMilliseconds() + "<br>");
}