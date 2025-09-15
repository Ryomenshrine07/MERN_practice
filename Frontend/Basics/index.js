


// Function declaration..
// function print(a){
//     console.log(a)
// }
// print(5);

// Function expression

// 2 Types

// const print = (a) => {
//     console.log(a);
// }

// const print = function(a) {
//     console.log(a)
// }


// IIFE => useEffect
// (function (a){
//     console.log(a);
// })(5);

// ======================================================================================================================

// Funtion Generator
// Keyword => yeild => mujhe ye value lauta do
 
// function* numberGenerator(){
//     let a= 5,b=7;
//     yield a + b;
//     yield a - b;
//     yield a / b;

// }

// Object of function generator
// [next, value, done]
// done => boolean feild => Will give false if more iterations are available
// This obj is a iterator

// const obj = numberGenerator();
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);


// function* fetchProducts(){
//     let page = 1;
//     while(true){
//         yield `fetch products for page ${page}`;
//         page++;
//     }
// }

// const products = fetchProducts();

// Class => for constructor, Keyword = [constructor];
// Class => No decalration keywords for methods declaration
// class Priyanka{
//     constructor() {       
//     }
//     sayHi = () => {
//         console.log("Hii");
//     }
// };

// const obj = new Priyanka();
// obj.sayHi();


// ======================================================================================================================

// Call back
// function print(pn){
//     pn();
// }

// print(() => console.log("HEHEHEEH"));


// print();

// // Hoisting
// function print(){
//     console.log("HEHE");
// }

// ======================================================================================================================

// JSON
// const Person  = {
//     name:'Priyanka',
//     email:'p@gmail.com',
//     cars: ["BMW","Lamborgini","Pagani Hurrah"],
//     job: () => {
//         return "Priyanka is coding";
//     },
//     personal:{
//         dob:{
//             day:19,
//             month:"May",
//             year:2004
//         },
//         account:{
//             accNo:12123,
//             balance:1000000000,
//             branch:"Janta Quarter"
//         }
//     }
// }

// // const details = await getPersonDetails();
// const details = Person;
// console.log(details.name);
// console.log(details.cars);
// console.log(details.email)
// console.log(details.job());
// console.log(details.personal.account.balance);
// console.log(details.personal.dob.year)

// ======================================================================================================================

// This keyword:

// const button = document.querySelector('#btn');

// // Function Keyword => [this] will point to the html element itself  
// // Arrow Function => [this] will point to the window object 
// button.addEventListener('click', function(){
//     console.log(window.location)
//     if(this.style.backgroundColor == "red"){
//         this.style.backgroundColor = "blue";
//     }else if(this.style.backgroundColor == "blue"){
//         this.style.backgroundColor = "red";
//     }else{
//         this.style.backgroundColor = "red";
//     }
// });

// ======================================================================================================================

// Prototye and Inheritance

// const person = {
//     greet: function(){
//         return "hello";
//     }
// }

// const user = {
//     name:"yashu"
// }

// user.__proto__ = person;
// console.log(user.name);
// console.log(user.greet());

// Prototype Inheritance

// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.speak = function(){
//     console.log("Bhaw BHaw");
// }

// const dog = new Animal("Bruno");
// dog.speak();

// console.log(dog);
// console.log(dog.toString());

// ======================================================================================================================

// Object.create()

// const animal = {
//     speak(){
//         console.log("Animal is speaking")
//     }
// }



// const dog =  Object.create(animal);

// dog.bark = function(){
//     console.log('Bark');
// }
// dog.speak();
// dog.bark();


// ======================================================================================================================

// arr = [1,2,3,4,5,6];
//  slice(start , end)
// start, end are both indexes
// end index is excluded
// newArr = arr.slice(1,4);
// console.log(newArr)

// Splice => Add elements in the middle of the array
// splice(start, delete count, items)
// start => start Index
// delete count => deleteCount
// items => replace elements
// arr.splice(2,1,99);
// console.log(arr);  
// arr.splice(2,2,12,15);
// console.log(arr)

// arr.forEach(e => {
//     console.log(e)
// });


// let eNum = arr.find((e) => e % 2 == 0);
// console.log(eNum)

// let index = arr.findIndex((e) => e % 2 !== 0);
// console.log(index)

// Destructuring..

// let [a, ,b] = arr;
// console.log(a)
// console.log(b)

// Spread Operators..

// 1. Spread => expand array elements
// 2. Rest => collect remaining elements

// [Spread]
// let newArr = [...arr,89,90]
// console.log(newArr)

// [Rest]
// let[first, ...rest, lolopop] = arr;
// let {first,rest,lolopop} = pbj;
// console.log(first)
// console.log(rest);


// ======================================================================================================================

// [Symbol data type] =>

    // "Symbols are unique and immutable primitives often used as object 
    // keys when you need to avoid property name collisions or store metadata
    // that shouldn’t show up in normal enumeration.They can also be used 
    // with well-known symbols like Symbol.iterator to customize object behavior."

// ======================================================================================================================

// Binding Event Handlers =>
// This concept primarily applies to React class components. In JavaScript,
// the this keyword works differently than in other languages. When you pass a 
// class method as an event handler (e.g., onClick={this.handleClick}),
// its this context is lost when the function is actually called.



// ======================================================================================================================


// Browser Object Model (BOM)

// => [window, navigater, history, location, document]

// [window] object : Global object in browser
// If you write a variable without let/const/var, it becomes property of window object

// Browser window width
// console.log(window.innerWidth); 

// Browser window hieght
// console.log(window.innerHeight);

// Opens alert box
// window.alert("Hello");    

// [navigater] Object
// Gives info about browser and system
// usefull for  detecting browser type , OS, online/offline status

// Browser details
// console.log(navigator.userAgent);

// Language
// console.log(navigator.language);

// online/offline
// returns true if connected to internet otherwise false
// console.log(navigator.onLine)

// [history] object
// deals with browser history (the back/forward list)
// we can move backward or forward in history

// go to previous page
// history.back(); 
// go to next page
// history.forward();


// [location] object

// Represents current URL of the page
// we can use it to reload or redirect

// current URL
// console.log(location.href)

// Hostname 
// console.log(location.hostname);

// redirect
// location.href = "https://google.co.in"

// Reload the current page
// location.reload();

// [document] object

// prints page title
// console.log(document.title)

// change background color
// document.style.backgroundColor = "green";

// change element inner text
// document.getElementById("box").innerText = "hehehe";


// ======================================================================================================================


// Working With Storage - [Local Storage, session storage, Cookies]

// 1. [Local Storage] =>

// Stores data in browser with no expiry (until you delete it manually)
// Data is saved even after browser is closed or reopened
// Size limit  5 - 10 MB (depends on browser)
// Accessible only on same domain

// setItem(key, value)
// localStorage.setItem("username","yashu");

// getItem(key)
// console.log(localStorage.getItem("yashu"));

// removeItem(key)
// localStorage.removeItem("yashu");

// clear() -> clears all the key value pairs
// localStorage.clear();



// 2. [Session Storage]

// Similar to local Storage but the data last only during that browser session
// Once the tab or browser is closed the data is lost
// Size limit 5-10 MB

// setItem(key, value)
// sessionStorage.setItem("token","324#@$@234$%()*&893");

// getItem(key)
// console.log(sessionStorage.getItem("token"));

// removeItem(key)
// sessionStorage.removeItem("token")

// clear() -> Removes all key value pairs from the session storage
// sessionStorage.clear();

// 3. [Cookie] 
// [Set-Cookie Header] In backend

// ======================================================================================================================

// [Fetch API]

// Fetch API is the modern way to make HTTP requests (like: GET,POST,PUT,DELETE) from the browser
// It replaces the older XMLHttpRequest (XHR)
// It is promise based which means it used .then() and async/await instead of callback hell

// Basic Syntax =>

    // fetch(url, options)
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));










