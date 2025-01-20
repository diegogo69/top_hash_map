import LinkedList from "./linked_list";

class HashMap {
  buckets = new Array(16);

  loadFactor = 0.8;
  capacity = this.buckets.length;
  
  growthFactor = () => this.loadFactor * this.capacity;

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
    bucket.set(key, value);    
  }
  
  // collisions occur when TWO DIFFERENT keys generate the same hash code
  // and get assigned to the same bucket
  // However, we know that this is not an update because the keys are different

  // takes one argument as a key and returns the value that is assigned to this key.
  // If a key is not found, return null.
  get(key) {
    let bucket = this.buckets[hashcode];
    if (!bucket) return null

    return bucket.get(key);
  }

  // takes a key as an argument and returns true or false
  // based on whether or not the key is in the hash map.
  has(key) {

  }

  // takes a key as an argument. If the given key is in the hash map,
  // it should remove the entry with that key and return true.
  // If the key isn’t in the hash map, it should return false.
  remove(key) {

  }

  // returns the number of stored keys in the hash map.
  length() {

  }

  // removes all entries in the hash map.
  clear() {

  }

  // returns an array containing all the keys inside the hash map.
  keys() {

  }

  // returns an array containing all the values.
  values() {

  }

  // returns an array that contains each key, value pair.
  // Example: [[firstKey, firstValue], [secondKey, secondValue]]
  entries() {

  }
}

export default HashMap;