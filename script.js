function appendValue(value) {
    document.getElementById("display").value += value; 
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    const displayElement = document.getElementById("display"); 
    try {
        displayElement.value = eval(displayElement.value);
    } catch (e) {
        displayElement.value = "Error";
    }
}
