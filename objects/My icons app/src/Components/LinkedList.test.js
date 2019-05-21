import LinkedList  from './LinkedList';

test('Testing the LinkedList Class', () => {
	console.log('Testing the LinkedList class constructor');
	const list = new LinkedList();
	expect(list.head.amount).toBe(0);
	console.log(list);

	console.log('Testing the insertAfter');
	list.insertNodeAfter('a', 1);
	expect(list.current.amount).toBe(1);
	list.insertNodeAfter('b', 2);
	expect(list.current.amount).toBe(2);
	list.insertNodeAfter('c', 3);
	expect(list.current.amount).toBe(3);
	// console.log(list);
	
	console.log('Testing the first Position Node')
	list.firstNode();
	expect(list.current.subject).toBe('');
	
	console.log('Test inserting a new Node between Head and a');
	list.insertNodeAfter('d', 4);
	expect(list.current.amount).toBe(4);
	// console.log(list);
	
	console.log('Testing the nextPosition');
	list.nextNode();
	expect(list.current.subject).toBe('a');

	console.log('Test inserting a new Node after using nextPosition');
	list.insertNodeAfter('e', 5);
	expect(list.current.amount).toBe(5);
	// console.log(list);
	
	console.log('Testing the lastPosition');
	list.lastNode();
	expect(list.current.amount).toBe(0);
	// console.log(list);
	
	console.log('Testing the previousPosition');
	list.previousNode();
	expect(list.current.amount).toBe(3);
	// console.log(list);

	console.log('Test inserting a new Node after using nextPosition');
	list.insertNodeAfter('f', 6);
	expect(list.current.amount).toBe(6);
	// console.log(list);
	
	console.log('Testing the deleteNode method');
	list.deleteNode();
	expect(list.current.subject).toBe('c');
	// console.log(list);

	console.log('Testing the listTotal method');
	list.totalAmountNode();
	// console.log(list.amountTotal);
	expect(list.totalAmountNode()).toBe(15);
	console.log(list);
	
	console.log('Test inserting a new Node after using totalAmountNode');
	list.insertNodeAfter('g', 7);
	expect(list.current.amount).toBe(7);
	// console.log(list);

	console.log('Testing the listTotal method');
	list.totalAmountNode();
	// console.log(list.amountTotal);
	expect(list.totalAmountNode()).toBe(22);
	// console.log(list);

	console.log('Test inserting a new Node after using totalAmountNode');
	list.insertNodeAfter('h', 8);
	expect(list.current.amount).toBe(8);
	// console.log(list);

	console.log('Testing the listTotal');
	list.totalAmountNode();
	// console.log(list.amountTotal);
	expect(list.totalAmountNode()).toBe(30);
	console.log(list);
	
});
