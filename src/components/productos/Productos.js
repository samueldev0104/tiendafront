import React, {useState} from "react";
import TableProductos from "./TableProductos";
import { listarProductos } from "../../API/ProductosAPI";
import { crearProducto  } from "../../API/ProductosAPI";
import { eliminarProducto } from "../../API/ProductosAPI";
import { actualizarProducto } from "../../API/ProductosAPI";
import FormProductos from "./FormProductos";
import Navegador from "../generales/Navegador";

function Productos(){
    const [verLista, setVerLista] = useState(true);
    const [productos, setProductos] = useState([]);
    const [producto, setProducto] = useState(null)

    const actualizarLista = () => {
        listarProductos()
        .then((data) => {
            setProductos(data)}) 
        .catch((error) => {console.log(error)});
    };

    if(productos.length === 0){
        actualizarLista();
        console.log(productos);
    };


    const guardarProducto = (producto) => {
        if (producto._id === null)
            {crearProducto(producto).then((data) => {
                actualizarLista();
            }).catch((error) => {console.log(error)})
        } else {
            actualizarProducto(producto).then((data)=>{
                actualizarLista();
            }).catch((error)=>{console.log(error)})
        }
        setVerLista(true);
    };

    const borrarProducto = (id) => {
        return eliminarProducto(id).then((data) => {
            if(data.deletedCount === 1)
                actualizarLista();  
        }).catch((error) => {console.log(error)})
    }

    const verProducto = (producto) => {
        setProducto(producto);
        setVerLista(false);
    }

    const verListaProductos = () =>{
        setProducto({
            _id: null,
            nombre: "",
            codigo: "",
            cantidad: "",
            precioVenta: "",
            precioCompra: "",
            stockMinimo: "",
            descripcion: "",
            unidadMedida: "" 
        }); 
        setVerLista(true);
    }

    return (
        <div>
            <Navegador/>
            <div>
                {!verLista && <button className="botonNormal" onClick={verListaProductos}>Ver lista de productos</button>}
                {verLista && <button className="botonNormal" onClick={()=>setVerLista(false)}>Crear nuevo producto</button>}
            </div>
            {!verLista && <div>
                <FormProductos setProduct={producto} onSave={guardarProducto}/>
            </div>}
            {verLista && <TableProductos productos= {productos} onDelete={borrarProducto} onView={verProducto}/>}
        </div>
    )
}

export default Productos;