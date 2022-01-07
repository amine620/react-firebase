import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../../firebase/config';

export default function Logout() {
  
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          window.location= "/login";
        });
      };

    return (
        <div>
            <button onClick={signUserOut} className='btn btn-danger'>logout</button>
        </div>
    )
}
