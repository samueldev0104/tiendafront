import React, {useState} from "react";
import TablePersonas from "./TablePersonas";
import { listarPersonas } from "../../API/PersonasAPI";
import { crearPersona  } from "../../API/PersonasAPI";
import { eliminarPersona } from "../../API/PersonasAPI";
import { actualizarPersona } from "../../API/PersonasAPI";
import FormPersonas from "./FormPersonas";
import Navegador from "../generales/Navegador";

function Personas(){
    const [verLista, setVerLista] = useState(true);
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null)

    const actualizarLista = () => {
        listarPersonas()
        .then((data) => {
            setPersonas(data)}) 
        .catch((error) => {console.log(error)});
    };

    if(personas.length === 0){
        actualizarLista();
    }


    const guardarPersona = (persona) => {
        if (persona._id === null)
            {crearPersona(persona).then((data) => {
                actualizarLista();
            }).catch((error) => {console.log(error)})
        } else {
            actualizarPersona(persona).then((data)=>{
                actualizarLista();
            }).catch((error)=>{console.log(error)})
        }
        setVerLista(true);
    };

    const borrarPersona = (id) => {
        return eliminarPersona(id).then((data) => {
            if(data.deletedCount === 1)
                actualizarLista();  
        }).catch((error) => {console.log(error)})
    }

    const verPersona = (persona) => {
        setPersona(persona);
        setVerLista(false);
    }

    const verListaPersonas = () =>{
        setPersona({
            _id: null,
            nombres: "",
            apellidos: "",
            tipDoc: "",
            numDoc: "",
            direccion: "",
            telefono: "",
            correo: ""
        }); 
        setVerLista(true);
    }

    return (
        <div>
            <Navegador/>
            <div>
                {!verLista && <button className="botonNormal" onClick={verListaPersonas}>Ver lista personas</button>}
                {verLista && <button className="botonNormal" onClick={()=>setVerLista(false)}>Crear nueva persona</button>}
            </div>
            {!verLista && <div>
                <FormPersonas setPerson={persona} onSave={guardarPersona}/>
            </div>}
            {verLista && <TablePersonas personas= {personas} onDelete={borrarPersona} onView={verPersona}/>}
        </div>
    )
}

export default Personas;