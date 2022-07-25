import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
      const[user,loading] = useAuthState(auth);
      const userName = user?.displayName;
      const userEmail = user?.email;

    return (
        <div className="drawer drawer-mobile px-12 mt-10">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col text-center text-2xl font-semibold">
            <Outlet></Outlet>
          

        </div>
        <div className="drawer-side mr-5">
            <label for="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 overflow-y-auto w-80 bg-slate-200">
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://api.lorem.space/image/face?hash=3174" />
                    </div>
                </div>
                <li className='text-center text-xl font-bold uppercase'> <h3>{userName}</h3> </li>
                <li className='text-lg font-medium text-primary'> <h3> {userEmail} </h3></li>
                <li className='text-lg font-medium text-primary'> <h3> update Profile </h3></li>
                 
            </ul>

        </div>
    </div>
    );
};

export default DashBoard;