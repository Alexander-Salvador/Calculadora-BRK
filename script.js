// Funcion para mostrar por pantalla el resultado.
function add(valor) {
    document.getElementById('width').value += valor;
}

// Funcion de reinicio = C
function reset() {
    document.getElementById('width').value = "";
}

// Funcion de resultado
function result() {
    const valueWidth = document.getElementById('width').value;
    const result = eval(valueWidth);
    document.getElementById('width').value = result;
}