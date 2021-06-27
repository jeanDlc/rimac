import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className='navbar container' >
            <Link to='/'  >
                <a href="#">
                    <h1>
                        <img  className='navbar__imagen-logo' src="/logoRimac.svg" alt="Rimac" />
                    </h1>
                </a>
            </Link>
            <div className="navbar__opciones">
                <a href="#" className='navbar__consulta'  >¿Tienes alguna duda?</a>
                <a href="#" className='navbar__numero' >(01) 411 6001</a>
            </div>
            
        </nav> 
    );
}
 
export default Navbar;