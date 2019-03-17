function btn_c(){
    // c / 5 = (f-32) / 9
    var doC = document.getElementById('text_c').value;
    doC = parseFloat(doC);

    var doF = "";
    doF = parseFloat(doF);

    doF = ((doC/5)*9)+32;
    document.getElementById('result').innerHTML = "Do F la " + doF + "°F";
}

function btn_f(){
    var doF = document.getElementById('text_f').value;
    doF = parseFloat(doF);

    doC = "";
    doC = parseFloat(doC);
    
    doC = (5*doF - 160)/9;
    document.getElementById('result_two').innerHTML = "Do C la " + doC + "°C"
}