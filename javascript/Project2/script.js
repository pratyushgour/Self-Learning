// const form = document.querySelector('form');

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     const height=parseInt(document.getElementById('height').value);
//     const weight=parseInt(document.getElementById('weight').value);
//     const result=document.getElementById('result');

//     if(height==='' || height<0 || isNaN(height)){
//         result.innerHTML=`Enter a valid number ${height}`
//     } 
//     else if (weight==='' || weight<0 || isNaN(weight)){
//         result.innerHTML="Enter a valid weight"
//     }  
//     else{
//         let a = height + weight;
//         result.innerHTML=`BMI : ${a}`
//     }
// 

const from = document.querySelector('form');

from.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);

    const result=document.getElementById('result');

    if(height==='' || height<0 || isNaN(height)){
        result.innerHTML = 'Enter valid height'
    } else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML = 'Enter valid weight'
    } else{
        let a = height + weight
        result.innerHTML = `BMI : ${a}`
    }
})