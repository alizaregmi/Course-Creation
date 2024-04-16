import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="number" placeholder='Phone Number' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />

                </div>
                <button >Sign Up</button>
                <p className="loginsignup-login">Already have an account? <Link to={'/login'} className='link'><span>Login Here</span></Link></p>

            </div>
        </div>
    )
}
