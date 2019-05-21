console.log("Hello World!");

class Living extends Object {
	constructor(age) {
		super();
		this.age = age;
	}

	show() {
		console.log("Living age", this.age);
	}

	birthdate() {
		this.age = this.age + 1
		// return this.age
	}
}

class Animal extends Living{
	constructor(age, name) {
		super(age)
		this.name = name
	}

	show() {
		console.log("Animal's age & name is:", this.age, this.name);
	}
}


let why = new Living(100);
why.show();
why.birthdate();
why.show();
why.birthdate();
why.show();


let j = new Living(3);
console.log("jjj", j);
console.log("age", j.age)
j.show();
j.birthdate();
j.show();
console.log("Birthdate is", j.age);

j.show(); //This will show our age because the object is still alive. The only way to kill it is to return it

let a = new Animal (10, "Dog");
console.log("Living object is", a);//a grabs the object
console.log("a", a.age);//a.age grabs the age
console.log("Name is", a.name);
a.show();