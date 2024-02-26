import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow p-3 bg-primary-subtle fs-4">
                <div className="container-fluid text-center">
                    <a className="navbar-brand fs-4" href="/" >Sorting Visualizer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="ms-auto navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/' className='nav-link active'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/bubble' className='nav-link active'>Bubble</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/selection' className='nav-link active'>Selection</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/insertion' className='nav-link active'>Insertion</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar