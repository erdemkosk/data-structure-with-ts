import { LinkedList } from './LinkedList';

const linkedList = new LinkedList(0);
linkedList.push(1);
linkedList.push(2);

console.log(JSON.stringify(linkedList));

// {"head":{"value":0,"next":{"value":1}},"tail":{"value":1},"lenght":null}
