import React from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';


// props kindda link the name as the other name
// IMPORTANT -- "You must gave the ending tag "/" at end and the herf = "/"  and class will be = className"
export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg    bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" herf="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" >HOME</span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} href="/">Home</a>
              </li>
              <li className="nav-item" >
                <a className="nav-link" href="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.about}</a>
              </li>
            </ul>



            {/* <div className={`form-check form-switch text-${props.mode2 === 'light' ? '#E94F37' : 'light'} mx-3`}>
              <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode2} mode</label>
            </div>






            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-4`}>
              <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
            </div> */}

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode} mode</label>
            </div>

            <form className="d-flex" role="search">
              <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>


      </nav >
    </div >
  )
}

// this function is used to gave sepcificlly datatype 
// if you gave other datatype then it will lead to an error

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}

// =======  defaultProps =========//
// this function is used to gave default value to an props..
Navbar.defaultProps = {
  title: 'Select title',
  about: 'Select about'
}
