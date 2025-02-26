function add(a,b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

// module.exports = {              //ye overwrite krr deta hai 
//     add,
//     sub,
// }

exports.add1 = (a,b) => a+b; //overwrite nahi karta
exports.sub2 = (a,b) => a+b;
