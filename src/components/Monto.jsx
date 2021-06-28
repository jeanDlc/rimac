import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import Divisor from './Divisor';
import { useMediaQuery } from 'react-responsive';
import seguroContext from '../context/seguro/seguroContext';
const Monto = () => {
    const {monto}=useContext(seguroContext);
    const pantallaGrande = useMediaQuery({
        query: '(min-device-width: 1224px)'
      })

    return ( 
        <div className='monto monto--sidebar' >
            <div>
                {pantallaGrande && <h2 className='monto__titulo' >Monto</h2>}
                <p className='monto__valor' >$ {monto} </p>
                <p className='monto__periodo' >Mensuales</p>
                {pantallaGrande && (
                    <>
                        <Divisor/>
                        <div className='monto__descripcion' >
                            <h3 className='monto__subtitulo' >El precio incluye</h3>
                            <ul className='monto__beneficios' >
                                <li className='monto__beneficios__lista' >Llanta de repuesto</li>
                                <li className='monto__beneficios__lista' >Análisis de motor</li>
                                <li className='monto__beneficios__lista' >Aros gratis</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
            <Link to='/gracias' >
                <a href="#" className='btn btn--full'>Lo quiero </a>
            </Link>
        </div>
     );
}
 
export default Monto;