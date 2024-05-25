/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable import/prefer-default-export */

export interface ILinkedList {
  push(value : number) : void;
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

  unshift(value: number) : void {
    throw new Error('Method not implemented.');
  }

  insert(index: number, value: number) : void {
    throw new Error('Method not implemented.');
  }
}
