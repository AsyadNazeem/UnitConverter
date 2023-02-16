let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let lengthEL = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let icon = document.getElementById("icon")


function darkTheme(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "darkTheme/sun.png"
    }else{
        icon.src = "darkTheme/moon.png"
    }
}

function length(){
    let baseValue = inputEl.value
    let meter = 3.281
    let feet = 0.3048
    lengthEL.textContent = `${baseValue} meters = ${(baseValue * feet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue * meter).toFixed(3)} meters`
}

function volume(){
    let baseValue = inputEl.value
    let gallonToLiters = 0.264
    let litersToGallon = 3.785
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * litersToGallon).toFixed(3)} gallon | ${baseValue} gallon = ${(baseValue * gallonToLiters).toFixed(3)} liters`
}

function mass(){
    let baseValue = inputEl.value
    let kilogramToPound = 2.204
    let poundToKilogram = 0.453
    massEl.textContent = `${baseValue} kilogram = ${(baseValue * kilogramToPound).toFixed(3)} pound | ${baseValue} pound = ${(baseValue * poundToKilogram).toFixed(3)} kilogram`
}

inputBtn.addEventListener("click", function (){
    length()
    volume()
    mass()
})