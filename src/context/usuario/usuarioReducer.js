import { NUEVO_USUARIO,ERROR_USUARIO } from "../../tipos";
export default (state, action)=>{
    switch (action.type){
        case NUEVO_USUARIO:
            return {
                ...state,
                usuario:action.payload,
                hayUsuario:true,
                mensaje:null
            }
        case ERROR_USUARIO:
            return {
                ...state,
                usuario:action.payload.usuario,
                mensaje:action.payload.mensaje,
                hayUsuario:false
            }
        default : return state;
    }
}