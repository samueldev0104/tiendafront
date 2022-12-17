import React, {useState, useEffect} from "react"

function FormUsuarios(props) {
    const {getUser, setUser, onSave} = props;
    const [usuario, setUsuario] = useState({
        _id: null,
        usuario: "",
        clave: "",
        rol: "",
        estado: "",
        persona: {
            _id: "",
            correo: ""
        }
    })

    useEffect(() => {
      if (setUser)
        setUsuario(setUser);
    }, [setUser])

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]:e.target.value});
        console.log(usuario);
        getUser(usuario);
    }

    const handleChangePersona = (e) => {
        setUsuario({...usuario, persona: {[e.target.name]:e.target.value}});
        console.log(usuario);
        getUser(usuario);
    }

    const guardar = (e) => {
        e.preventDefault();
        onSave(usuario);
    }

    const limpiar = () => {
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
        })
    }

    return(
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://www.freepnglogos.com/uploads/teacher-png/teacher-icon-page-29.png" alt="logo"></img>
            </div>
            <form method="post">
                <h3> Crea un nuevo usuario</h3>
                <div>
                    <label>Usuario:</label>
                    <input className="form-control" type="text" name="usuario" value={usuario.usuario} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Clave:</label>
                    <input className="form-control" type="text" name="clave" value={usuario.clave} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Rol:</label>
                    <select className="form-control" name="rol" value={usuario.rol} onChange={(e)=>handleChange(e)}>
                        <option value="-">Seleccione...</option>
                        <option value="Vendedor">Vendedor</option>
                        <option value="Cajero">Cajero</option>
                        <option value="Administrador">Administrador</option>
                        <option value="Pasaporte">Pasaporte</option>
                    </select>
                </div>
                <div>
                <label>Estado:</label>
                    <select className="form-control" name="estado" value={usuario.estado} onChange={(e)=>handleChange(e)}>
                        <option value="-">Seleccione...</option>
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <div>
                    <label>Correo:</label>
                    <input className="form-control" type="text" name="correo" value={usuario.persona.correo} onChange={(e)=>handleChangePersona(e)}/>
                </div>
            </form>
                <button className="btnContact" onClick={guardar}>Guardar</button>
                <button className="btnContact" onClick={limpiar}>Limpiar</button>
        </div>
    )
}

export default FormUsuarios