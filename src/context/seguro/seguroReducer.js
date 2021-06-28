import { CAMBIAR_SUMA_ASEGURADA, AUMENTAR_MONTO, DISMINUIR_MONTO,LIMPIAR_STATE_MONTO } from "../../tipos";
export default (state, action)=>{
    switch (action.type){
        case CAMBIAR_SUMA_ASEGURADA:
            return {
                ...state,
                sumaAsegurada:action.payload
            }
        case AUMENTAR_MONTO:
            return {
                ...state,
                monto:action.payload.monto,
                coberturasID:[...state.coberturasID, action.payload.idCobertura]
            }
        case DISMINUIR_MONTO:
            return{
                ...state,
                monto:action.payload.monto,
                coberturasID:state.coberturasID.filter(id=>id!==action.payload.idCobertura)
            }
        case LIMPIAR_STATE_MONTO:
            return {
                ...action.payload
            }
        default : return state;
    }
}