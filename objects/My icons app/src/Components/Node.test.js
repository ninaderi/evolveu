import Node from './Node';

test('Testing the Node Class', () => {
	console.log('Testing the Node class constructor method');
	const obj = new Node('High School 45', 5234, null,null);
	expect(obj.subject).toBe('High School 45');
	expect(obj.amount).toBe(5234);
	expect(obj.next).toBe(null);
	expect(obj.previous).toBe(null);

	console.log('Testing the Show Method');
	expect(obj.show()).toBe('High School 45 5234')
});