import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
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
      const handleLogin = e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password);
      }
    return (
        <section className='mt-20'>
            <div
                style={{ margin: '0 auto'}}
                className="w-96 flex flex-col justify-items-center drop-shadow-2xl">
                <h1 className='text-center font-bold text-4xl pt-10 pb-5'> Login </h1>
                <div className="content">
                    <form onSubmit={handleLogin} className='flex flex-col gap-5'>
                        <input ref={emailRef} type="text" name='email' placeholder="Enter your email" class="input input-bordered w-full max-96" />
                        <input ref={passwordRef} type="text" name='password' placeholder="Password" class="input input-bordered w-full max-96" />

                        <input className='input input-bordered w-full max-96"' type="submit" value="Login" />
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