class Stack {
  constructor() {
    this.stack = []
  }
  get length() { // Returns the number of items in the stack
    return this.stack.length
  } 
  pop() { // Removes the top item from the stack and returns the remaining values
	this.stack.pop()
    return this.stack
  } 
  push(item) { // Adds an item to the top of the stack and returns the remaining values
    this.stack.push(item)
    return this.stack
  } 
  peek() { // Returns the item at the top of the stack (but doens't remove it)
    return this.stack[this.length - 1]
  }
  isEmpty() { // Returns true if the stack is empty
    return this.length === 0
  }
}

var array = new Stack()

console.log(array.peek())