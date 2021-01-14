/**
Reescribir función map con forEach
*/

type myObj2 = { name: string, surname: string, status: string, age: number, stream: boolean }

/** @var myObj2[] objArr2*/
let objArr2: myObj2[] = [
  {
    name: 'J',
    surname: 'B',
    status: 'active',
    age: 34,
    stream: false
  },
  {
    name: 'M',
    surname: 'V',
    status: 'active',
    age: 31,
    stream: true
  },
  {
    name: 'D',
    surname: 'C',
    status: 'active',
    age: 41,
    stream: true
  }
];
let newArr2 = objArr2.map(e => ({fullName: `${e.name} ${e.surname}`, ...e}));
console.log(newArr2);

//--------------------------------------------
// código: function myMap...

newArr2 = myMap(objArr2);
console.log(newArr2);
