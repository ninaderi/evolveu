import Account from "./Account.js";

test("Balance in account", () => {
	console.log("testing the initial balance");
	const first = new Account (1, 0, "CheckingAccount"); //without acc.Account you will get an error

	expect (first.balance).toBe(0);
	expect (first.accname).toBe("CheckingAccount");

	let x = first.deposit(30);
	expect (first.balance).toBe(30);
	expect(first.check()).toBe(30);
	expect(first.deposit(15)).toBe(45);
	expect(first.withdraw(5)).toBe(40);
});
