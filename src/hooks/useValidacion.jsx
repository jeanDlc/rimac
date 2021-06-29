import {useState} from 'react';
const useValidacion = ({email, dni ,placa, celular} ) => {
    const [errorForm, setErrorForm]=useState(null);
    const validar=()=>{
        let err= {};
        //validar cada uno de los campos
        if(!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
            err.email='Email no válido'
        }
        if(!placa || !/^[A-z]{3}-[1-9]{3}|^[A-Z]{1}[1-9]{1}[A-Z]{1}-[1-9]{3}|^[1-9]{4}-[A-Z,1-9]{2}|^[A-z]{2}-[1-9]{4}$/.test(placa) ){
            //ejm de placa: ABC-458
            err.placa='Placa no válida';
        }
        if(!celular || !/(9)[ -]*([0-9][ -]*){8}/.test(celular) || celular.length>9){
            err.celular='Celular no válido'
        }
        if(!dni || !/([0-9][ -]*){8}/.test(dni) || dni.length>8 ){
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