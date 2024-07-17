import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/TextForm">TextForm</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">Help</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/reviews">Reviews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tabs">Tabs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/slider">Slider</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Lorem">Lorem</Link>
              </li>    
              <li className="nav-item">
                <Link className="nav-link" to="/color">Color</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/GroceryBud">GroceryBud</Link>
              </li>     
              <li className="nav-item">
                <Link className="nav-link" to='/Strapi'>Strapi</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to='/Cart'>Cart</Link>
              </li>     
              <li className="nav-item">
                <Link className="nav-link" to='/AxiosTutorial'>AxiosTutorial</Link>
              </li>  
              <li className="nav-item">
                <Link className="nav-link" to='/ImagesSearch'>ImagesSearch</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to='/Contentful'>Contentful</Link>
              </li>   
            </ul>

            <div className='d-flex'>
              <div className='bg-primary rounded mx-2' onClick={() => { props.toggleMode('primary') }} style={{ height: '15px', width: '15px', cursor: 'pointer' }}></div>
              <div className='bg-danger rounded mx-2' onClick={() => { props.toggleMode('danger') }} style={{ height: '15px', width: '15px', cursor: 'pointer' }}></div>
              <div className='bg-success rounded mx-2' onClick={() => { props.toggleMode('success') }} style={{ height: '15px', width: '15px', cursor: 'pointer' }}></div>
              <div className='bg-warning rounded mx-2' onClick={() => { props.toggleMode('warning') }} style={{ height: '15px', width: '15px', cursor: 'pointer' }}></div>
              <div className='bg-info rounded mx-2' onClick={() => { props.toggleMode('info') }} style={{ height: '15px', width: '15px', cursor: 'pointer' }}></div>
            </div>

            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={() => { props.toggleMode('null') }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Navbar
