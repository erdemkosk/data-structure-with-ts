import { Queue } from '../../src/structures/Queue';

describe('Queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue(1); // Kuyruğu başlangıç değeriyle başlatıyoruz
  });

  test('should initialize with a value', () => {
    expect(queue.first.value).toBe(1);
    expect(queue.last.value).toBe(1);
    expect(queue.length).toBe(1);
  });

  test('should enqueue values', () => {
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.last.value).toBe(3);
    expect(queue.first.next.value).toBe(2);
    expect(queue.length).toBe(3);
  });

  test('should dequeue values', () => {
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    expect(queue.first.value).toBe(2);
    expect(queue.length).toBe(2);

    queue.dequeue();
    expect(queue.first.value).toBe(3);
    expect(queue.length).toBe(1);

    queue.dequeue();
    expect(queue.first).toBeUndefined();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
  });

  test('should handle dequeue from an empty queue', () => {
    queue.dequeue();
    queue.dequeue(); // Queue should be empty now

    expect(queue.first).toBeUndefined();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
  });
});
