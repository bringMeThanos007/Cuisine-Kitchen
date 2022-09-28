import React from 'react'
import '../Component/Nav.css';
import {Link} from "react-router-dom";
// import Nav1 from './NavBars/Nav1'


export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-light ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
          {/* Header */}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Plan Your Meal</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* indexes */}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-2 pe-3">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link"  aria-current="page"  to='/'>Indian</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/Chinese">Chinese</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/French">French</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/American">American</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/Italian">Italian</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/Spanish">Spanish</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/African">African</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/Thai">Thai</Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/German">German</Link>
                </li>

              </ul>
            </div>
          </div>
          <a className="navbar-brand mx-6" href="www.google.com"><h2><strong>Cuisine Kitchen</strong></h2></a>
        </div>
      </nav>
    </>
  )
}
