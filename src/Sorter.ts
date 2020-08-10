// import { Sorter } from './Sorter';

// export interface Sortable {
//   length: number; // getter is a property not method
//   compare(leftIdx: number, rightIdx: number): boolean;
//   swap(leftIdx: number, rightIdx: number): void;
// }
// union type like number[] | string syntax would check for its available methods and only allows you to use the only the ones common in between.
export abstract class Sorter {

  abstract compare(leftIndex: number, rightNumber: number) : boolean;
  abstract swap(leftIndex: number, rightNumber: number): void;
  abstract length: number;

  sort(): void {
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j+1)) {
          this.swap(j, j+1);
        }
      }
    }
  }
}