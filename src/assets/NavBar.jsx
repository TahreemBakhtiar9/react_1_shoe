import React from 'react'
import "./NavBar.css"


const NavBar = () => {
  return (
    <div>
        <nav>
            <div className='logo'>
                <img src="/images/Brand_logo.png" alt="logo" />
            </div>

            <ul>
              <li href="#"> Menu </li>
              <li href="#"> Location </li>
              <li href="#"> About </li>
              <li href="#"> Contact </li>
            </ul>

            <button> Login </button>
        </nav>
    </div>
  );
};

export default NavBar