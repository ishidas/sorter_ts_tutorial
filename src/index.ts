import { Sorter } from './Sorter';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([1, 100000, 3, -5, 0]);
const charactersCollection = new CharactersCollection('xXAbagf');
// const sorter = new Sorter(numbersCollection);
// const sorter2 = new Sorter(charactersCollection);
// // sorter.sort();
// sorter2.sort();
// numbersCollection.sort();
// console.log(numbersCollection.data);

// charactersCollection.sort();
// console.log(charactersCollection.data);

// add linked list and sort section
const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-1)
linkedList.add(5)

// interface way
// const sorter = new Sorter(linkedList);
// sorter.sort();

// abstract way
// linkedList.sort();
// linkedList.print();