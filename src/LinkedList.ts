/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/prefer-default-export */

export interface ILinkedList {
  push(value : number) : void;
  pop () : void;
  shift() : void;
  unshift(value:number) : void;
  insert(index: number, value : number) : void
  get(index: number): number
}

export class Node {
  value : number;

  next: Node;

  constructor(value: number, next?:Node) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList implements ILinkedList {
  head : Node;

  tail : Node;

  length : number;

  constructor(value: number) {
    const newNode = new Node(value);
    // When initial operation will be head and tail the same value
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  get(index: number): number { // O(n)
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp.value;
  }

  push(value: number) : void { // O(1)
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; // last item(for now) next item will be new Node
      this.tail = newNode; // when we changed this we will update our tail item
    }

    this.length += 1;
  }

  pop() : void { // O(n)
    if (!this.head) { // if this is empty list
      return;
    }
    if (this.head === this.tail) { // if there is just one value remove everything
      this.head = undefined;
      this.tail = undefined;
      this.length = undefined;
      return;
    }

    let temp = this.head;
    let current = this.head;

    while (temp.next) {
      current = temp;
      temp = temp.next;
    }

    current.next = undefined;
    this.tail = current;
    this.length -= 1;
  }

  shift(): void { // O(1)
    let current = this.head;

    if (current === undefined) {
      return;
    }

    this.head = this.head.next;
    current = undefined;
    this.length -= 1;
  }

  unshift(value: number) : void { // O(1)
    const newNode = new Node(value, this.head);

    if (this.head) {
      this.head = newNode;
      this.length += 1;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }
  }

  insert(index: number, value: number) : void {
    throw new Error('Method not implemented.');
  }
}
