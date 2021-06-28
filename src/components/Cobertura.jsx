import React, {useState} from 'react';
const Cobertura = ({nombre='', descripcion='', valor=0, icono=''}) => {
    const [verDescripcion,setVerDescripcion]=useState(true);
    const [agregar,setAgregar]=useState(false);
    const toogleCobertura=()=>{
        setAgregar(!agregar);
    }
    return ( 
        <li className='cobertura' >
            <img className='cobertura__icono'  src={`/icons/${icono}.svg`} alt="llanta robada" />
            <div className='cobertura__acciones' >
                <h3 className='cobertura__nombre' >{nombre} </h3>
                <button className='cobertura__boton' onClick={toogleCobertura} >
                    {agregar?(
                        <img src="/icons/agregar.svg" alt="agregar" />
                    ):(
                        <img src="/icons/quitar.svg" alt="quitar" />
                    )}
                    <span className='cobertura__btnTexto' > {agregar? 'Agregar' : 'Quitar'} </span>
                </button>
                {verDescripcion && (
                    <p className='cobertura__descripcion' >{descripcion} </p>
                )}
                <button onClick={()=>setVerDescripcion(!verDescripcion)} 
                    
                >Ver más</button>
            </div>
        </li>
    );
}
 
export default Cobertura;