import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import './Login.css'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Login = () => {


    const naviget = useNavigate();
    const [error, setError] = useState('')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);


    const handdelLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)



    }






    return (
        <div className='mb-24'>
            <div className="from-container ">
                <h1>log In</h1>
                <div className="hr"></div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required />
                </div>
                <p>{error}</p>
                <div className="btn-container">
                    <button onClick={handdelLogin} className='w-1/2 bg-green-600 py-2 font-mono text-2xl rounded text-white'>Log In</button>
                </div>
                <p >Create New Account? <span onClick={() => { naviget('/signUp') }}>Sign Up</span></p>
                <div className="hr-contaier">
                    <div className="hr-or"></div>
                    <p>or</p>
                    <div className="hr-or"></div>
                </div>
                <div className="googleSign-container">
                    <img src="https://pngimg.com/uploads/google/google_PNG19635.png" alt="" />
                    <h3>Continue With Google</h3>
                </div>
            </div>
        </div>
    );
};

export default Login;