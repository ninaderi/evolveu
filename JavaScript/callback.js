console.log("Hello");

let a1 = [1,2,3]
//a.forEach(function())

//[1,2,3].forEach(function(a,b,c){console.log(a,b,c)})


//const a = [1,2,3];
let a = ['a','b','c','d','e'];

function myFunc(p1,p2,p3) {
    console.log(p1,p2,p3);
}

a.forEach(myFunc); // p1 is going to print a,b,c,d,e
				   // p2 is the index so it will print 0,1,2,3,4
				   // p3 is going to list the whole array like [a,b,c,d,e]


// function myCallBackFunction(ar, func) {
// 	console.log("in myCallBackFunction");
// }

// myCallBackFunction();

// function myWorkerFunction(p) {
// 	console.log("in myWorkerFunction", p);
// }

// myWorkerFunction("asdf");


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


function myCallBackFunction(ar, func) {
    // console.log("in myCallBackFunction");
    // console.log("   ar   --->", ar);
    console.log("   func --->", func);
    for (let i=0; i<ar.length; i++) {
    	//console.log('==>', ar[i]);
    	func(ar[i]);
    }
}

function myWorkerFunction(p1) {
    console.log('myWorkerFunction', p1); // p1 = func(ar[i])
}


myCallBackFunction(data.staff, myWorkerFunction); // ar = data.staff   func = myWorkerFunction

//myCallBackFunction(['abc','bcd','cde'], myWorkerFunction);

const mmmm = [11,22,33,47];

myCallBackFunction(mmmm, myWorkerFunction);