import React from "react"
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            <b>Note App</b>
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link"
                         to="/"
                         exact
                >
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link"
                         to="/about"
                >
                    About app
                </NavLink>
            </li>
        </ul>
    </nav>
}