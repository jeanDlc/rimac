import {useState} from 'react';
const useValidacion = ({email, dni ,placa, celular} ) => {
    const [errorForm, setErrorForm]=useState(null);
    const validar=()=>{
        let err= {};
        //validar cada uno de los campos
        if(email.trim==='' || email.length===0){
            err.email='Email no válido'
        }
        if(placa.trim==='' || placa.length===0){
            err.placa='Placa no válida';
        }
        if(celular.trim==='' || celular.length===0){
            err.celular='Celular no válido'
        }
        if(dni.trim==='' || dni.length===0){
            err.dni='DNI no válido'
        }
        if(err.dni && err.email){
            //se necesita al menos dni o email para consultar api
            setErrorForm(err);
        }else{
            delete err.email;
            delete err.dni;
            if(Object.keys(err).length>0){
                setErrorForm(err);
            }
        }
        return Object.keys(err).length===0;
    }
    const limpiarErrorForm=()=>{
        setErrorForm(null);
    }
    return {errorForm ,validar , limpiarErrorForm}
}
 
export default useValidacion;