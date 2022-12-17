import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../API/UsuariosAPI';
import swal from 'sweetalert';

function Login() {
    const navegar = useNavigate();
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

    localStorage.clear();

    const handleChange = (e) => {
        setUsuario({...usuario, [e.target.name]:e.target.value});
    }

    const ingresar = (e) => {
        e.preventDefault();
        login(usuario)
        .then((data) => {
            if (data === null){
                swal({
                    title: "Error",
                    text: "Usuario o Clave incorrecta",
                    icon: "error"
                });
            } else {
                localStorage.setItem("usuarioActivo", JSON.stringify(data));
                navegar("/");
            }
        }).catch((error) => {console.log(error)})
    }

    return (
        <div className="wrapper">
            <div className="logo">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-isolated-exemption-photo-pixabay-3.png" alt="Logo-Tienda"/>
            </div>
            <div className="text-center mt-4 name">
                Mi Tiendita
            </div>
            <form className="p-3 mt-3">
                <div className="form-field d-flex align-items-center">
                    <span className="far fa-user"></span>
                    <input type="text" id="userName" placeholder="Username" name='usuario' value={usuario.nombres} onChange={(e)=>handleChange(e)}/>
                </div>
                <div className="form-field d-flex align-items-center">
                    <span className="fas fa-key"></span>
                    <input type="password" id="pwd" placeholder="Password" name='clave' value={usuario.apellidos} onChange={(e)=>handleChange(e)}/>
                </div>
            </form>
            <button onClick={ingresar} className="btn mt-3">Login</button>
            <div className="text-center fs-6">
                {/* <a href="">Forget password?</a> or <a href="">Sign up</a> */}
            </div>
        </div>
    )
}

export default Login