class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(value) { // Add an element to the linked list
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.head = newNode
      this.tail = newNode
    } else {
			// this.tail.next is referencing the node before
      // Updates the reference (NewNode). So changing the tail, updates the head chain
      this.tail.next = newNode
			// Assigning to this.tail does not affect the object that this.tail was referencing
		  // The only way to alter that object is to change the value of one of its properties
      this.tail = newNode
    }
    this.length++

  }
  pop() { // Remove an element from the linked list
    if (this.isEmpty()) {
      return null
    } else if (this.length === 1 ) {
      const nodeToRemove = this.head
      this.head = null
      this.tail = null
      this.length--
      return nodeToRemove
    } else { // If there's multiple nodes in the list
	    // Start our pointer at the head
	    let currentNode = this.head;
	    // We're removing the last node in the list
	    const nodeToRemove = this.tail;
	    // This will be our new tail
	    let secondToLastNode;
	    while (currentNode) {
	      if (currentNode.next === this.tail) {
	        secondToLastNode = currentNode;
	        break;
	      }
	      currentNode = currentNode.next;
	    }
	    secondToLastNode.next = null;
	    this.tail = secondToLastNode;
	    this.length--;
	    return nodeToRemove;
	  }
  }
  get(index) { // Return an element from a given index (but do not remove it)
	if (index < 0 || index >= this.length || this.isEmpty()) {
		return null;
	}
	// We want the first node
  if (index === 0) {
    return this.head;
  }
  // We want the last node
  if (index === this.length - 1) {
    return this.tail;
  }
	/* We want a node somewhere in the list */
	  let currentNode = this.head;
	  let iterator = 0;
	  while (iterator < index) {
	    iterator++;
	    currentNode = currentNode.next;
	  }
	  return currentNode;
	}
  isEmpty() { // Return true if the stack is empty
	  return this.length === 0
  }
}

var array = new LinkedList()
