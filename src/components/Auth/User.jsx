import React from 'react';
import { auth } from '../../firebase/config';

const User = () => {
    return (
        <div>
            <div className="card" style="width: 18rem;">
                {/* <img src={auth.currentUser.photoURL} className="card-img-top" alt="..."/> */}
                    <div className="card-body">
                        {/* <h5 className="card-title">{auth.currentUser.displayName}</h5> */}
                    </div>
            </div>
        </div>
    );
}

export default User;
