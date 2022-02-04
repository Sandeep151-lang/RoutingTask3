import React from 'react'
import { Link } from 'react-router-dom'

const AnimationUtilies = () => {
    return (
        <div>
            <div className="container-fluid">


                <h1 className="h3 mb-1 text-gray-800">Animation Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <Link
                    href="https://getbootstrap.com/docs">Bootstrap Documentation</Link> page. The custom utilities
                    below were created to extend this theme past the default utility classes built into Bootstrap's
                    framework.</p>


                <div className="row">


                    <div className="col-lg-6">

                        <div className="card position-relative">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Grow In Animation Utilty</h6>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <code>.animated--grow-in</code>
                                </div>
                                <div className="small mb-1">Navbar Dropdown Example:</div>
                                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                                    <Link className="navbar-brand" href="#">Navbar</Link>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Dropdown
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right animated--grow-in"
                                                aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" href="#">Action</Link>
                                                <Link className="dropdown-item" href="#">Another action</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link className="dropdown-item" href="#">Something else here</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="mb-0 small">Note: This utility animates the CSS transform property,
                                    meaning it will override any existing transforms on an element being animated!
                                    In this theme, the grow in animation is only being used on dropdowns within the
                                    navbar.</p>
                            </div>
                        </div>

                    </div>


                    <div className="col-lg-6">

                        <div className="card position-relative">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Fade In Animation Utilty</h6>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <code>.animated--fade-in</code>
                                </div>
                                <div className="small mb-1">Navbar Dropdown Example:</div>
                                <nav className="navbar navbar-expand navbar-light bg-light mb-4">
                                    <Link className="navbar-brand" href="#">Navbar</Link>
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item dropdown">
                                            <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown"
                                                role="button" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                Dropdown
                                            </Link>
                                            <div className="dropdown-menu dropdown-menu-right animated--fade-in"
                                                aria-labelledby="navbarDropdown">
                                                <Link className="dropdown-item" href="#">Action</Link>
                                                <Link className="dropdown-item" href="#">Another action</Link>
                                                <div className="dropdown-divider"></div>
                                                <Link className="dropdown-item" href="#">Something else here</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="small mb-1">Dropdown Button Example:</div>
                                <div className="dropdown mb-4">
                                    <button className="btn btn-primary dropdown-toggle" type="button"
                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <div className="dropdown-menu animated--fade-in"
                                        aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" href="#">Action</Link>
                                        <Link className="dropdown-item" href="#">Another action</Link>
                                        <Link className="dropdown-item" href="#">Something else here</Link>
                                    </div>
                                </div>
                                <p className="mb-0 small">Note: This utility animates the CSS opacity property, meaning
                                    it will override any existing opacity on an element being animated!</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AnimationUtilies
