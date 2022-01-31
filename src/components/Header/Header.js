import React from 'react';
import { NavLink  } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        color: 'red',
        fontWeight: 'bold'
    };

    return (
        <div>
            <NavLink  
                to="/home"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >Home</NavLink >
            <NavLink  
                to="/resturant"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >Resturant</NavLink >
            <NavLink  
                to="/about"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >About</NavLink >
        </div>
    );
};

export default Header;