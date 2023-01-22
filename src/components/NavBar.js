import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { useRef } from 'react';
import './NavBar.css';

function NavBar(props) {

    const navRef=useRef();
    const showNavBar=()=>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <h1>MCP Accounting</h1>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>About</a>
                <a href='/#'>Services</a>
                <a href='/#'>Contact US</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default NavBar;