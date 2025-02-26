const jwt = require("jsonwebtoken");
const secret = "Piyush$123@$"; // Secret should ideally be stored in an env variable

function setUser(user) {
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
            role: user.role,
        }, secret); // Set expiration time for security
}

function getUser(token) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return null; // Return null if the token is invalid
    }
}

// stateful authetication
// const sessionIdToUserMap = new Map();

// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }
// function getUser(id){
//     return sessionIdToUserMap.get(id);
// }


module.exports = {
    setUser,
    getUser,
};