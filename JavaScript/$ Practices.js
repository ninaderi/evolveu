// const a = [1,2,10,4,5,6,-3,9]

// n = a.length;
// console.log (n);
// let ic = -3

// function loopcompare () {
// 	for (c=0; c<n; c++) {
// 	if (a[c] > ic) {ic=a[c]}
// 	}
// 	return ic 
// }

// console.log("The biggest number is", loopcompare());


// //The function passes only 1 parameter
// const xyz = [1,5]

// // let x = 1
// // let y = 3

// function orderArray(xyz) {
// console.log("in orderArray", xyz);

// //[a[0], a[1]] = [a[1], a[0]];
// if (xyz[0] > xyz[1]) {
// 	return xyz;
// } else {
// 	return [xyz[1], xyz[0]]; //Putting the entire sentence into brackets makes it an array
// }
// }                                                                                           

// console.log("Should be", orderArray(xyz));


// console.log("Make me an Email");

// function makeEmail (firstname, lastname) {
// 	let email = firstname+"."+lastname+"@evolveu.ca";
// 	return email
// }


// const larryEmail = makeEmail('larry', 'shumlich');
// const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

// if (larryEmail != shouldBeLarryEmail) {
// 	console.log("***** We have an error here *****",
// 		larryEmail,
// 		" is not = ",
// 		shouldBeLarryEmail,
// 		" and it should be."
// 	)
// }

// console.log("Larry:", larryEmail);

// console.log("Jane:", makeEmail("jane", "lee"));
// console.log("Bill:", makeEmail("jane", "lee"));
// console.log("Sam:", makeEmail("jane", "lee"));


// console.log("Make me a Train");

// function makeTrain (arg1, arg2, arg3) {
// 	let mt = arg1+"."+arg2+"."+arg3;
// 	return mt
// }

// const myTrain = makeTrain('one', 'two', 'three');
// const shouldTrain = 'one.two.three';

// if (myTrain != shouldTrain) {
// 	console.log("***** We have an error here *****",
// 		myTrain,
// 		" is not = ",
// 		shouldTrain,
// 		" and it should be."
// 	)
// }

// console.log("SB " ,shouldTrain, myTrain);

// console.log("SB a.b.c:", makeTrain("a", "b", "c"));



// console.log("Add numbers");

// // ---- put function here ----
 
// let total = 0;

// function addNumbers (num1, num2) {
	
// 	let add = num1 + num2;
// 	//let Nilou = num1;
// 	//return Nilou
// 	total += add;
// 	return add;
// }

// console.log(total);

// const myAnswer1 = addNumbers(1,2);
// console.log(total);
// const MyShouldBe1 = 3;

// if (myAnswer1 != MyShouldBe1) {
// 	console.log("***** We have an error here *****",
// 		myAnswer1,
// 		" is not = ",
// 		MyShouldBe1,
// 		" and it should be."
// 	)
// }
// var z = 2
// var w = 3
// console.log("SB 5" ,addNumbers(z,w));
// console.log(z,w);
// //console.log ("Retun two numbers", Nilou)
// console.log("SB 15" ,addNumbers(10,15));

// console.log("SB 500" ,addNumbers(200,300));


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
		console.log("   p1-->", arg1);
		console.log("   p2-->", arg2);
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
//const array = [finame, laname]
function makeEmailArr (ar1) { // Don't write ([ar1, ar2]) because your function has 1 
// 	//console.log(ar1)
// 	//let finame = ar1
// 	//let laname = ar2
// 	// let em = ar1[0]+"."+ar1[1]+"@evolveu.ca"
// 	// return em
return `${ar1[0]}.${ar1[1]}@evolveu.ca`// $ references to an object and the index in an array is an object
	}
// // and before this comment ---

let arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));


/*	
	Write the function to format an email based on an object / map
*/

// Write the function after this comment ---
function makeEmailObj (par1) {
	let ema = par1.fname+"."+par1.lname+"@evolveu.ca"
	return ema
}

// and before this comment ---

arrayLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(arrayLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));


const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

// Write the function after this comment ---

function loopStaff (arr) {
	//console.log(item); //This should give you an array
	//let stf= p.staffEmail+"."+p.staffEmail+"@evolveu.ca"
	//return stf
	let emailList = []
	//for (item of data.staff) { //this is the syntax for itterating over an array (array loop)
	for (let i=0; i<arr.length; i++){
		// console.log(item);
		makeEmailObj(arr[i]);
		//console.log(makeEmailObj(item));
		emailList.push(makeEmailObj(arr[i]))
	}
	return emailList
}


// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff);
console.log(staffEmail);
assertEquals('Jane.Smith@evolveu.ca', staffEmail[0]);
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3]);
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6]);






function loopWithForOf (item) {
	let emailList1 = []
	for (item of data.staff){
		makeEmailObj (item)
		emailList1.push(makeEmailObj (item))
}
	return emailList1
}

console.log('-----emailForOf')
const emailForOf = loopWithForOf(data.staff);
console.log(emailForOf);
assertEquals('Jane.Smith@evolveu.ca', emailForOf[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForOf[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForOf[6]);



function loopWithForIn (item) {
	let emailList2 = []
	console.log(item);
	for (let i=0; i<item.length; i++ in data.staff){ // item = data.staff in item.length it has to be item the parameter you are passing
		makeEmailObj (item[i])
	//console.log(makeEmailObj (item[i]));
	//for (obj in data.staff){
		//console.log(makeEmailObj (emailForIn));
		emailList2.push(makeEmailObj (item[i]))
		//console.log("inside for in loop, emailList2 = ", emailList2)
}
	return emailList2
}


console.log('-----emailForIn')
const emailForIn = loopWithForIn(data.staff);
// console.log("after call to emailForIn, emailForIn = ", emailForIn);
assertEquals('Jane.Smith@evolveu.ca', emailForIn[0]);
assertEquals('Olivia.Notly@evolveu.com', emailForIn[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailForIn[6]);





function loopWithEach (item) {
	let arra =[]
	item.forEach(function(p) {
		arra.push(makeEmailObj(p))
	})
	return arra
}


console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
console.log(emailWithEach);
// assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
// assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
// assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);



function loopWithMap (item) {
	let arra =[]
	arra = item.map (makeEmailObj)
	return arra
}

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
//console.log(emailWithMap);
//console.log("arr=", arra);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);


function totalBalance (item) {
	let total = 0;
	for (let i=0; i < item.length; i++){
		total = total + item[i].balance;
	}
	return total
}

const ttlBln = totalBalance (data.staff);
console.log("Total Balance is", ttlBln);


const people1 = [
	{name:"Eva", age:35},
	{name:"Nilou", age:30},
	{name:"Dustin", age:33 },
];


function totalAge (item) {
	let total = 0;
	for(let i=0; i < item.length; i++){
		total = total + item[i].age;
	}	
	return total
}
 
 const ttlAge = totalAge (people1); //Here we are saying item = people
 console.log ("Total is", ttlAge);


function avgAge (peopleArray) {
	let average = totalAge(peopleArray)/peopleArray.length;
	return average
}

const avAge = avgAge (people1); //Note: average in return and const SHOULD NOT have the same name => return average != const avAge
console.log("Average is", avAge);

assertEquals(ttlAge, 100);
assertEquals(avAge, 30);


let largeBalances = data.staff.filter((item) => item.balance >=300);
console.log(largeBalances);
assertEquals(largeBalances[0].fname, "Liam");
assertEquals(largeBalances[1].fname, "Emma");


let tot = data.staff.reduce(function(acc, val) {
	return acc + val.balance;
}, 0);
console.log(tot);
assertEquals(tot, 3823);


let people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

let processPeople = function(data, callback) {
	let a = data.filter(function(el) {
	return (el.province === "AB" || el.province === "BC")});
	a.forEach((el) => {callback(el)})
	}

	// if (typeof processPeople === "function") {
	// 	console.log("String");
	// }
console.log("Provinces are", processPeople);

// let processPeople = function(data, callback) {
// 	for (let i=0; i<data.length; i++){
// 		//console.log("Test");
// 	if (data[i].province === "AB" || data[i].province === "BC") {
// 		if (typeof callback === "function") {
// 			callback(data[i]);	
// 			//console.log("Provinces are", data[i]);
// 			}
// 		}
// 	}
// }
// console.log("Provinces are", processPeople());
//
// Here is invoking the processPeople function.  Write the callback
// function as an anonymous function


processPeople(people, function(item) {
	if (item.age > 25) {
	console.log(item.fname + " " + item.lname);
	}	
});

