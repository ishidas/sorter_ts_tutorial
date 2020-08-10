import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {

  constructor(public data: number[]) {
    super();
  }
  // getter syntax you can access it as property instead of calling this as method
  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }


}