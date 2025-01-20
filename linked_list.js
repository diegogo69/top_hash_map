import Node from "./node.js";

// Class linked list
class LinkedList {
  headNode = null;

  prepend(key, value) {
    // New node reference headNode node
    const node = new Node(key, value, this.headNode);

    // HeadNode node reference new node
    this.headNode = node;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    // If head == null. Prepend node as first list item
    if (this.headNode === null) {
      this.prepend(value);
      return;
    }
    
    const node = new Node(value);
    let tmp = this.headNode;

    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    // node by default references null
    tmp.nextNode = node;
  }

  // returns the total number of nodes in the list
  size() {
    // Declare variables for number of nodes and node iterator
    let i = 0;
    let tmp = this.headNode;

    // Excecute while tmp is not null, i.e. end of list
    while (tmp !== null) {
      tmp = tmp.nextNode;
      i++;
    }

    return i;
  }

  // returns the first node in the list
  head() {
    return this.headNode;
  }

  // returns the last node in the list
  tail() {
    if (this.headNode === null) return null;

    let tmp = this.headNode;

    // If node reference null, it is the last node
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }

    return tmp;
  }

  // returns the node at the given index
  at(index) {
    if (this.headNode === null) throw "Invalid action. List is empty";

    let tmp = this.headNode;
    let i = 0;

    while (tmp !== null && i !== index) {
      tmp = tmp.nextNode;
      i++;
    }

    return tmp;
  }

  // removes the last element from the list
  pop() {
    // If head is null, there is no list. Throw error
    if (this.headNode === null) return;

    // If list has only one element
    if (this.headNode.nextNode === null) {
      this.headNode = null;
      return;
    }

    let prev = null;
    let tmp = this.headNode;

    // If node reference null, it is the last node
    while (tmp.nextNode !== null) {
      prev = tmp;
      tmp = tmp.nextNode;
    }

    // Do not reference last node in list anymore
    prev.nextNode = null;
    // Return removed node
    return tmp;
  }

  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    if (this.headNode === null) return false;

    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp.value === value) return true;

      tmp = tmp.nextNode;
    }

    return false;
  }

  // removes reference to all nodes
  clear() {
    this.headNode = null;
  }

  // returns true if the passed in key is in the list and otherwise returns false.
  has(key) {
    if (this.headNode === null) return false;

    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp.key === key) return true;

      tmp = tmp.nextNode;
    }

    return false;
  }

  // returns true if the passed in key is in the list and otherwise returns false.
  remove(key) {
    // If head is null, there is no list. Throw error
    if (this.headNode === null) return false;

    // If list has only one element
    if (this.headNode.key === key) {
      this.headNode = null;
      return true;
    }
    
    let prev = this.headNode;
    let tmp = this.headNode.nextNode;

    while (tmp !== null) {
      if (tmp.key === key) {
        prev.nextNode = tmp.nextNode;
        return true;
      }

      prev = tmp;
      tmp = tmp.nextNode;
    }

    return false;
  }

  // returns the index of the node containing value, or null if not found.
  findValue(value) {
    if (this.headNode === null) return null;

    let i = 0;
    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp.value === value) return i;

      tmp = tmp.nextNode;
      i++;
    }

    return null;
  }

  // returns the index of the node containing value, or null if not found.
  findKey(key) {
    if (this.headNode === null) return null;

    let i = 0;
    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp.key === key) return i;

      tmp = tmp.nextNode;
      i++;
    }

    return null;
  }

  // returns an array containing all the keys inside the linked list
  keys() {
    let arr = [];

    if (this.headNode === null) return arr;

    let tmp = this.headNode;

    while (tmp !== null) {
      arr.push(tmp.key);

      tmp = tmp.nextNode;
    }

    return arr;
  }

  // returns an array containing all the values inside the linked list
  values() {
    let arr = [];

    if (this.headNode === null) return arr;

    let tmp = this.headNode;

    while (tmp !== null) {
      arr.push(tmp.value);

      tmp = tmp.nextNode;
    }

    return arr;
  }

  // returns an array containing all the key-value pairs inside the linked list
  entries() {
    let arr = [];

    if (!this.headNode) return arr;

    let tmp = this.headNode;

    while (tmp !== null) {
      arr.push([tmp.key, tmp.value]);

      tmp = tmp.nextNode;
    }

    return arr;
  }

  // returns the index of the node containing value, or null if not found.
  get(key) {
    if (this.headNode === null) return null;

    let tmp = this.headNode;

    while (tmp !== null) {
      if (tmp.key === key) return tmp.value;

      tmp = tmp.nextNode;
    }

    return null;
  }

  // returns the index of the node containing value, or null if not found.
  set(key, value) {
    if (this.headNode === null) {
      this.prepend(key, value);
      return 
    };

    let tmp = this.headNode;
    if (tmp.key === key) return (tmp.value = value);

    // Traverse list looking for key collision
    // If key collision overwrite its value
    // Else append key-value pair node at the end of list 
    while (tmp.nextNode !== null) {
      if (tmp.key === key) return (tmp.value = value);
        
      tmp = tmp.nextNode;
    }

    tmp.nextNode = new Node(key, value);
  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this.headNode === null) return null;

    let str = "";
    let tmp = this.headNode;

    while (tmp !== null) {
      str += `(${tmp.value}) -> `;

      tmp = tmp.nextNode;
    }

    str += "null";

    return str;
  }

  // that inserts a new node with the provided value at the given index.
  insertAt(value, index) {
    // If head is null, there is no list. Throw error
    if (this.headNode === null) throw "Invalid action. List is empty";

    let i = 0;
    let prev = null;
    let tmp = this.headNode;

    // If node reference null, it is the last node
    while (tmp !== null && i !== index) {
      prev = tmp;
      tmp = tmp.nextNode;
      i++;
    }

    let node = new Node(value, tmp);
    // Do not reference last node in list anymore
    prev.nextNode = node;
  }

  // removes the node at the given index.
  removeAt(index) {
    // If head is null, there is no list. Throw error
    if (this.headNode === null) throw "Invalid action. List is empty";

    let i = 0;
    let prev = null;
    let tmp = this.headNode;

    // If node reference null, it is the last node
    while (tmp !== null && i !== index) {
      prev = tmp;
      tmp = tmp.nextNode;
      i++;
    }

    // Reference node next to tmp
    prev.nextNode = tmp.nextNode;

    // Return removed tmp node
    return tmp;
  }
}

export default LinkedList;
