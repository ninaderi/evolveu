import math from "./math";

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sum(1,2)).toBe(3);
	expect(math.sum(3,5)).toBe(8);
	console.log("This is the test");
});


test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.sub(5,2)).toBe(3);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.mul(1,2)).toBe(2);
});

test('Test the math functions', () => {
	console.log('Hello World');
	expect(math.div(10,2)).toBe(5);
});