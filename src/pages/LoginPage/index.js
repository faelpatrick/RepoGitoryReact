import React, { useState } from "react";

import "./style.css";

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        console.log('email: ', email)
        console.log('password', password)
        console.log('login')
    }
    return (
        <div className="login-form" id="login">
            <h1 className="title">LOGIN</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div className="field">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>

                <div className="actions">
                    <button onClick={handleLogin()}>Entrar</button>
                </div>
            </div>
        </div >
    )
}

export default LoginPage;