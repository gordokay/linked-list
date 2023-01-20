class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let current = this.head;
    while(current) {
      counter++;
      current = current.next;
    }
    return counter;
  }

  headNode() {
    return this.head;
  }

  tailNode() {
    let current = this.head;
    while(current && current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    for(let i = 0; i < index; i++) {
      if(!current) break;
      current = current.next;
    }
    return current;
  }

  pop() {
    if(!this.head) return;
    if(!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while(current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  contains(value) {
    if(!this.head) return;
    let current = this.head;
    while(current) {
      if(current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  find(value) {
    if(!this.head) return;
    let current = this.head;
    let index = 0;
    while(current) {
      if(current.value === value) return index;
      current = current.next;
      index++;
    }
    return null;
  }

  toString() {
    if(!this.head) return 'null';
    let str = '';
    let current = this.head;
    while(current) {
      str += `${current.value} -> `;
      current = current.next;
    }
    str += 'null';
    return str;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }

  get value() {
    return this.data;
  }

  set value(data) {
    this.data = data;
  }

  get next() {
    return this.nextNode;
  }

  set next(nextNode) {
    this.nextNode = nextNode;
  }
}