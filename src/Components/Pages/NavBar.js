import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg bg-light py-3 shadow-sm  abc">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-3" to="/">E-Buy</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active fw-bold " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item " >
                                <NavLink className="nav-link fw-bold" to="Products">Products</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link fw-bold" to="About">Contact</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink className="btn btn-light mx-2" to="Login">
                                <i class="fa-solid fa-right-to-bracket"></i> Login</NavLink>

                            {/* <NavLink className="btn btn-light mx-2" to="Register">
                                <i class="fa-solid fa-user-plus"></i> Register</NavLink> */}

                            <NavLink className="btn btn-light mx-2" to="AddCart">
                                <i class="fa-solid fa-cart-shopping"></i> Cart (0) </NavLink>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}
