import React from 'react';
const ErrorMensaje = ({mensaje}) => {
    return ( 
        <div className='alerta alerta--error' >
            <p>{mensaje}</p>
        </div>
     );
}
 
export default ErrorMensaje;