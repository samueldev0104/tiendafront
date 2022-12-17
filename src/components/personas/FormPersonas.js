import React, {useState, useEffect} from "react"

function FormPersonas(props) {
    const {getPerson, setPerson, onSave} = props;
    const [persona, setPersona] = useState({
        _id: null,
        nombres: "",
        apellidos: "",
        tipDoc: "",
        numDoc: "",
        direccion: "",
        telefono: "",
        correo: ""
    })

    useEffect(() => {
      if (setPerson)
        setPersona(setPerson);
    }, [setPerson])

    const handleChange = (e) => {
        setPersona({...persona, [e.target.name]:e.target.value});
        console.log(persona);
        getPerson(persona);
    }

    const guardar = (e) => {
        e.preventDefault();
        onSave(persona);
    }

    const limpiar = () => {
        setPersona({
            _id: null,
            nombres: "",
            apellidos: "",
            tipDoc: "-",
            numDoc: "",
            direccion: "",
            telefono: "",
            correo: "" 
        })
    }

    return(
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://www.freepnglogos.com/uploads/teacher-png/teacher-icon-page-29.png" alt="logo"></img>
            </div>
            <form method="post">
                <h3>Crea una nueva persona</h3>
                <div>
                    <label>Nombres:</label>
                    <input className="form-control" type="text" name="nombres" value={persona.nombres} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Apellidos:</label>
                    <input className="form-control" type="text" name="apellidos" value={persona.apellidos} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Tipo de Documento:</label>
                    <select className="form-control" name="tipDoc" value={persona.tipDoc} onChange={(e)=>handleChange(e)}>
                        <option value="-">Seleccione...</option>
                        <option value="CC">CC</option>
                        <option value="NIT">NIT</option>
                        <option value="CE">CE</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div>
                    <label>Numero de Documento:</label>
                    <input className="form-control" type="text" name="numDoc" value={persona.numDoc} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Dirección:</label>
                    <input className="form-control" type="text" name="direccion" value={persona.direccion} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input className="form-control" type="text" name="telefono" value={persona.telefono} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Correo:</label>
                    <input className="form-control"type="text" name="correo" value={persona.correo} onChange={(e)=>handleChange(e)}/>
                </div>
            </form>
                <button className="btnContact" onClick={guardar}>Guardar</button>
                <button className="btnContact" onClick={limpiar}>Limpiar</button>
        </div>
    )
}

export default FormPersonas