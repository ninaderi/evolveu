//Hold the data and a pointer to the next node
/*Node class has 3 attributes at least: forwardNode, subject, amount
the Node class will have a show method that will show the subject and amount
*/
class Node {
	constructor(subject, amount, next=null, previous=null) {
		this.subject = subject;
		this.amount = amount;
		this.next = next;
		this.previous=previous;
	}

	show() {
		return `${this.subject} ${this.amount}`
	}
}

export default Node;