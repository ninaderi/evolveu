import Accounts from "./Accounts.js"

test("Length array test", () => {
	//console.log("This is the new account");
	let y = new Accounts();
	expect(y.newArray.length).toBe(0)

	y.addAccount(10,"Nilou")
	expect(y.newArray.length).toBe(1)
	
	expect(y.newArray[0].accname).toBe("Nilou")
	expect(y.newArray[0].balance).toBe(10)

	// expect(y.accname).toBe("Nilou")//accname and Blc should be exactly same as the parameters we had written in "Account" and it doesn't matter for "Accounts"	
})

// test("Test new account", ()=> {
// 	let addNewAcc = new accs.Accounts();
// 	addNewAcc.addAccount(0, "Nilou");
// 	expect(addNewAcc.newArray.length).toBe(1);

// 	expect(addNewAcc.newArray[0]).toEqual({"nameAcc": "Nilou", "blcAcc": 0});
// })    

test("Length array test", () => {
	console.log("Testing the remove account")
	let rm = new Accounts()
	rm.removeAccount(0, "Licedt")
	expect(rm.newArray[0]).toBe()
})


test("Length array test", () => {
	console.log("Tetsing the total")

	let newAcc = new Accounts()
	newAcc.addAccount(500, "Nilou")
	newAcc.addAccount(250, "Licedt")

	console.log(newAcc)

	expect(newAcc.accountTotal()).toBe(750) //accountTotal is OUR function that we had defined
})

test("Length array test", () => {
	console.log("Testing the max")

	let newAcc = new Accounts()
	newAcc.addAccount(500, "Nilou")
	newAcc.addAccount(250, "Licedt")
	newAcc.addAccount(300, "Harpreet")
	newAcc.addAccount(600, "Nilou1")
	newAcc.addAccount(250, "Licedt1")
	newAcc.addAccount(300, "Harpreet1")


	console.log(newAcc)

	expect(newAcc.highestAccount()).toBe("Nilou1 600")//order matters
	
	console.log("Deletion")
	console.log(newAcc)
	newAcc.removeAccount(3);
	console.log(newAcc)
	expect(newAcc.newArray.length).toBe(4)
    
	})

test("Length array test", () => {
	console.log("Testing the min")

	let newAcc = new Accounts()
	newAcc.addAccount(100, "Nilou")
	newAcc.addAccount(250, "Licedt")
	newAcc.addAccount(300, "Harpreet")
	newAcc.addAccount(600, "Nilou1")
	newAcc.addAccount(200, "Licedt1")
	newAcc.addAccount(300, "Harpreet1")


	console.log(newAcc)

	expect(newAcc.lowestAccount()).toBe("Nilou 100")//order matters
	
	console.log("Test for deposit")
	newAcc.deposit(1, 50)
	expect(newAcc.newArray[1].balance).toBe(300) //1 is the id and 50 is the amount you want to deposit
	
	newAcc.withdraw(3, 200)
	expect(newAcc.newArray[3].balance).toBe(400)

	newAcc.rename(2, "Ian")
	expect(newAcc.newArray[2].accname).toBe("Ian")//you can't put newName here


	console.log("Deletion")
	console.log(newAcc)
	newAcc.removeAccount(4);
	console.log(newAcc)
	expect(newAcc.newArray.length).toBe(4)
    
	})
