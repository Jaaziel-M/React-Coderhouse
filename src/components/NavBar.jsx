import React from 'react'
import CartWidget from './CartWidget';
const NavBar = () => {
    
    return (
        
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Air Soft Shop</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">AEG Primary</a></li>
                                <li><a className="dropdown-item" href="#">GBB Secondary</a></li>
                                <li><a className="dropdown-item" href="#">Equipment</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    <div className='d-flex'>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>

    );
}
export default NavBar