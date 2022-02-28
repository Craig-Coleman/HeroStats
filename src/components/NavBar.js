import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {
    return (
        <div id="navbar">
            <NavLink
                className="navlink" 
                to="/charsheet"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Character Stats
            </NavLink>
            <NavLink
                className="navlink" 
                to="/info"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Backstory
            </NavLink>
            <NavLink
                className="navlink"
                to="/inventory"
                exact
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Inventory
            </NavLink>
        </div>
    );
};

export default NavBar;