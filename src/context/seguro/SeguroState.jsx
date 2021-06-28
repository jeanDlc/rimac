import React,{useReducer} from 'react';
import seguroReducer from './seguroReducer';
import SeguroContext from './seguroContext';
import { CAMBIAR_SUMA_ASEGURADA,AUMENTAR_MONTO,DISMINUIR_MONTO,LIMPIAR_STATE_MONTO } from '../../tipos';
const SeguroState = (props) => {
    //máximo y mínimo valor para la suma asegurada
    const MIN=12500;
    const MAX=16500;

    const initialState={
        sumaAsegurada:14300,
        monto:20,
        coberturasID:[]
    }
    const [state, dispatch]=useReducer(seguroReducer,initialState);

    //aumentar sumar asegurada
    const aumentarSuma=()=>{
        //de cuanto en cuanto incrementa la suma asegurada
        const incremento=100;
        if(state.sumaAsegurada<MAX){
            dispatch({
                type:CAMBIAR_SUMA_ASEGURADA,
                payload:state.sumaAsegurada+incremento
            })
        }
    }

    //disminuir suma asegurada
    const disminuirSuma=()=>{
        //de cuanto en cuanto disminuye la suma asegurada
        const decremento=100;
        if(state.sumaAsegurada>MIN){
            dispatch({
                type:CAMBIAR_SUMA_ASEGURADA,
                payload:state.sumaAsegurada-decremento
            })
        }
    }
    //agrega una cobertura para el monto final
    const agregarCobertura=(valor,idCobertura)=>{
        dispatch({
            type:AUMENTAR_MONTO,
            payload:{
                monto:state.monto+valor,
                idCobertura
            }
        })
    }
    const eliminarCobertura=(valor,idCobertura)=>{
        if(!state.coberturasID.includes(idCobertura)){
            return false;
        }
        dispatch({
            type:DISMINUIR_MONTO,
            payload:{
                monto:state.monto - valor,
                idCobertura
            }
        })
    }
    const reiniciarMonto=()=>{
        dispatch({
            type:LIMPIAR_STATE_MONTO,
            payload:initialState
        })
    }
    return ( 
        <SeguroContext.Provider
            value={{
                sumaAsegurada:state.sumaAsegurada,
                monto:state.monto,
                coberturasID:state.coberturasID,
                aumentarSuma,
                disminuirSuma,
                MIN,
                MAX,
                agregarCobertura,
                eliminarCobertura,
                reiniciarMonto
            }}
        >
            {props.children}
        </SeguroContext.Provider>
     );
}
 
export default SeguroState;