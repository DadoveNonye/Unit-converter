let InputNumber = 10
let meters = InputNumber * 3.280
let feet = InputNumber * 0.3048
let liters = InputNumber * 0.264
let gallons = InputNumber * 3.785
let kilos = InputNumber * 2.202
let pounds = InputNumber * 0.453

let inputEl = document.getElementById("inputNumber").textContent = InputNumber

let lenght = document.getElementById("meters").textContent = InputNumber + " meters" + " = " + meters + " feet" + " | " + InputNumber + " feet " + "= " + feet + " meters"

let volume = document.getElementById("liters").textContent = InputNumber + " liters" + " =" + liters + " gallons" + " | " + InputNumber + " gallons" + " =" + gallons + " liters"

let mass = document.getElementById("kilos").textContent = InputNumber + " kilos" + " =" + kilos + " pounds" + " |" + InputNumber + " pounds" + " =" + pounds + " kilos"