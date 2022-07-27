class Queue {
  constructor() {
    this.queue = []
  }
  enqueue(item) { // Add an item to the back of the queue
    this.queue.push(item)
  }
  dequeue() { // Remove an item from the front of the queue
    this.queue.shift()
  }
  peek() { // Return the item at the front of the queue (but do not remove it)
    return this.queue[0]
  }
  isEmpty() { // Check wheter the queue is empty or not
    return this.queue.length === 0
  }
  get length() { // Return the length of the queue
    return this.queue.length
  }
}

var array = new Queue()
