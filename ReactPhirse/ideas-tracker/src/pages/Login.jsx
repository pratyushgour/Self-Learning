import React from 'react'
import { useState } from 'react'
import { useUser } from '../Context/User'

function Login() {
    const user = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 

    return (
        <section>
            <h1>Login or Register</h1>
            <form action="">
                
                <label htmlFor="email">Email</label>
                <input 
                id ='email'
                type="email" 
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input 
                id ='password'
                type="password" 
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

                <div>
                    <button
                    className='button'
                    type='button'
                    onClick={() => user.login(email, password)}
                    >
                        Login
                    </button>
                    <button
                    className='button'
                    type='button'
                    onClick={() => user.register(email, password)}
                    >
                        Register
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Login
