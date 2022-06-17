/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let input = document.getElementById("input").value =  20



document.getElementById("convert").addEventListener("click", function convert(){
    meter()
    liter()
    kilogram()
    console.log(input)
})

function meter(){
    const feet = input * 3.128
    const meter = input / 3.128
    const lengthP = document.getElementById("length-p")
    lengthP.innerHTML += `${input} meters = ${feet} feet | ${input} feet = ${meter} meters `
}

function liter(){
    const gallon = input * 0.264
    const liter = input / 0.264
    const volumeP = document.getElementById("volume-p")
    volumeP.innerHTML += `${input} liters = ${gallon} gallons | ${input} gallons = ${liter}liters`
}

function kilogram(){
    const pound = input * 2.204
    const kilo = input / 2.204
    const massP = document.getElementById("mass-p")
    massP.innerHTML += `${input} kilograms = ${pound} pounds | ${input} pounds = ${kilo} kilos `
}