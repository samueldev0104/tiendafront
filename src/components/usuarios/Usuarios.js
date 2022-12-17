import React, {useState} from "react";
import TableUsuarios from "./TableUsuarios";
import { listarUsuarios } from "../../API/UsuariosAPI";
import { crearUsuario } from "../../API/UsuariosAPI";
import { eliminarUsuario } from "../../API/UsuariosAPI";
import { actualizarUsuario } from "../../API/UsuariosAPI";
import FormUsuarios from "./FormUsuarios";
import Navegador from "../generales/Navegador";


function Usuarios(){
    const [verLista, setVerLista] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [usuario, setUsuario] = useState(null)

    const actualizarLista = () => {
        listarUsuarios()
        .then((data) => {
            setUsuarios(data)}) 
        .catch((error) => {console.log(error)});
    };

    if(usuarios.length === 0){
        actualizarLista();
    }


    const guardarUsuario = (usuario) => {
        if (usuario._id === null)
            {crearUsuario(usuario).then((data) => {
                actualizarLista();
            }).catch((error) => {console.log(error)})
        } else {
            actualizarUsuario(usuario).then((data)=>{
                actualizarLista();
            }).catch((error)=>{console.log(error)})
        }
        setVerLista(true);
    };

    const borrarUsuario = (id) => {
        return eliminarUsuario(id).then((data) => {
            if(data.deletedCount === 1)
                actualizarLista();  
        }).catch((error) => {console.log(error)})
    }

    const verListaUsuarios = () => {
      setUsuario({
        _id: null,
        usuario: "",
        clave: "",
        rol: "",
        estado: "",
        persona: {
            _id: "",
            correo: ""
        }
    });
      setVerLista(true);
    }

    const verUsuario = (usuario) => {
        setUsuario(usuario);
        setVerLista(false);
    }

    return (
        <div>
          <Navegador/>
            <div>
                {!verLista && <button onClick={(verListaUsuarios)}>Ver lista usuarios</button>}
                {verLista && <button onClick={()=>setVerLista(false)}>Crear nueva usuario</button>}
            </div>
            {!verLista && <div>
                <FormUsuarios setUser={usuario} onSave={guardarUsuario}/>
            </div>}
            {verLista && <TableUsuarios usuarios= {usuarios} onDelete={borrarUsuario} onView={verUsuario}/>}
        </div>
    )
}

export default Usuarios;