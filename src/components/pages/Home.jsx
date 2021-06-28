import { useEffect, useContext } from 'react';
import seguroContext from '../../context/seguro/seguroContext';
import Layout from '../layout/Layout';
import Hero from '../Hero';
import Formulario from '../Formulario';
function Home() {
  const {reiniciarMonto}=useContext(seguroContext);
  useEffect(()=>{
    reiniciarMonto();
  },[]);
  return (
    <Layout>
      <div className='grid' >
        <Hero>
          <p className='hero__aviso' >¡Nuevo!</p>
          <h1 className='hero__titulo'>Seguro <span className='hero__titulo-enfasis' >vehicular tracking</span> </h1>
          <p className='hero__texto-secundario' >Cuéntanos donde le harás seguimiento a tu seguro</p>
        </Hero>
          <main >
              <Formulario/>
          </main>
      </div>
      
       
    </Layout>
  );
}

export default Home;
