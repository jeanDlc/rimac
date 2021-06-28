import React, {useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router';
import usuarioContext from '../context/usuario/usuarioContext';
import useValidacion from '../hooks/useValidacion';

const Formulario = () => {
    const history=useHistory();
    const [conDni, setConDni]=useState(false);
    const [acepto, setAcepto]=useState(true);
    const estadoInicial={email:'', dni:'', placa:'', celular:''}
    const [formulario, setFormulario]=useState(estadoInicial);
    const {nuevoUsuario,mensaje}=useContext(usuarioContext);
    const {errorForm, validar, limpiarErrorForm}=useValidacion(formulario);
    const toogleInputDoc=e=>{
        setConDni(!conDni)
    }
    const handleChange=e=>{
        setFormulario({
            ...formulario,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        if(errorForm){
            console.log(errorForm)
        }
    },[errorForm]);

    const handleSubmit=async e=>{
        e.preventDefault();
        if(!acepto) return false;
        //validar el formulario y verificar validación
        const pasoValidacion= validar();
        if(!pasoValidacion) return false;
        limpiarErrorForm();
        let exitoso=false;
        //métodos para buscar cliente: con DNI|email
        if(!conDni){
            exitoso=await  nuevoUsuario(formulario.email, 'email', formulario.celular);
            if (exitoso) history.push('/arma-tu-plan');
        }
    }
    return ( 
        <form className='form form-contenedor' onSubmit={handleSubmit} >
            <h2 className='form__titulo' >Déjanos tus datos</h2>
            {mensaje && <p className='alerta alerta--error' >{mensaje} </p> }
            <div className='form__control' >
                <div style={{display:'grid', gridTemplateColumns:'1fr 3fr'}} >
                    <select onChange={toogleInputDoc} className='input select-input' name="" id="">
                        <option value="email">Email</option>
                        <option value="dni">DNI</option>
                    </select>
                    {conDni? 
                        <input type="text" 
                            
                            className='input input--doc' 
                            name='dni'
                            onChange={handleChange}
                            placeholder='Documento de identidad'
                            value={formulario.dni}
                        />
                        :
                        <input  type="email" 
                            className='input input--doc'
                            name='email'
                            value={formulario.email}
                            onChange={handleChange}
                            placeholder='Correo electrónico'  />
                    }
                    <span className='form__error' > {errorForm?.email} </span>
                    <span className='form__error' > {errorForm?.dni} </span>
                </div>
                
                
            </div>
            <div className='form__control' >
                <input type="text"  
                    placeholder='Celular' 
                    name='celular'
                    value={formulario.celular}
                    onChange={handleChange}
                    className='input' />
                <span className='form__error' > {errorForm?.celular} </span>
            </div>

            <div className='form__control' >
                <input type="text"  
                    placeholder='Placa' 
                    name='placa'
                    value={formulario.placa}
                    onChange={handleChange}
                    className='input' />
                <span className='form__error' > {errorForm?.placa} </span>
            </div>

            <div className='form__control form__control-checkbox' >
                <input checked={acepto} 
                    onChange={()=>setAcepto(!acepto)}
                    type="checkbox" 
                    id="terminos-condiciones" 
                    className='checkbox'  />
                <label htmlFor="terminos-condiciones" className='checkbox__label'  >
                    Acepto la 
                    <a href="#" className='checkbox__enlace' >política de protección de datos personales</a> y los <a href="#" className='checkbox__enlace'>términos y condiciones</a>
                </label>
            </div>
            {!acepto && <span className='form__error' >Por favor, acepta los términos</span>}
            <div className='form__control from__control-boton' >
                <button className='btn' type='submit' >Cotízalo</button>
            </div>
            
        </form>
     );
}
 
export default Formulario;