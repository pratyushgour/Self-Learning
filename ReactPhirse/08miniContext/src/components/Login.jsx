import React, { useState, useContext } from 'react';
import UserContext from '../context/userContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    console.log("Login component rendered");

    const {setUser} = useContext(UserContext);

    // Add console logs to track component behavior
    
    console.log("Context:", setUser);

    const handleSubmit = (e) => {
        e.preventDefault(); // Make sure this is correct
        console.log("Submitting:", { username, password });
        setUser({ username, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
            />
            <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
 