const p = console.log;
const idH1 = document.getElementById("idH1");
const idH3 = document.getElementById("idH3");
const idH4 = document.getElementById("idH4"); 

console.log("Hello world from basicdom.js");

console.log("Document", document);

console.log("Document", document.body);

//function onButton() {
	//console.log("You pushed the button");
//}

console.log(onButton());

let button = document.getElementById("push");

button.addEventListener("click", onButton);

p(idH1);
p(idH1.textContent = "Hello Universe"); // This actually changes your heading


let v1 = "Hello Universe";
let v2 = "Hello World";
let v3 = "Hello Alberta";
let v4 = "Hello Saskachewan";
let v5 = "Hello Calgary"

function onButton(){
	let v1 = "Hello Universe";
	//console.log(v1);
	//console.log(v2);
	if (idH1.textContent === v1) { // === means something should be equal to something else
		idH1.textContent = v2; // = means you are assigning a value to a variable 
	} else {
		idH1.textContent = v1; // Very important: No ; here. 
	}
}

document.getElementById("idH1").addEventListener("click", onButton);


document.getElementById("idH3").addEventListener("mouseover", function mouse() {
	if (idH3.textContent === v3) { 
		idH3.textContent = v4; 
	} else {
		idH3.textContent = v3;
	}
})

document.getElementById("idH4").addEventListener("mouseout", function mouse() {
	if (idH4.textContent === v5) { 
		idH4.textContent = v4; 
	} else {
		idH4.textContent = v5;
	}
})


let count = 0
function press() {
	var newHeading = document.createElement("h3");
	var textHeading = document.createTextNode("Go to parties" + count++);
	newHeading.appendChild(textHeading);
	document.body.appendChild(newHeading); //All we are doing here is to append a child to the body
	//console.log("HI");
}

document.getElementById("press").addEventListener("click", press);


document.body.addEventListener("click", onBodyclick);
function onBodyclick(e) {
	console.log("I am inside onBodyClick");
	console.log("Printing the event", e);
	console.log("Logging the target", e.target);
	console.log("Logging attribute place", idH2.getAttribute("place"));
	}

//document.body.appendChild(onBodyclick);

// function attribute() {
// 	let c = document.getElementById("place");
// 	c.setAttribute("place", "Canada");
// }

// c.addEventListener("click", attribute);


const a = [1,2,10,4,5,6,-3,9]

n = a.length;
console.log (n);
let ic = -3

function loopcompare () {
	for (c=0; c<n; c++) {
	if (a[c] > ic) {ic=a[c]}
	}
	return ic 
}

console.log("The biggest number is", loopcompare());


//The function passes only 1 parameter
const xyz = [1,5]

// let x = 1
// let y = 3

function orderArray(xyz) {
console.log("in orderArray", xyz);

//[a[0], a[1]] = [a[1], a[0]];
if (xyz[0] > xyz[1]) {
	return xyz;
} else {
	return [xyz[1], xyz[0]]; //Putting the entire sentence into brackets makes it an array
}
}                                                                                           

console.log("Should be", orderArray(xyz));


console.log("Make me an Email");

function makeEmail (firstname, lastname) {
	let email = firstname+"."+lastname+"@evolveu.ca";
	return email
}


const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
	console.log("***** We have an error here *****",
		larryEmail,
		" is not = ",
		shouldBeLarryEmail,
		" and it should be."
	)
}

console.log("Larry:", larryEmail);

console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("jane", "lee"));


console.log("Make me a Train");

function makeTrain (arg1, arg2, arg3) {
	let mt = arg1+"."+arg2+"."+arg3;
	return mt
}

const myTrain = makeTrain('one', 'two', 'three');
const shouldTrain = 'one.two.three';

if (myTrain != shouldTrain) {
	console.log("***** We have an error here *****",
		myTrain,
		" is not = ",
		shouldTrain,
		" and it should be."
	)
}

console.log("SB " ,shouldTrain, myTrain);

console.log("SB a.b.c:", makeTrain("a", "b", "c"));



console.log("Add numbers");

// ---- put function here ----
 
let total = 0;

function addNumbers (num1, num2) {
	
	let add = num1 + num2;
	//let Nilou = num1;
	//return Nilou
	total += add;
	return add;
}

console.log(total);

const myAnswer1 = addNumbers(1,2);
console.log(total);
const MyShouldBe1 = 3;

if (myAnswer1 != MyShouldBe1) {
	console.log("***** We have an error here *****",
		myAnswer1,
		" is not = ",
		MyShouldBe1,
		" and it should be."
	)
}
var z = 2
var w = 3
console.log("SB 5" ,addNumbers(z,w));
console.log(z,w);
//console.log ("Retun two numbers", Nilou)
console.log("SB 15" ,addNumbers(10,15));

console.log("SB 500" ,addNumbers(200,300));


/*	
	Write the function that will create this output:

*** the two values are not the same:
    p1--> a
    p2--> b
*** the two values are not the same:
    p1--> 1
    p2--> 2
*** the two values are not the same:
    p1--> 2
    p2--> 2
*/

// Write the function after this comment ---
function assertEquals (arg1, arg2) {
	if (arg1 === arg2) {
		result = true  //You don't need to have return true or false because it is already implied in your code
		console.log("ok ->", arg1);
  } else {
		console.log("*** the two values are not the same" );
		console.log("p1-->", arg1);
		console.log("p2-->", arg2);
		result = false
	}
	return result
}



// and before this comment ---

assertEquals("a","b");
assertEquals("a","a");
assertEquals(1,2);
assertEquals(2,2);
assertEquals("2",2);
assertEquals("This value","This value");


/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---
const array = [finame, laname]
function makeEmailArr ([ar1, ar2]) {
	let 
}

// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));
