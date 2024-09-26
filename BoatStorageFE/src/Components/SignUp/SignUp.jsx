import React, {useEffect} from 'react'
import './SignUp.css'

const SignUp = () => {

    return (
        <div className="signup section container">
            <h1>Sign Up</h1>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default SignUp