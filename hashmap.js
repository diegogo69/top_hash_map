import LinkedList from "./linked_list.js";

class HashMap {
  loadFactor = 0.8;
  capacity = 16;

  buckets = new Array(this.capacity);

  nodesCount = 0;

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  // arguments: key, and value that is assigned to this key
  // If a key already exists, then the old value is overwritten
  // Remember to grow your buckets to double their capacity when your hash map reaches the load factor.
  set(key, value) {
    if (!key) return;

    // Hash key
    const hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    // Hash code is index. Now insert in bucket of that index
    // Buckets are link list. So if undefined. Init linked list
    let bucket = this.buckets[hashIndex];

    if (!bucket) {
      this.buckets[hashIndex] = new LinkedList();
      bucket = this.buckets[hashIndex];
    }

    // If key already exists, overwrite
    // Else append node to the end of list
    this.nodesCount += bucket.set(key, value);

    this.grow();
     
    return true;
  }

  // Check if the number of nodes in the hashmap exceeds the loadFactor
  // If it doesn't return out of the function inmediately
  // Else create and populate a new array double the size of buckets
  // With all of the existing nodes
  grow() {
    const needToGrow = (this.nodesCount / this.capacity) >= this.loadFactor;
    if (!needToGrow) return;

    // Create a new reference to current buckets array
    // Retrieve and store a reference to all of its nodes
    let currentArr = this.buckets;
    const nodes = this.entries();

    // Double the current hashmap capacity property
    // Create a new array with new capacity size
    // Set it as new buckets array
    this.capacity *= 2;
    let copyArr = new Array(this.capacity);
    this.buckets = copyArr;

    // Reset nodesCount count to zero
    // Copy all nodes to new copy array
    this.nodesCount = 0;
    for (let node of nodes) {
      this.set(node[0], node[1]);
    }

    // By deleting the only reference to the replaced array
    // JS garbage collector free ups the memory it was using
    currentArr = null;
  }

  // takes one argument as a key and returns the value that is assigned to this key.
  // If a key is not found, return null.
  get(key) {
    if (!key) return;

    const hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let bucket = this.buckets[hashIndex];
    if (!bucket) return null;

    return bucket.get(key);
  }

  // takes a key as an argument and returns true or false
  // based on whether or not the key is in the hash map.
  has(key) {
    if (!key) return;

    const hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let bucket = this.buckets[hashIndex];
    if (!bucket) return null;

    return bucket.has(key);
  }

  // takes a key as an argument. If the given key is in the hash map,
  // it should remove the entry with that key and return true.
  // If the key isn’t in the hash map, it should return false.
  remove(key) {
    if (!key) return;

    const hashIndex = this.hash(key);
    if (hashIndex < 0 || hashIndex >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }

    let bucket = this.buckets[hashIndex];
    if (!bucket) return null;

    return bucket.remove(key);
  }

  // returns the number of stored keys in the hash map.
  length() {
    let total = 0;

    for (let bucket of this.buckets) {
      if (!bucket) continue;

      total += bucket.size();
    }

    return total;
  }

  // removes all entries in the hash map.
  clear() {
    for (let bucket of this.buckets) {
      if (!bucket) {
        continue;
      }

      bucket.clear();
    }

    return true;
  }

  // returns an array containing all the keys inside the hash map.
  keys() {
    let arr = [];
    for (let bucket of this.buckets) {
      if (!bucket) {
        continue;
      }

      arr.push(...bucket.keys());
    }
    return arr;
  }

  // returns an array containing all the values.
  values() {
    let arr = [];
    for (let bucket of this.buckets) {
      if (!bucket) {
        continue;
      }

      arr.push(...bucket.values());
    }
    return arr;
  }

  // returns an array that contains each key, value pair.
  // Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {
    let arr = [];
    for (let bucket of this.buckets) {
      if (!bucket) {
        continue;
      }

      arr.push(...bucket.entries());
    }
    return arr;
  }

  log() {
    let i = 0;
    for (let bucket of this.buckets) {
      if (!bucket) {
        console.log("null " + i++);
        console.log();
        continue;
      }

      console.log(bucket.toString());
      console.log();
    }
    return;
  }
}

export default HashMap;
