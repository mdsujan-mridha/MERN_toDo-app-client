import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Registration = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleRegSubmit = e => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        createUserWithEmailAndPassword(email, password);
        console.log(name, password, email);
    }

    return (
        <section>
            <div
                style={{ margin: '0 auto' }}
                className="w-96 flex flex-col justify-items-center drop-shadow-2xl">
                <h1 className='text-center font-bold text-4xl pt-10 pb-5'> Registration</h1>
                <div className="content">
                    <form onSubmit={handleRegSubmit} className='flex flex-col gap-5'>
                        <input ref={nameRef} type="text" name='name' placeholder="Enter your name" class="input input-bordered w-full max-96" />
                        <input ref={emailRef} type="text" name='email' placeholder="Enter your email" class="input input-bordered w-full max-96" />
                        <input ref={passwordRef} type="text" name='password' placeholder="Password" class="input input-bordered w-full max-96" />

                        <input className='input input-bordered w-full max-96"' type="submit" value="Login" />
                    </form>
                    <div>

                        <p className='mt-5'> <Link to='/login'> Already have an account? </Link> </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Registration;