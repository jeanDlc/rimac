import React from 'react';
import {Link} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
const Navbar = () => {
    const pantallaMovil = useMediaQuery({ query: '(max-width: 768px)' });
    return ( 
        <nav className='navbar container' >
            <Link to='/'  >
                <h1>
                    <img  className='navbar__imagen-logo' src="/icons/logoRimac.svg" alt="Rimac" />
                </h1>
            </Link>
            <div className="navbar__opciones">
                <a href="#" className='navbar__consulta'  >
                    
                    ¿Tienes alguna duda?</a>
                <a href="#" className='navbar__numero' >
                    <img className='navbar__img-phone' src="/icons/phoneMorado.svg" alt="phone" />
                    <p>
                        {pantallaMovil? 'Llámanos' : '(01) 411 6001'}
                    </p>
                </a>
            </div>
            
        </nav> 
    );
}
 
export default Navbar;