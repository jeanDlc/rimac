import React from 'react';
const BarraProgreso = ( {progreso=0} ) => {
    return ( 
        <div className='progreso-barra' >
            <span style={{width:`${progreso}%`}} className='progreso'  > </span>
        </div>
     );
}
 
export default BarraProgreso;