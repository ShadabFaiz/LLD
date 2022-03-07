export class Ladder {
  private _head: number;
  private _tail: number;

  constructor(head: number, tail: number) {
    this._head = head;
    this._tail = tail;
  }

  get head() {
    return this._head;
  }
  get tail() {
    return this._tail;
  }
}