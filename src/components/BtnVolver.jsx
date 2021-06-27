import React from 'react';
import { useHistory } from 'react-router';
const BtnVolver = () => {
    const history=useHistory();
    const regresar=()=>{
        history.goBack();
    }
    return ( 
        <button onClick={regresar}  className='btn-volver'>Volver</button>
     );
}
 
export default BtnVolver;