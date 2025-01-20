import HashMap from "./hashmap.js";

// function main() {
  window.test = new HashMap() // or HashMap() if using a factory

  const test = window.test;

  test.log();
  console.log('Nodes: ' + test.length())
  console.log('Buckets: ' + test.capacity);
  console.log('')

  test.set('apple', 'red')
  test.set('banana', 'yellow')
  test.set('carrot', 'orange')
  test.set('dog', 'brown')
  test.set('elephant', 'gray')
  test.set('frog', 'green')
  test.set('grape', 'purple')
  test.set('hat', 'black')
  test.set('ice cream', 'white')
  test.set('jacket', 'blue')
  test.set('kite', 'pink')
  test.set('lion', 'golden')

  test.log();
  console.log('Nodes: ' + test.length())
  console.log('Buckets: ' + test.capacity);
  console.log('')

  test.set('iguana', 'verde')

  test.log();
  console.log('Nodes: ' + test.length())
  console.log('Buckets: ' + test.capacity);
  console.log('')

 
// }
// main();
