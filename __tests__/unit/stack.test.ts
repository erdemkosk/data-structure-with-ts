import { Stack } from '../../src/structures/Stack';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack(0); // Initialize with a default value
  });

  test('should initialize with a value', () => {
    expect(stack.top.value).toBe(0);
    expect(stack.length).toBe(1);
  });

  test('should push values onto the stack', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(1);
    expect(stack.length).toBe(3);
  });

  test('should pop values from the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    stack.pop();
    expect(stack.top.value).toBe(2);
    expect(stack.length).toBe(3);

    stack.pop();
    expect(stack.top.value).toBe(1);
    expect(stack.length).toBe(2);

    stack.pop();
    expect(stack.top.value).toBe(0);
    expect(stack.length).toBe(1);

    stack.pop();
    expect(stack.top).toBeUndefined();
    expect(stack.length).toBe(0);
  });

  test('should handle popping from an empty stack', () => {
    stack.pop();
    stack.pop();

    expect(stack.top).toBeUndefined();
    expect(stack.length).toBe(0);
  });
});
