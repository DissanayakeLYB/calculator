const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function deleteOnce(){
    (display.value).pop()
    display.value
}

function clearAll(){
    display.value = " ";
}

function calculate(){
    display.value = eval(display.value)
}

function minus(){
    if ((display.value)[0] == "-"){
        (display.value)[0] = " ";
    }
    display.value;
}