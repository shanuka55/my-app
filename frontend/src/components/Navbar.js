import React from 'react'

function Navbar() {
  return (
    <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color: "Orange", fontSize: "45px", marginLeft:"10px"}}>F O O D I E</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" style={{marginLeft: "700px", fontSize:"25px", zIndex:"2"}}>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                    </li>
                    
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Log In</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar