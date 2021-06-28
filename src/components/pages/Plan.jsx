import React, {useState} from 'react';
import Layout from '../layout/Layout';
import BtnVolver from '../BtnVolver';
import Card from '../Card';
import { useMediaQuery } from 'react-responsive'
import BarraProgreso from '../BarraProgreso';
import ListaCoberturas from '../ListaCoberturas';
import Monto from '../Monto';
import Divisor from '../Divisor';
const Plan = () => {
    const [monto, setMonto]=useState(20)
    const [sumaAsegurada, setSumaAsegurada]=useState(14300);
  
    const pantallaDesktop = useMediaQuery({ query: '(min-width: 768px)' })
      
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
                        <h2 className='encabezado encabezado--capitalize' >¡hola, <span className='encabezado__enfasis' >Juan!</span> </h2>
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
                    <section >
                        <div className='suma-asegurada' >
                            <div className='suma-asegurada__textos'>
                                <p className='suma-asegurada__titulo' >Indica la suma asegurada</p>
                                <div className='suma-asegurada__rangos'>
                                    <p className='suma-asegurada__min' >Min: $12 500</p>
                                    <p>Max: $16 500</p>
                                </div>
                            </div>
                            <div className='suma-asegurada__botones' >
                                <button className='suma-asegurada__boton' >-</button>
                                <p className='suma-asegurada__valor' >$ 14300</p>
                                <button className='suma-asegurada__boton' >+</button>
                            </div>
                        </div>
                    </section>
                    <Divisor/>
                    <ListaCoberturas/>
                </main>
                <Monto/>
            </div>
        </Layout>
     );
}
 
export default Plan;