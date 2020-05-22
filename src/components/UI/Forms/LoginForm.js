import React from 'react'

import './LoginForm.sass'

const LoginForm = (props) => {
    return (
        <div className="loginForm">
            <h2>Login</h2>
            <form onSubmit={props.func}>
                <input type="text" placeholder='Your login' required />
                <input type="password" placeholder='Your password' required />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default LoginForm