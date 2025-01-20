import LinkedList from "./linked_list.js";

class HashMap {
  loadFactor = 0.8;
  capacity = 16;
  
  buckets = new Array(this.capacity);
  
  items = 0;

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
    const hashcode = this.hash(key);

    // Hash code is index. Now insert in bucket of that index
    // Buckets are link list. So if undefined. Init linked list
    let bucket = this.buckets[hashcode];

    if (!bucket) {
      this.buckets[hashcode] = new LinkedList();
      bucket = this.buckets[hashcode];
    }

    // If key already exists, overwrite
    // Else append node to the end of list
    this.items += bucket.set(key, value);

    
    return true;
  }
  
  grow() {
    const needToGrow = (this.items / this.capacity) > this.loadFactor;
    if (!needToGrow) return;

    // Reset items count
    this.items = 0;

    // Create a new reference to current buckets array
    // Retrieve and store a reference to all of its nodes
    let currentArr = this.buckets;
    const nodes = this.entries();

    // Double the current hashmap capacity property
    // Create a new array with new capacity size
    // Set it as new buckets array
    this.capacity *= 2;
    console.log('Capacity: ' + this.capacity)
    let copyArr = new Array(this.capacity);
    console.log('Copy array length: ' + copyArr.length)

    this.buckets = copyArr;

    // Copy all nodes to new copy array
    for (let node of nodes) {
      this.set(node[0], node[1]);
    }

    // By deleting the only reference to the replaced array
    // JS garbage collector free ups the memory it was using
    currentArr = null;
  }

  // collisions occur when TWO DIFFERENT keys generate the same hash code
  // and get assigned to the same bucket
  // However, we know that this is not an update because the keys are different

  // takes one argument as a key and returns the value that is assigned to this key.
  // If a key is not found, return null.
  get(key) {
    if (!key) return;

    const hashcode = this.hash(key);

    let bucket = this.buckets[hashcode];
    if (!bucket) return null;

    return bucket.get(key);
  }

  // takes a key as an argument and returns true or false
  // based on whether or not the key is in the hash map.
  has(key) {
    if (!key) return;

    const hashcode = this.hash(key);

    let bucket = this.buckets[hashcode];
    if (!bucket) return null;

    return bucket.has(key);
  }

  // takes a key as an argument. If the given key is in the hash map,
  // it should remove the entry with that key and return true.
  // If the key isn’t in the hash map, it should return false.
  remove(key) {
    if (!key) return;

    const hashcode = this.hash(key);

    let bucket = this.buckets[hashcode];
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
    return
  }
}

export default HashMap;
