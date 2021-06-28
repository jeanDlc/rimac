import React, {useState, useContext} from 'react';
import seguroContext from '../context/seguro/seguroContext';
import Switch from './Switch';
import { useMediaQuery } from 'react-responsive';
const Cobertura = ({nombre='', descripcion='', valor=0, icono='', idCobertura}) => {
    const pantallaMovil = useMediaQuery({ query: '(max-width: 768px)' });
    const {agregarCobertura,eliminarCobertura}=useContext(seguroContext);
    const [verDescripcion,setVerDescripcion]=useState(true);
    const [agregar,setAgregar]=useState(true);
    const toogleCobertura=()=>{
        setAgregar(!agregar);
    }
    return ( 
        <li className='cobertura cobertura--movil' >
            <img className='cobertura__icono'  src={`/icons/${icono}.svg`} alt="llanta robada" />
            <div className='cobertura__acciones' >

                <div className='cobertura__encabezado' >
                    <h3 className='cobertura__nombre' >{nombre} </h3>
                    {pantallaMovil && <Switch/>  }
                    
                </div>
                
                {!pantallaMovil && (
                    <div>
                        {agregar?
                            <button className='cobertura__boton'
                                onClick={()=>{
                                    toogleCobertura();
                                    agregarCobertura(valor, idCobertura);
                                }}
                            >
                                <img src="/icons/agregar.svg" alt="agregar" />
                                <span className='cobertura__btnTexto' > Agregar </span>
                            </button>
                        :
                            <button className='cobertura__boton'
                                onClick={()=>{
                                    toogleCobertura();
                                    eliminarCobertura(valor, idCobertura);
                                }}
                            >
                                <img src="/icons/quitar.svg" alt="quitar" />
                                <span className='cobertura__btnTexto' > Quitar </span>
                            </button>
                        }
                    </div>
                )}
                {verDescripcion && (
                    <p className='cobertura__descripcion' >{descripcion} </p>
                )}
                
                {pantallaMovil? 
                    <>
                        
                        <button 
                            onClick={()=>setVerDescripcion(!verDescripcion)} 
                        >Ver más</button>
                    </>
                    :  
                    <button className='cobertura__btn-ver-mas' 
                        onClick={()=>setVerDescripcion(!verDescripcion)}
                    >
                        {verDescripcion? 
                            <img src="/icons/flechaArriba.svg" alt="ver" />
                            :
                            <img src="/icons/flechaAbajo.svg" alt="no ver" />
                        }
                    </button>
                }
                
            </div>
        </li>
    );
}
 
export default Cobertura;