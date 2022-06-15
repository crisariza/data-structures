class Stack {
  constructor() {
    this.stack = []
  }
  pop() { // Removes the top item from the stack
    this.stack.pop()
  } 
  push(item) { // Adds an item to the top of the stack
    this.stack.push(item)
  } 
  peek() { // Returns the item at the top of the stack (but does not remove it)
    return this.stack[this.length - 1]
  }
  isEmpty() { // Returns true if the stack is empty
    return this.length === 0
  }
	get length() { // Returns the number of items in the stack
    return this.stack.length
  } 
}

var array = new Stack()
