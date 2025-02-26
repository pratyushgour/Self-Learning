import React from "react";
import { useState } from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }

  return (
    <>
      <h1>Login</h1>
      <input 
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="username" 
      type="text" 
      />
      <input
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="password" 
      type="password"  
      />
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </>
  );
}

export default Login;
