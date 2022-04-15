import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import '../Login/Login.css'
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';







const SignUp = () => {

    const naviget = useNavigate();
    const [user] = useAuthState(auth);

    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [comfirePassword, setComfirePassword] = useState('');
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);



    const handdelSignUp = (e) => {


        if (email === '' && password === '' && comfirePassword === '') {
            setError('please fill the box')
            return
        }

        if (password !== comfirePassword) {
            setError('passs match hoy nai')
            return
        }
        e.preventDefault()

        createUserWithEmailAndPassword(email, password)
        naviget('/cars')
    }




    return (
        <div className='mb-24'>
            <div className="from-container ">
                <h1>Sign Up</h1>
                <div className="hr"></div>
                <div className="input-container">
                    <label htmlFor="email">Email</label>
                    <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required />
                </div>
                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required />
                </div>
                <div className="input-container">
                    <label htmlFor="comfirmPassword">Comfirm Password</label>
                    <input onBlur={(e) => setComfirePassword(e.target.value)} type="password" name="comfirmPassword" id="comfirmPassword" required />
                </div>
                <p>{error}</p>
                <div className="btn-container">
                    <button onClick={handdelSignUp} className='w-1/2 bg-green-600 py-2 font-mono text-2xl rounded text-white'>Sign Up</button>
                </div>
                <p >Allrady have an account? <span onClick={() => { naviget('/login') }}>Login</span></p>
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

export default SignUp;