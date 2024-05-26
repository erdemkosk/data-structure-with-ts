/* eslint-disable max-len */
import { LinkedList } from './LinkedList';

const linkedList = new LinkedList(0);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
console.log(JSON.stringify(linkedList));
// {"head":{"value":0,"next":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4}}}}},"tail":{"value":4},"lenght":5}

linkedList.pop();
linkedList.pop();
linkedList.pop();
linkedList.pop();
console.log(JSON.stringify(linkedList));
// {"head":{"value":0},"tail":{"value":0},"lenght":1}

linkedList.pop();
linkedList.unshift(-1);
linkedList.unshift(-2);
console.log(JSON.stringify(linkedList));
// {"head":{"value":-2,"next":{"value":-1}},"tail":{"value":-1},"lenght":2}

linkedList.shift();
console.log(JSON.stringify(linkedList));
// {"head":{"value":-1},"tail":{"value":-1},"lenght":1}

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

console.log(JSON.stringify(linkedList));
console.log(linkedList.get(2));
// {"head":{"value":-1,"next":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4}}}}},"tail":{"value":4},"length":5}
// 2

linkedList.set(0, 0);
console.log(JSON.stringify(linkedList));
// {"head":{"value":0,"next":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4}}}}},"tail":{"value":4},"length":5}

linkedList.insert(1, 4);
console.log(JSON.stringify(linkedList));
// {"head":{"value":0,"next":{"value":4,"next":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4}}}}}},"tail":{"value":4},"length":6}

linkedList.remove(1);
console.log(JSON.stringify(linkedList));
// {"head":{"value":0,"next":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4}}}}},"tail":{"value":4},"length":5}

linkedList.reverse();
console.log(JSON.stringify(linkedList));
// {"head":{"value":4,"next":{"value":3,"next":{"value":2,"next":{"value":1,"next":{"value":0,"next":null}}}}},"tail":{"value":0,"next":null},"length":5}

linkedList.clear();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
linkedList.push(8);
linkedList.push(9);
console.log(JSON.stringify(linkedList));
// {"head":{"value":1,"next":{"value":2,"next":{"value":3,"next":{"value":4,"next":{"value":5,"next":{"value":6,"next":{"value":7,"next":{"value":8,"next":{"value":9}}}}}}}}},"tail":{"value":9},"length":9}
console.log(linkedList.findMiddleNode().value);
