import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'

export default function Login() {
    return (
        <div>
            <div className='loginsignup'>
                <div className="loginsignup-container">
                    <h1>Login</h1>
                    <div className="loginsignup-fields">
                        <input type="email" placeholder='Email Address' />
                        <input type="password" placeholder='Password' />
                    </div>
                    <button >Login</button>
                    <p className="loginsignup-login">Create an account? <Link to={'/signup'} className='link'><span>Signup Here</span></Link></p>

                </div>
            </div>
        </div>
    )
}
