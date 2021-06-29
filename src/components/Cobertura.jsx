import React, {useState, useContext} from 'react';
import seguroContext from '../context/seguro/seguroContext';
import Switch from './Switch';
import { useMediaQuery } from 'react-responsive';
const Cobertura = ({nombre='', descripcion='', valor=0, icono='', idCobertura}) => {
    //breakpoint para pantalla movil
    const pantallaMovil = useMediaQuery({ query: '(max-width: 768px)' });

    const {agregarCobertura,eliminarCobertura,coberturasID}=useContext(seguroContext);
    const [verDescripcion,setVerDescripcion]=useState(true);
    const [agregar,setAgregar]=useState(true);
    const toogleCobertura=()=>{
        setAgregar(!agregar);
    }
    const cambio=e=>{
        if(e.target.checked){
            agregarCobertura(valor, idCobertura);
        }else{
            eliminarCobertura(valor, idCobertura);
        }
    }
    return ( 
        <li className='cobertura cobertura--movil' >
            <img className='cobertura__icono'  src={`/icons/${icono}.svg`} alt="llanta robada" />
            <div className='cobertura__acciones' >

                <div className='cobertura__encabezado' >
                    <h3 className='cobertura__nombre' >{nombre} </h3>
                    {pantallaMovil && (
                        <Switch 
                            checked={coberturasID.includes(idCobertura)}
                            onChange={cambio}  />
                    )  }
                    
                </div>
                
                {!pantallaMovil && (
                    <div>
                        {!coberturasID.includes(idCobertura) ?
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
                            className='cobertura__btn-ver-mas cobertura__btn-ver-mas--activo'
                            onClick={()=>setVerDescripcion(!verDescripcion)} 
                        >  
                            {verDescripcion? 'Ver menos': 'Ver más'}
                        </button>
                    </>
                    :  
                    <button className='cobertura__btn-flecha' 
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