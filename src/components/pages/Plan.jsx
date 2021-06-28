import React, { useContext, useEffect} from 'react';
import Layout from '../layout/Layout';
import BtnVolver from '../BtnVolver';
import Card from '../Card';
import { useMediaQuery } from 'react-responsive'
import BarraProgreso from '../BarraProgreso';
import ListaCoberturas from '../ListaCoberturas';
import Monto from '../Monto';
import Divisor from '../Divisor';
import usuarioContext from '../../context/usuario/usuarioContext';
import { useHistory } from 'react-router';
import ModificarSuma from '../ModificarSuma';
const Plan = () => {
    const history=useHistory();
    const {usuario, hayUsuario}=useContext(usuarioContext);
    const pantallaDesktop = useMediaQuery({ query: '(min-width: 768px)' })

     useEffect(()=>{
        if(!hayUsuario){
        history.push('/');
        }
     },[hayUsuario]) 

    return ( 
        <Layout>
            <div className='plan' >
                {pantallaDesktop? (
                    <aside className='sidebar' >
                        <ol className='sidebar-lista' >
                            <li className='sidebar-lista__item' >Datos</li>
                            <li className='sidebar-lista__item sidebar-lista__item--activo'>Arma tu plan</li>
                        </ol>
                    </aside>
                ):(
                    <div className='plan__progreso' >
                        <p className='progreso__titulo' >Paso 2 de 2</p>
                        <BarraProgreso progreso={100} />
                    </div>
                )  }
                
                <main className='plan__main container' >
                    <BtnVolver/>
                    <div className="main__encabezados">
                        <h2 className='encabezado encabezado--capitalize' >¡hola, <span className='encabezado__enfasis' >{usuario.nombre} !</span> </h2>
                        <h3 className='encabezado-secundario' >Conoce las coberturas de tu plan</h3>
                    </div>
                    <Card>
                        <div className='card__textos' >
                            <p className='card__subtitulo' >Placa c21-114</p>
                            <h3 className='card__titulo' >
                                Wolksvagen 2019 golf
                            </h3>
                        </div>
                        <img className='card__imagen'  src="/armaPlanAvatar.svg" alt="Arma tu plan" draggable='false' />
                    </Card>
                    <ModificarSuma/>
                    <Divisor/>
                    <ListaCoberturas/>
                </main>
                <Monto/>
            </div>
        </Layout>
     );
}
 
export default Plan;