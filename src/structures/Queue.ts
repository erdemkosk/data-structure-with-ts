/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/prefer-default-export */

export interface IQueue {
  enqueue(value : number) : void;
  dequeue () : void;
}

class Node {
  value : number;

  next: Node;

  /**
     * Node constructor.
     * @param {number} value - The value to store in the node.
     * @param {Node} [next] - A reference to the next node in the list.
     */
  constructor(value: number, next?:Node) {
    this.value = value;
    this.next = next;
  }
}

export class Queue implements IQueue {
  first : Node;

  last : Node;

  length : number;

  constructor(value: number) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value: number): void {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      if (this.last) {
        this.last.next = newNode;
      }
      this.last = newNode;
    }
    this.length++;
  }

  dequeue(): void {
    if (this.length === 0) {
      return;
    }
    if (this.first) {
      const temp = this.first;
      this.first = this.first.next;
      temp.next = null;
      this.length--;
      if (this.length === 0) {
        this.last = null;
      }
    }
  }
}
