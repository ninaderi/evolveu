import acc from "./Account.js";

test("Balance in account", () => {
	console.log("testing the initial balance");
	const first = new acc.Account (0, "CheckingAccount"); //without acc.Account you will get an error

	expect (first.initialBlc).toBe(0);
	expect (first.accname).toBe("CheckingAccount");

	expect(first.check()).toBe(0);
	expect(first.deposit(10)).toBe(10);
	expect(first.withdraw(20)).toBe(-10);
});
