/**
Reescribir función filter con while
*/

/** @var myObj3[] objArr3*/
type myObj3 = { name: string, surname: string, status: string, age: number, stream: boolean }
let objArr3: myObj3[] = [
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
let newArr3 = objArr3.filter(e => !e.stream && e.age >= 18);
console.log(newArr3.length);


//--------------------------------------------
// código: function myFilter...
// comment: no hace falta un callback, simplemente que haga la comparación: stream === false && age >= 18
newArr3 = myFilter(objArr3);
console.log(newArr3.length);
