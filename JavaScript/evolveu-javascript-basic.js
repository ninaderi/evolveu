console.log("Hello World from external 1 javascript");

function onButtonClicked() {
	console.log("I got into click!"); // I got into click! will be displayed
	let a = document.getElementById("inputField").value; // my id is inputField
	console.log(a);
}
// //function onButtonClicked() {
// 	console.log("I got into click!"); 
// 	let a = Number(document.getElementById("inputField").value); Number converts the function into a number
// 	console.log(a + 1);
let b = document.getElementById("enter"); // enter is the name of my id. It is better to always define your getElementById using let because it might not work on all browsers
let c = document.getElementById("push"); // This is for the second (number) function

enter.addEventListener("click", onButtonClicked); // Here I don't need to create function {} fot the second part since I already have a pre-defined function which is addEventListener
												// Note: You should have enter. at the beginning, otherwise if you have more than one button then it wouldn't work on the other button
												// We HAVE TO have "click" because it is the listener type
push.addEventListener("click", onButtonRegistered);

function onButtonRegistered() {
	let a = Number(document.getElementById("inputField").value); //Important note: You DON'T need to make another "inputField"
	console.log(a + 1);	
}


// Calculator
let addbutton = document.getElementById("add");
let subbutton = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let division = document.getElementById("divide");

let number1 = document.getElementById("input1");
let number2 = document.getElementById("input2");
let result = document.getElementById("input3");

function addition () {
	result.value = Number(number1.value) + Number(number2.value);
}

function subtraction () {
	result.value = Number(number1.value) - Number(number2.value);
	console.log(number2);	
}

function multiplication () {
	result.value = Number(number1.value) * Number(number2.value);
	console.log(result);	
}

function divide () {
	result.value = Number(number1.value) / Number(number2.value);
}


addbutton.addEventListener("click", addition);
subbutton.addEventListener("click", subtraction);
multiply.addEventListener("click", multiplication);
division.addEventListener("click", divide);



// Canadian Taxes
// Variables defined with const behave like let variables, except they cannot be reassigned
const tax = document.getElementById("calculation").addEventListener("click", taxes);
const effectivetax = document.getElementById("effectivetax"); //This is the $ ammount

function taxes () {
 let income = Number(document.getElementById("income").value);// Now the funcion is going to garb the value form the input box
 	
 if (income <= 47630) {
 		incometax = income * .15;
 		etax = incometax / income * 100 // We hav these to calculate the effective %
 		effectivetax.value = incometax; // Now I need to take the value of incometax and disply it into the input box
 		effectiverate.value = etax;
 }else if (income <= 95259) {
 		incometax = (income - 47630) * .205 + 7145;
 		etax = incometax / income * 100 
 		effectivetax.value = incometax;
 		effectiverate.value = etax;
 }else if (income <= 147667){
 		incometax = (income - 95259) * .26 + 16908;
 		etax = incometax / income * 100 
 		effectivetax.value = incometax;
 		effectiverate.value = etax;
 }else if (income <= 210371){
 		incometax = (income - 147667) * .29 + 30535;
 		etax = incometax / income * 100 
 		effectivetax.value = incometax;
 		effectiverate.value = etax;
 }else { incometax = (income - 210371) * .33 + 48719;
 		etax = incometax / income * 100 
 		effectivetax.value = incometax;
 		effectiverate.value = etax;
 	}

}


// Working with Arrays

const array = [];

let addBtn = document.getElementById("add2").addEventListener("click", addArray);
let showBtn = document.getElementById("show").addEventListener("click", showArray);
let totalBtn = document.getElementById("total").addEventListener("click", totalArray);
let clearBtn = document.getElementById("clear").addEventListener("click", clearArray);

function addArray() {
	let variable = Number(document.getElementById("array").value); // .value says give me the value of whatever has been entered into the input field
	//let variable1 = document.getElementById("array").value;
	if (isNaN(variable)) { // isNaN function determines if the value is NaN or not
		messagedisplay.textContent = "Input is not a valid number.";
	} else {
		array.push(variable);
		messagedisplay.textContent = "Number has been added to the array.";
	}
		//variable1.value = "";
	}


function showArray(){
	messagedisplay.textContent = array.toString(); // To show content in a single string
}


let sumA = 0 // I think you would have to define your total as 0 at the begining 
function totalArray(){
	for(i=0; i < array.length; i++){
		sumA = sumA + array[i];
	}
	messagedisplay.textContent = sumA;
}

function clearArray(){
	array.length = 0; // Set array lenght to zero to clear array. Note: You are clearing the array in the console.log and not clearing your input field
	messagedisplay.textContent = "The array has been cleared."
}

//Working with Dictionaries

const provinces = { ab: "Alberta",
					sk: "Saskachewan",
					bc: "British Columbia",
					on: "Ontario",
					qb: "Quebec"}
let lookup = document.getElementById("lookup").addEventListener("click", lookupResult);

function lookupResult(){
	let provincesAbr = document.getElementById("object").value; // we are grabbing the input here. Therefore, we need to take its 
	message.textContent = provinces[provincesAbr];
}