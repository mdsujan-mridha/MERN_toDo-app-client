import React from 'react';

const Header = () => {
    return (
        <section className='mt-20'>
            <div>
                <div
                    style={{ margin: '0 auto',padding:'20px' }}
                    className="w-96 flex flex-col justify-items-center  shadow-white shadow-sm ">
                    <h1 className='text-center font-bold text-3xl pt-10 pb-5 text-accent'> Welcome to to-do apps </h1>
                    <div>
                      <p className='text-center text-xl text-white font-bold'> if you have an account please login or if you have not any account please create an account </p>
                      <p className='text left text-2xl font-bold text-secondary'> After Login your account you can add to do items on apps </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Header;