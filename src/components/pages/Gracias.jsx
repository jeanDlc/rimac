import React, {useContext} from 'react';
import Layout from '../layout/Layout';
import seguroContext from '../../context/seguro/seguroContext';
import usuarioContext from '../../context/usuario/usuarioContext';
import { useMediaQuery } from 'react-responsive'
const Gracias = () => {
    const {monto}=useContext(seguroContext);
    const {usuario}=useContext(usuarioContext);
    const pantallaDesktop = useMediaQuery({ query: '(min-width: 768px)' })
    return ( 
        <Layout>
            <div className='gracias__contenedor' >
                <div className='gracias__hero' >
                    {pantallaDesktop? (
                        <img  className='gracias__imagen'   src="/icons/graciasHero.svg" alt="gracias" />
                    ): (
                        <img   className='gracias__imagen'  src="/icons/bgGraciasMovil.svg" alt="gracias" />
                    )}
                </div>
                <main className='gracias__textos' >
                    <h2 className='encabezado encabezado__enfasis' >
                        ¡Te damos la bienvenida!
                    </h2>
                    <p className='encabezado' >Cuenta con nosotros para proteger tu vehículo</p>
                    <h3 className='encabezado-secundario' >Enviaremos la confirmación de compra de tu plan vehicular tracking a tu correo</h3>
                    <p className='gracias__correo' > {usuario?.email} </p>
                    <button className='btn' > Cómo usar mi seguro </button>
                </main>
            </div>
            
        </Layout>
     );
}
 
export default Gracias;