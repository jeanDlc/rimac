import React from 'react';
const Formulario = () => {
    return ( 
        <form className='form form-contenedor' >
            <h2 className='form__titulo' >Déjanos tus datos</h2>
            <div className='form__control' >
                <input type="text"  placeholder='Nro. doc' className='input' />
            </div>
            <div className='form__control' >
                <input type="text"  placeholder='Celular' className='input' />
            </div>
            <div className='form__control' >
                <input type="text"  placeholder='Placa' className='input' />
            </div>
            <div className='form__control form__control-checkbox' >
                <input type="checkbox" id="terminos-condiciones" className='checkbox'  />
                <label htmlFor="terminos-condiciones" className='checkbox__label'  >
                    Acepto la 
                    <a href="#" className='checkbox__enlace' >política de protección de datos personales</a> y los <a href="#" className='checkbox__enlace'>términos y condiciones</a>
                </label>
            </div>
            <div className='form__control from__control-boton' >
                <button className='btn' type='submit' >Cotízalo</button>
            </div>
            
        </form>
     );
}
 
export default Formulario;