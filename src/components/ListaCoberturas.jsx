import React, {useContext,useEffect} from 'react';
import Cobertura from './Cobertura';
import Divisor from './Divisor';
import seguroContext from '../context/seguro/seguroContext';
const ListaCoberturas = () => {

    const {sumaAsegurada,eliminarCobertura}=useContext(seguroContext);
    useEffect(()=>{
        if(sumaAsegurada>16000){
            
            eliminarCobertura(20,2);
        }
    },[sumaAsegurada])
    return ( 
        <ul className='lista-coberturas' >
            <Cobertura nombre='Llanta robada' 
                descripcion='Suspendisse pretium placerat mi eget iaculis. Nunc non justo consectetur, fermentum sem eu, cursus odio. Nullam urna odio, pulvinar quis mattis vehicula, feugiat in odio. Nam in dui interdum, condimentum nisl vel, fermentum augue. In sit amet suscipit tortor. Praesent mi magna, feugiat convallis leo nec, lobortis accumsan libero.' 
                valor={15}
                icono='llantaRobada'
                idCobertura={1}
            />
            <Divisor/>
            {sumaAsegurada<=16000 && (
                <>
                    <Cobertura nombre='Choque y/o pasarle la luz roja' 
                        descripcion='Lam in dui interdum, condimentum nisl vel, fermentum augue. In sit amet suscipit tortor. Praesent mi magna, feugiat convallis leo nec, lobortis accumsan libero. Ut porta neque at lacus sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel sapien faucibus, interdum diam fermentum, fermentum justo.' 
                        valor={20}
                        icono='choque'
                        idCobertura={2}
                    />
                    <Divisor/>
                </>
            )}
            
            <Cobertura nombre='Atropello en la vía evitamiento' 
                descripcion='Praesent mi magna, feugiat convallis leo nec, lobortis accumsan libero. Ut porta neque at lacus sodales sollicitudin. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed vel sapien faucibus, interdum diam fermentum, fermentum justo.' 
                valor={50}
                icono='atropello'
                idCobertura={3}
            />
            <Divisor/>
        </ul>
     );
}
 
export default ListaCoberturas;