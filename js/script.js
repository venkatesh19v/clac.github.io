html {    
    background: url('https://c4.wallpaperflare.com/wallpaper/763/961/160/vaporwave-aesthetic-wallpaper-preview.jpg') 
    no-repeat center fixed; 
    background-size: cover;
}
function clearScreen() {
document.getElementById("result").value = "";
}

// This function display values
function display(value) {
document.getElementById("result").value += value;
}

// This function evaluates the expression and returns result
function calculate() {
var p = document.getElementById("result").value;
var q = eval(p);
document.getElementById("result").value = q;
}