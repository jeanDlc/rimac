import React from 'react';
import { useMediaQuery } from 'react-responsive';
const Hero = ({children}) => {
    const pantallaDesktop = useMediaQuery({ query: '(min-width: 768px)' })
    return ( 
        <div className='hero' >
            <div className='hero__contenido' >
                {pantallaDesktop ? (
                    <div className='hero__contenedor-img' >
                        <img src="/icons/mujerDesktop.svg" alt="Mujer de seguro" />
                    </div>
                ): (
                    <div className='hero__contenedor-img--movil' >
                        <img src="/icons/mujerMovil.svg" alt="Mujer de seguro" />
                    </div>
                )}
                
                <section className='hero__textos' >
                    {children}
                </section>
            </div>
        </div>
        
     );
}
 
export default Hero;