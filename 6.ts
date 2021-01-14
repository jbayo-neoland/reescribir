/**
Reescribir función some con do..while
*/

type myObj6 = { name: string, surname: string, status: string, age: number, stream: boolean }
type objWithStream = { name: string, fullname: string, status: string, isAdult: boolean }

/** @var myObj6[] objArr6*/
let objArr6: myObj6[] = [
  {
    name: 'J',
    surname: 'B',
    status: 'active',
    age: 23,
    stream: false
  },
  {
    name: 'M',
    surname: 'V',
    status: 'active',
    age: 17,
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
let newArr6 = objArr6.some(e => e.age > 40 && e.stream);
console.log(newArr6); // true

// objetivo: Debemos obtener un array de objetos de tipo objWithStream (donde stream siempre es true)
// comment: isAdult se considera a partir de 18

//--------------------------------------------
// código1: primero filter, luego map: let newArr6_1 = ...filter...map...
// comment: Si no funciona, escribid por qué creeis que puede que no funcione

//--------------------------------------------
// código2: primero map, luego filter: let newArr6_2 = ...map...filter
// comment: Si no funciona, escribid por qué creeis que puede que no funcione
