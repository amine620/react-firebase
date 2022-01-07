import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                 localStorage.getItem('isAuth')==null ?

                (     <li className="nav-item">
                      <Link className="nav-link" to="/login">login</Link>
                      </li>
                )
                : 
                (
                  <>
                        <li className="nav-item">
                          <Link className="nav-link" to="/">blogs</Link>
                      </li>
                      <li className="nav-item">
                         <Link className="nav-link" to="/form">create</Link>
                     </li>
                     <li className="nav-item">
                         <Link className="nav-link" to="/user">profile</Link>
                     </li>
               </>
                )
              }
            </ul>
          </div>
        </div>
      </nav>
    )
}
