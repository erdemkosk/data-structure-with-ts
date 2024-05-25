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
// {"head":{"value":0,"next":{"value":1,"next":{"value":2}}},"tail":{"value":2},"lenght":3}
