// Conver F --> C

// Event Listeners
document.getElementById('btn').addEventListener('click', main);

// Functions
function main() {
    // INPUT - Get farenheit
    let f = Number(document.getElementById('farenheit').value);

    // PROCESS - use formula
    let celsius = (f - 32) * (5 / 9);

    // OUTPUT - display answer
    document.getElementById('result').innerHTML = celsius.toFixed(2);
}