function display(num) {
    var screen = document.getElementById("screen");
    screen.value += num;
};
function insertSym(sym) {
    var screen = doucment.getElementById("screen");
    screen.value += sym;
};
function calculate() {
    var screen = document.getElementById("screen");
    var result = eval(screen.value);
    screen.value = result;
    /* if calc != undefined) {
        screen.value = "NaN"
    }*/
};
// The CLS (Clear screen) function
function clr() {
    var screen = document.getElementById("screen");
    screen.value="";
};
// function has been updated
// The new del function
function del() {
    var screen = document.getElementsById("screen");
    var exp = screen.value;
    var led = exp.substring(0,exp.length-1);
    screen.value = led;
};
