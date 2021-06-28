import { useReducer } from "react";
import { NUEVO_USUARIO,ERROR_USUARIO } from "../../tipos";
import usuarioReducer from "./usuarioReducer";
import UsuarioContext from "./usuarioContext";
import { getUserByEmail } from "../../util/services/user";
const UsuarioState = (props) => {
    const initialState={
        usuario:{
            nombre:null,
            email:null,
            dni:null,
            celular:null
        },
        mensaje:null,
        hayUsuario:false
    }
    const [state,dispatch]=useReducer(usuarioReducer,initialState);
    const nuevoUsuario=async (filtro,tipoFiltro, celular )=>{
        try {
            let resUsuario;
            if(tipoFiltro==='email'){
                resUsuario =await getUserByEmail(filtro);
            }
            
            const nuevoU={
                nombre:resUsuario[0].name,
                email:resUsuario[0].email,
                dni:null,
                celular
            }
            dispatch({
                type:NUEVO_USUARIO,
                payload:nuevoU
            })
            return true
        } catch (error) {
            dispatch({
                type:ERROR_USUARIO,
                payload:{
                    usuario:initialState.usuario,
                    mensaje:'No se encontró el usuario'
                }
            })
        }
        
    }
    return ( 
        <UsuarioContext.Provider
            value={{
                usuario:state.usuario,
                mensaje:state.mensaje,
                nuevoUsuario,
                hayUsuario:state.hayUsuario
            }}
        >
            {props.children}
        </UsuarioContext.Provider>
     );
}
 
export default UsuarioState;