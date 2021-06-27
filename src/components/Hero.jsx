import React from 'react';
const Hero = ({children}) => {
    return ( 
        <div className='hero' >
            <div className='hero__contenido' >
                <div className='hero__contenedor-img' >
                    <img src="/mujerMovil.svg" alt="Mujer de seguro" />
                </div>
                
                <section className='hero__textos' >
                    {children}
                </section>
            </div>
        </div>
        
     );
}
 
export default Hero;