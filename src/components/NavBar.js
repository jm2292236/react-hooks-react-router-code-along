import React from 'react';
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "70px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                style={linkStyles}
                // activeStyle={{background: "darkblue"}}
            >
                Home
            </NavLink>

            <NavLink
                to="/login"
                style={linkStyles}
                // activeStyle={{background: "darkblue"}}
            >
                Login
            </NavLink>

            <NavLink
                to="/signup"
                style={linkStyles}
                // activeStyle={{background: "darkblue"}}
            >
                Sign Up
            </NavLink>

            <NavLink
                to="/messages"
                style={linkStyles}
                // activeStyle={{background: "darkblue"}}
            >
                Messages
            </NavLink>

            <NavLink
                to="/about"
                style={linkStyles}
                // activeStyle={{background: "darkblue"}}
            >
                About
            </NavLink>
        </div>
    )
}

export default NavBar;
