const showBtn = document.getElementById("btn1");
const addBtn = document.getElementById("btn2");
const ol = document.querySelector("ol");
const li = document.getElementsByTagName("li");

function showButton (){
	for(var i=0; i<=li.length; i++){
		console.log(ol.textContent);
	}
}
showBtn.addEventListener("click", showButton);

function addButton (){
	const newLi = document.createElement("li");
	const text = document.createTextNode("New item");
	ol.appendChild(newLi);
	newLi.appendChild(text);
}

addBtn.addEventListener("click", addButton);

//Working with Cards
const addCardBtn = document.getElementById("AddCard");
const divSection = document.getElementById("left");




let count = 1;
function divCard() {
	const newCardBox = document.createElement("div");  //This is to create the grey box for card
	console.log("Here");
	newCardBox.className = "cardborder";
	divSection.appendChild(newCardBox);
	newCardBox.id = "boxCard"; // You need to create id to be able to target to it later on
								// You need to have 4 ids, each one for each section you create (div and 3 buttons)

	let cardtitle = document.createElement ("h1");
	cardtitle.appendChild(document.createTextNode("Crad" + " " + count++));
	newCardBox.appendChild(cardtitle);

	const addBeforeBtn = document.createElement("button");
	addBeforeBtn.className = "a";
	addBeforeBtn.textContent = "Add Before";
	newCardBox.appendChild(addBeforeBtn);
	addBeforeBtn.id = "before";

	const addAfterBtn = document.createElement("button");
	addAfterBtn.className = "a";
	addAfterBtn.textContent = "Add After";
	newCardBox.appendChild(addAfterBtn);
	addAfterBtn.id = "after";

	const deleteBtn = document.createElement("button");
	deleteBtn.className = "a";
	deleteBtn.textContent = "Delete";
	newCardBox.appendChild(deleteBtn);
	deleteBtn.id = "delete";
}

addCardBtn.addEventListener("click", divCard);

divSection.addEventListener("click", cardBtns);

//addBeforeBtn.addEventListener("click", addbefore);

function cardBtns (event) {
	let response = event.target.id;
	if (response  === "delete") {
		divSection.removeChild(event.target.parentElement);
	}

	if (response  === "before") {
		console.log("before");
		let newCardBox = divCard();
		let cardBox2 = document.createElement("division");
		cardBox2.className = ("cardChild");
		divSection.insertBefore(cardBox2, event.target.parentElement);// Here because you need to say you are adding before which node, you need to have 2 arguments
		console.log(event.target.parentElement.textContent);
	}


	if (response  === "after") {
		console.log("after");
		let newCardBox = divCard();
		let newCardBox3 = document.createElement("division");
		newCardBox3.className = ("cardChild");
		divSection.insertBefore(newCardBox3, event.target.parentElement.nextSibling);
	}
}


// Create Add Before Button


