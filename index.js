//call the elements and assign to variables
//use let for the inputEl since it will be used multiple times
let inputEl = document.getElementById("input-num")

//use const for the other id's
const textLength = document.getElementById("convert-length")
const textVolume = document.getElementById("convert-volume")
const textMass = document.getElementById("convert-mass")

const btnConvert = document.getElementById("btn-convert")

//create a click eventListener for the convert button
btnConvert.addEventListener("click", function () {
    //add validation if input is empty
    if (inputEl.value === "") {
        alert("Put a number first!")
        //clear text if the input value is empty
        textLength.innerHTML = ""
        textVolume.innerHTML = ""
        textMass.innerHTML = ""
    } else {
        //proceed with conversion
        //use innerHTML to display the output
        //use template strings to format the converted value's output
        //get the conversion unit and multiply it to the inputEl's value
        //round off the value using toFixed to 3 decimal places
        textLength.innerHTML = `
            ${inputEl.value} meters = ${(inputEl.value * 3.28084).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value * 0.3048000097536).toFixed(3)} meters
        `
        textVolume.innerHTML = `
            ${inputEl.value} liters = ${(inputEl.value * 0.264172).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value * 3.78541).toFixed(3)} liters
        `
        textMass.innerHTML = `
            ${inputEl.value} kilos = ${(inputEl.value * 2.20462).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value * 0.453592).toFixed(3)} kilos
        `
    }
})