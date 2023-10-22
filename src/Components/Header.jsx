import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className=" my-2 bg-light rounded container d-flex justify-content-between align-items-center py-4">
            <h1>
              <Link to="/"><h1>STATUS</h1></Link>
            </h1>
            <div className="d-flex gap-2">
                <NavLink to="/"> Home</NavLink>
                <NavLink to="/product"> Products </NavLink>
            </div>
        </div>
    )
}

export default Header