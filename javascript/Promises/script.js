//functions

// function test(a, b, c){
//     console.log(a+b);
// }

// test(2,3,4);

//function expressions


//IIFE(Immediately Invoked Function Expression)

// (function(){
//     console.log("pratyush")
// })();

// let text=""
// const arr=[10, 20, "string1"];
// for(let i=0; i<arr.length; i++){
//     text=text+arr[i];
// }
// console.log(text)

// const arr1=[
//     {
//         language:"pyhton",
//         name:".py"
//     },
//     {
//         language:"javascript",
//         name:".js"
//     },
//     {
//         language:"C++",
//         name:".cpp"
//     },
// ]

// arr1.forEach((item)=>{
//     console.log(item);
//     console.log(item.language)
// })

// let div=document.createElement('gour');
// div.className="alert"
// div.innerHTML= "<span>hello</span>"
// document.body.append(div)
// console.log(div)

// let a=document.getElementsByClassName("alert")[0]
// a.insertAdjacentHTML('beforebegin', "Hello")

// const num = [1, 2, 3 ,4 ,5 ,6, 7 ,8 ,9, 10]

// const newNum = num
//                 .map((n)=> n*10)
//                 .map((n)=> n+2)
//                 .filter((n)=> n>30)

// console.log(newNum)

// const d = document.createElement('h1')
// console.log(d);


// const addLang = function(langName){
//     const li = document.createElement('li');
//     li.innerHTML = `${langName}`;
//     document.querySelectorAll('ul')[1].append(li)
// }

// addLang("Java")

// const addAno = function(langName){
//     const li=document.createElement('li');
//     li.appendChild(document.createTextNode(langName))
//     document.querySelectorAll('ul')[1].appendChild(li)
// }

// addAno("GoLang")

//edit

// const secLang = document.querySelectorAll('li')[3]
// const newli = document.createElement('li')
// newli.textContent = "Mojo"
// secLang.replaceWith(newli)

//edit 

// const firstLang = document.querySelectorAll('li')[2]
// firstLang.outerHTML = '<li>TypeScript</li>'

//remove

// const lastLang = document.querySelectorAll('li')[2]
// lastLang.remove()

// console.log(x)
// x=5
// var x
// console.log(x)

// const sym1 = Symbol();
// const sym2 = Symbol("foo");
// const sym3 = Symbol("foo");

// console.log(sym2)

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.