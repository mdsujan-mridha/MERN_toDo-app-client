import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

  
    const handleLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    if(user){
        navigate ('/todo');
    }
    let loadingElement;
    if(loading){
        loadingElement =
        <button className="btn btn-square loading"></button>
    }
    let errorElement ;
    if (error) {
        errorElement=
         <div className="alert alert-error shadow-lg">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.message}</span>
            </div>
        </div>
    }
    return (
        <section className='mt-20'>
            <div
                style={{ margin: '0 auto' }}
                className="w-96 flex flex-col justify-items-center drop-shadow-2xl">
                <h1 className='text-center font-bold text-4xl pt-10 pb-5'> Login </h1>
                <div className="content">
                    <form onSubmit={handleLogin} className='flex flex-col gap-5'>
                        <input ref={emailRef} type="text" name='email' placeholder="Enter your email" class="input input-bordered w-full max-96" />
                        <input ref={passwordRef} type="text" name='password' placeholder="Password" class="input input-bordered w-full max-96" />

                        <input className='input input-bordered w-full max-96"' type="submit" value="Login" />
                        <p className='text-center'>{loadingElement}</p>
                        <p className='text-center'>{errorElement}</p>
                    </form>
                    <div className='flex gap-5 justify-between'>
                        <p className='mt-5'> <Link to='#'> Forgot password </Link> </p>
                        <p className='mt-5'> <Link to='/registration'> Have not any account? </Link> </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Login;