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
  set(index: number, value: number): void
  remove (index: number) : void
  reverse () : void
}

export class Node {
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

export class LinkedList implements ILinkedList {
  head : Node;

  tail : Node;

  length : number;


  /**
   * Creates a linked list with an initial value.
   * @param {number} value - Initial value to insert into the list.
   */
  constructor(value: number) {
    const newNode = new Node(value);
    // When initial operation will be head and tail the same value
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  reverse(): void { // O(n)
    let temp = this.head; // we will useing to get save initial state of whole ll

    this.head = this.tail;
    this.tail = temp;

    // for now we will just reverse head and tail but we have to reverse pointers between nodes

    let { next } = temp;
    let prev = null;


    for (let index = 0; index < this.length; index++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

  /**
   * Retrieves a value at a specific index in the list.
   * @param {number} index - The index of the value to retrieve.
   * @returns {number | undefined} The value at the specified index, or undefined if out of bounds.
   */
  get(index: number): number | undefined { // O(n)
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp.value;
  }

  /**
   * Sets a value at a specific index in the list.
   * @param {number} index - The index at which to set the value.
   * @param {number} value - The new value to set.
   */
  set(index: number, value: number): void { // O(n)
    if (index < 0 || index > this.length) return;

    let current = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        current.value = value;
        break;
      }
      current = current.next;
    }
  }

  /**
   * Adds a value to the end of the list.
   * @param {number} value - The value to add.
   */
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


  /**
   * Removes the last element from the list.
   */
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

  /**
   * Removes the first element from the list.
   */
  shift(): void { // O(1)
    let current = this.head;

    if (current === undefined) {
      return;
    }

    this.head = this.head.next;
    current = undefined;
    this.length -= 1;
  }

  /**
   * Adds a new value at the beginning of the list.
   * @param {number} value - The value to insert at the start.
   */
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

  /**
   * Inserts a value at a specified index in the list.
   * @param {number} index - The index at which to insert the new value.
   * @param {number} value - The value to insert.
   */
  insert(index: number, value: number) : void {
    if (index < 0 || index > this.length) return;

    let current = this.head;
    let before = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        // current.value = value;
        const newNode = new Node(value, current);
        before.next = newNode;
        this.length += 1;

        break;
      }

      before = current;
      current = current.next;
    }
  }

  /**
   * Remove a value at a specified index in the list.
   * @param {number} index - The index at which to remove.
   */
  remove(index: number): void { // O(n)
    if (index < 0 || index > this.length) return;

    let current = this.head;
    let before = this.head;

    for (let i = 0; i < this.length; i++) {
      if (i === index) {
        before.next = current.next;
        this.length -= 1;
      }
      before = current;
      current = current.next;
    }
  }
}
