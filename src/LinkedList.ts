/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/prefer-default-export */

export interface ILinkedList {
  push(value : number) : void;
  pop () : void;
  unshift(value:number) : void;
  insert(index: number, value : number) : void
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

  lenght : number;

  constructor(value: number) {
    const newNode = new Node(value);
    // When initial operation will be head and tail the same value
    this.head = newNode;
    this.tail = newNode;
    this.lenght = 1;
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

    this.lenght += 1;
  }

  pop() : void { // O(n)
    if (!this.head) { // if this is empty list
      return;
    }
    if (this.head === this.tail) { // if there is just one value remove everything
      this.head = undefined;
      this.tail = undefined;
      this.lenght = undefined;
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
    this.lenght -= 1;
  }

  unshift(value: number) : void { // O(1)
    const newNode = new Node(value, this.head);

    if (this.head) {
      this.head = newNode;
      this.lenght += 1;
    } else {
      this.head = newNode;
      this.tail = newNode;
      this.lenght = 1;
    }
  }

  insert(index: number, value: number) : void {
    throw new Error('Method not implemented.');
  }
}
