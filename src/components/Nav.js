import React from 'react'
import { Router, Link } from '@reach/router'

export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="navbar-brand">Navbar</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item active">
                            <Link to="/">
                                <div className="nav-link">Home</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">
                                <div className="nav-link">About</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts">
                                <div className="nav-link">Contacts</div>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/posts">
                                <div className="nav-link">Posts</div>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}
