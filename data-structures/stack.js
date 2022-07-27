class Stack {
  constructor() {
    this.stack = []
  }
  pop() { // Remove the top item from the stack
    this.stack.pop()
  } 
  push(item) { // Add an item to the top of the stack
    this.stack.push(item)
  } 
  peek() { // Return the item at the top of the stack (but do not remove it)
    return this.stack[this.length - 1]
  }
  isEmpty() { // Return true if the stack is empty
    return this.length === 0
  }
	get length() { // Return the number of items in the stack
    return this.stack.length
  } 
}

var array = new Stack()
