//Типы данных
//number-0,1,2,3,
//string "/""
//object {}
//boolean true/false
//undefined
//null


//
// let num = 10;
// console.log('num =',num);
//
// let str = 'Hello!';
// console.log(str);
//
// const obj = {
//   name: "Alex",
//   age:18,
//   married: false,
// };
// console.log(obj);


// let age = 18;
//
//
// console.log(typeof age);
//
//
//
//
//
// let name = 'Alibek'
// console.log(typeof name);
//
// let good = false;
// console.log( typeof good);

//   let str = 'Привет';
// console.log(typeof str);
//
// let num = 123;
// console.log(typeof num);
//
// let flag = true;
// console.log(typeof flag);
//
//
// let txt = 'true';
// console.log(typeof txt);


// let a1 = 5+3;
// console.log(a1);
//
// let a2 = 5-3;
// console.log(a2);
//
// let a3 = 5*3;
// console.log(a3);
//
// let a4 = 5/3;
// console.log(a4);


// let a6 = 5% 3; //кратность
// console.log(a6);
//
// let a7 = 3% 5;
// console.log(a7);
//
// let a8 = 5+ '3';//конкатенация
// console.log(a8);
//
//
// let a9 = '5'-3;
// console.log(a9);
//
// let a10 = 75+'кг';
// console.log(a10);


//Условие if/else


// let x = 5;
//
// if (x === 5){
//   console.log('x равно пяти');
// } else{
//   console.log('x не равно 5 ');
// }


// = присваивание
//== сравнение по  значению
//=== сравнение по типу данных и по значению

// let a ='test';
//
// if (a ==='test'){
//   console.log('a Верно');
// } else {
//   console.log('(a неверно')
// }
//
//
// if ( m > 50) {
//   n = 'big';
//   console.log(n)
// } else {
//   n = 'litle';
//   console.log(n);
//}


// ++ = +1

// [] - массив


// тип данных массива - объект

//         1  2  3  4  5 - длина


//           0  1  2  3  4 - индекс
// let arr = [1, 2, 3, 4, 5];
//
// for (let i = 0;  i < arr.length; i++){
//   console.log(arr [i])
//}


// let arr = [2, 'hello', 89 , 'Irina' , 12, true, 'Max', false];


// console.log(arr[0], arr[2], arr[4]);
// console.log(arr[1], arr[3], arr[6]);
// console.log(arr[5], arr[7]);


// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === 'string') {
//     console.log(arr[i])
//   }
// }


// let a = 10;
//
// switch (a) {
//     case 1:
//         console.log('меньше');
//         break;
//     case 5:
//         console.log('в точку');
//         break;
//     case 10:
//         console.log('Перебор');
//         break;
//
//     default:
//         console.log('Нет таких значений')
// }

//
// let arr = [-2, 7, 9, 5, 8, 1, 12, 15, 17, 3];
//
// for (let i = 0; i < arr.length; i++)
//
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     } else {
//
//     }


//
//     let arr = [-2,7,'9б', 'Hello',1,12,'15', 'World',17,3];
// for (let i = 0; i < arr.length; i++ )
//     if (typeof arr[i] === 'string'){
//         console.log(arr[i])
//     }

// let seasons = 1;
//
// switch (seasons){
//     case 1:
//         console.log('winter');
//         break;
//
//     case 2:
//         console.log('spring');
//         break;
//     case 3:
// }


//
// let arr = ['pn', '2', '3', '4', '5', '6','7'];
// for (let i = 0; i < arr.length; i++) {
//     if (i === 5 || i === 6){
//         console.log(`<b>${arr[i]}</b>`)
//     } else{
//         console.log(arr[i])
//     }
// }


// let num = 5;
// for (let i = 1; i < 11; i++){
//     console.log(`${i} * ${num} = ${num * i }`)
// }


// let  arr = [1,2,3,4,5,-1,-3,-4];
// let sum = 0;
// for (let i = 0; i < arr.length;i++){
//     if(arr[i] > 0){
//         sum =
//         console.log()
//     }
// }


// let x = 1;
// let y = 14;
// let z = 34;
// console.log(-x);
// console.log(-y);
// console.log(-z);


// let arr = [1,2,3,4,5,6,7,4,2];
// for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         console.log(arr[i] + 1)
//     }else{
//         console.log(arr[i] + 1                  )
//     }
//
// }
//


// let arr =[1,2,3,4,5,-1,2-3];
// for (let i = 0; i < arr.length; i++){
//     let sum = 0;
//     if(arr[i] > 0){
//         sum += arr[i] ;
//     }
//
//
// }
//
// console.log(sum);


// let arr = [1,2,3,4,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//     if ( i === 6 ||  i === 7) {
//         console.log(`<b>${arr[i]}</b>`)
//
//
//     }else {
//         console.log(arr[i])
//     }
// }


// let seasons = 1;
// switch (seasons) {
//     case 1:
//         console.log('win')
// break
// }


// let arr = [1,2,3,4,5,6,7,4,2];
//  for (let i = 0; i < arr.length; i++){
//      if(arr[i] % 2 === 0){
//          console.log(arr[i] + 1)
//      }else{
//          console.log(arr[i] + 1)
//      }
//
//  }


// let arr = ['Привет','Мир','Земля','Привет'];
// for (let i = 0; i <arr.length)

// let min = 8;
// if(min >   10  || min < 15){
//     console.log(min)
// }


// function f название Функции(parametrs) {
// body
// }

// f()  // вызываем функцию


// function  task (num) {
//     console.log(num)
// }
//
// task(10);


// function task1 (num1, num2) {
// //     console.log(num1 + num2)
// // }
// //
// // task1(1, 5);
// //
// //
// // function task2(name, surname) {
// //     console.log(`My name is ${name } ${surname}`)
// // }
// // task2( 'Anakin', 'SkyWalker');

//
// function task3(val) {
//     console.log(`${val} typeof ${typeof val} `)
// }
//
//
// task3(1);
//
//
// function task4(num) {
//     if (num > 0) {
//         console.log('Positive');
//     }  else if(num < 0){
//         console.log('Negative')
//     }
//         else {
//         console.log('Zero')
//         }
//
//
//
//
//
//     }
//
//     task4(1);


// function task5(obj) {
//     console.log(obj.id)
// }
//
// task5({id:0});


// function task6(obj) {
//     if (obj.name.length % 2 === 0) {
//     console.log('0')
// } else {
//     console.log('1')
//     }
//
//
// }
//
//
// task6( {name: 'xxxx'});

// function task7(num, num2) {
//     if (num > num2) {
//         console.log('1')
//
//     } else if(num < num2) {
//         console.log('-1')
//     } else{
//         console.log('0')
//     }
// }
//
// task7(5, 2);



//
// function MasterIoda(num) {
//     if (num % 5===0){
//         console.log('Ioda');
//     }
//     else if (num % 3===0) {
//         console.log('Master');
//     }else if (num % 3 ===0 && num % 5 ===0 ){
//         console.log('MasterIoda')
//     }
//
// }
//
// MasterIoda(15);






