import { signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth, provider } from '../../firebase/config';

const Login = () => {

    const signInWithGoogle = () => {

            signInWithPopup(auth, provider).then(() => {
                localStorage.setItem('isAuth',true)
                window.location='/'
            ;
            });
      };

      if(localStorage.getItem('isAuth')=='true')
      {
        window.location='/'
        return ''
      }
    return (
        <div className='container mt-5 text-center'>
         
            <button onClick={signInWithGoogle} className="btn btn-primary">Sign In With Google</button>
        </div>
    );
}

export default Login;
