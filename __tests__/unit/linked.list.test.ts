import { LinkedList } from '../../src/structures/LinkedList';

describe('LinkedList', () => {
    let linkedList ;

  beforeEach(() => {
    linkedList =  new LinkedList(0)
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
  });

  test('initial push and structure', () => {
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":0,\"next\":{\"value\":1,\"next\":{\"value\":2,\"next\":{\"value\":3,\"next\":{\"value\":4}}}}},\"tail\":{\"value\":4},\"length\":5}');
  });

  test('pop elements and structure', () => {
    linkedList.pop();
    linkedList.pop();
    linkedList.pop();
    linkedList.pop();
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":0},\"tail\":{\"value\":0},\"length\":1}');
  });

  test('unshift elements and structure', () => {
    linkedList.pop();
    linkedList.unshift(-1);
    linkedList.unshift(-2);
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":-2,\"next\":{\"value\":-1,\"next\":{\"value\":0,\"next\":{\"value\":1,\"next\":{\"value\":2,\"next\":{\"value\":3}}}}}},\"tail\":{\"value\":3},\"length\":6}');
  });

  test('shift elements and structure', () => {
    linkedList.pop();
    linkedList.unshift(-1);
    linkedList.unshift(-2);
    linkedList.shift();
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":-1,\"next\":{\"value\":0,\"next\":{\"value\":1,\"next\":{\"value\":2,\"next\":{\"value\":3}}}}},\"tail\":{\"value\":3},\"length\":5}');
  });

  test('get element at index', () => {
    expect(linkedList.get(2)).toBe(2);
  });

  test('set element at index', () => {
    linkedList.set(0, 0);
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":0,\"next\":{\"value\":1,\"next\":{\"value\":2,\"next\":{\"value\":3,\"next\":{\"value\":4}}}}},\"tail\":{\"value\":4},\"length\":5}');
  });

  test('insert element at index', () => {
    linkedList.insert(1, 4);
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":0,\"next\":{\"value\":4,\"next\":{\"value\":1,\"next\":{\"value\":2,\"next\":{\"value\":3,\"next\":{\"value\":4}}}}}},\"tail\":{\"value\":4},\"length\":6}');
  });

  test('remove element at index', () => {
    linkedList.remove(1);
    expect(JSON.stringify(linkedList)).toBe('{\"head\":{\"value\":0,\"next\":{\"value\":2,\"next\":{\"value\":3,\"next\":{\"value\":4}}}},\"tail\":{\"value\":4},\"length\":4}');
  });

  test('reverse the list', () => {
    linkedList.reverse();
    expect(JSON.stringify(linkedList)).toBe('{"head":{"value":4,"next":{"value":3,"next":{"value":2,"next":{"value":1,"next":{"value":0,"next":null}}}}},"tail":{"value":0,"next":null},"length":5}');
  });

  test('clear the list', () => {
    linkedList.clear();
    expect(JSON.stringify(linkedList)).toBe('{\"length\":0}');
  });

  test('check for loop in the list', () => {
    expect(linkedList.hasLoop()).toBe(false);
  });

  test('find kth element from end', () => {
    console.log(JSON.stringify(linkedList))
    expect(linkedList.findKthFromEnd(2)?.value).toBe(3);
  });
});
