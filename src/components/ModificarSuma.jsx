import React, {useContext} from 'react';
import seguroContext from '../context/seguro/seguroContext';
const ModificarSuma = () => {
    const {MIN, MAX,aumentarSuma,disminuirSuma,sumaAsegurada} =useContext(seguroContext);
    return ( 
        <section >
            <div className='suma-asegurada' >
                <div className='suma-asegurada__textos'>
                    <p className='suma-asegurada__titulo' >Indica la suma asegurada</p>
                    <div className='suma-asegurada__rangos'>
                        <p className='suma-asegurada__min' >MIN: $ {MIN} </p>
                        <p>MAX: $ {MAX} </p>
                    </div>
                </div>
                <div className='suma-asegurada__botones' >
                    <button className='suma-asegurada__boton'
                        onClick={disminuirSuma}
                    >-</button>
                    <p className='suma-asegurada__valor' >$ {sumaAsegurada} </p>
                    <button className='suma-asegurada__boton' 
                        onClick={aumentarSuma}
                    >+</button>
                </div>
            </div>
        </section>
     );
}
 
export default ModificarSuma;