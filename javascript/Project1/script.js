// const buttons = document.getElementsByClassName('button')
// console.log(buttons)

// const qbuttons = document.querySelectorAll('.button')
// console.log(qbuttons)

// const ab = Array.from(buttons);
// console.log(ab)

// ab.forEach(function(n){
//     n.addEventListener('click' ,function(e){
//         console.log(n)
//         console.log(e.target);
//         document.body.style.backgroundColor = `${n.getAttribute("id")}`;
//         n.style.backgroundColor = "red";
//         setTimeout(function(){
//             n.style.backgroundColor = `${n.getAttribute("id")}`;
//         }, 350)
//     })
// })















// const grey = document.getElementById('grey');
// console.log(grey);

// grey.addEventListener('click' ,function(){
//     document.body.style.backgroundColor = "grey";
//     grey.style.backgroundColor = "red";
// })





const buttons = document.getElementsByClassName('button')

console.log(buttons)

const button = Array.from(buttons);

console.log(button)

button.forEach(function(n){
    n.addEventListener('click', function(){
        document.body.style.backgroundColor = `${n.getAttribute("id")}`;
        n.style.backgroundColor = 'red'
        setTimeout(function(){
            n.style.backgroundColor = `${n.getAttribute("id")}`;
        }, 300)
    })
})