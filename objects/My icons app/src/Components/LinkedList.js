//controller class
import Node from "./Node"

class LinkedList {
	constructor() {
		this.head = new Node('', 0);
		this.tail = new Node('', 0);
		this.current = this.head;

		this.head.previous = null;
		this.head.next = this.tail;
		this.tail.previous = this.head;
		this.tail.next = null;
	}

insertNodeAfter (subject, amount, next, previous) {//inserting a new node after the current node
	    let newNode = new Node(subject, amount, next, previous);	//create new single Node 

	    newNode.next = this.current.next;							//connect new Node to current.next
	    this.current.next.previous = newNode; 						//Node - Next

	    newNode.previous = this.current;							//connect newNode to current node
	    this.current.next = newNode;								//Previous - NOde

	    this.current = newNode;										//set current to new Node, 
	    															//become the current one
	   								
	}

	
	firstNode() { //position to the first node
		this.current = this.head;
		return this.current;
	}

	nextNode() {//move to the next node
		if(this.current.next !== null) {
			this.current = this.current.next;
		}
		return this.current;
	}

	lastNode() {//position to the last node
		this.current = this.head;
		while(this.current.next !== null) {
			this.current = this.current.next;
		}
		return this.current;
	}

	previousNode() {//backup one node
		if(this.current.previous !== null) {
			this.current = this.current.previous;
		}
		return this.current;
	}

	deleteNode() {//delete the current node
		if(this.current !== this.head || this.current !== this.tail) {
			this.current.previous.next = this.current.next;
			this.current.next.previous = this.current.previous;
			this.current = this.current.previous;
		}
		return this.current;
	}

	totalAmountNode() {//total of all the amounts
		let start = this.head;
		let amountTotal = 0;
		while(start !== null) {
			amountTotal = amountTotal + start.amount;
			start = start.next;
		}

		return amountTotal;
	}
}


export default LinkedList;