/* eslint-disable no-plusplus */
/* eslint-disable space-unary-ops */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/lines-between-class-members */
export interface IStack {
  push(value: number) : void
  pop () : void

}

export class Node {
  value : number;

  next : Node;

  constructor(value : number, next? : Node) {
    this.next = next;
    this.value = value;
  }
}

export class Stack implements IStack {
  top : Node;
  length : number;

  constructor(value : number) {
    const newNode = new Node(value);
    // When initial operation will be head and tail the same value
    this.top = newNode;
    this.length = 1;
  }
  pop(): void {
    if (this.length === 0) {
      return
    }

    if (this.length === 1) {
      this.top = undefined;
      this.length = 0
    }
    const temp = this.top.next;

    this.top.next = undefined;
    this.top = temp

    this.length --
  }

  push(value: number): void {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length ++
  }
}
