/**
 * PERBAIKAN: Mengoreksi kesalahan pengetikan 'diaplay' menjadi 'display'
 */

function appendValue(value) {
    // KOREKSI: Mengganti "diaplay" menjadi "display"
    document.getElementById("display").value += value;
}

function clearDisplay() {
    // Ini sudah benar
    document.getElementById("display").value = "";
}

function calculate() {
    // KOREKSI: Mendapatkan elemen 'display' yang benar
    const displayElement = document.getElementById("display"); 
    try {
        // KOREKSI: Menggunakan variabel yang sudah benar 'displayElement'
        displayElement.value = eval(displayElement.value);
    } catch (e) {
        displayElement.value = "Error";
    }
}
