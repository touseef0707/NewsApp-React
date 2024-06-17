import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/NewsWeb">NewsWeb</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link" aria-current="page" to="/NewsWeb">Home</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Business">Business</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/Entertainment">Entertainment</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                  </ul>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onChange={props.toggleMode} role="switch" id="mode"/>
                    <label className="form-check-label text-light"  htmlFor="mode">Enable {props.mode==="dark"?"light":"dark"} mode</label>
                  </div>
                </div>
            </div>
        </nav>
      </div>
    )
}

export default Navbar
