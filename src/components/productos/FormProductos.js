import React, {useState, useEffect} from "react"

function FormProductos(props) {
    const {getProduct, setProduct, onSave} = props;
    const [producto, setProducto] = useState({
        _id: null,
        nombre: "",
        codigo: "",
        cantidad: "",
        precioVenta: "",
        precioCompra: "",
        stockMinimo: "",
        descripcion: "",
        unidadMedida: ""
    })

    useEffect(() => {
      if (setProduct)
        setProducto(setProduct);
    }, [setProduct])

    const handleChange = (e) => {
        setProducto({...producto, [e.target.name]:e.target.value});
        console.log(producto);
        getProduct(producto);
    }

    const guardar = (e) => {
        e.preventDefault();
        onSave(producto);
    }

    const limpiar = () => {
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
        })
    }

    return(
        <div className="container contact-form">
            <div className="contact-image">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-donations-shopping-carts-forms-membershipworks-21.png" alt="logo"></img>
            </div>
            <form method="post">
                <h3>Crea un nuevo producto</h3>
                <div>
                    <label>Nombre: </label>
                    <input className="form-control" type="text" name="nombre" value={producto.nombre} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Codigo: </label>
                    <input className="form-control" type="text" name="codigo" value={producto.codigo} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Cantidad: </label>
                    <input className="form-control" type="number" name="cantidad" min="1" max="1000000" value={producto.cantidad} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Precio de Venta: </label>
                    <input className="form-control" type="number" name="precioVenta" min="100" max="10000000" value={producto.precioVenta} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Precio de Compra: </label>
                    <input className="form-control" type="number" name="precioCompra" min="100" max="10000000" value={producto.precioCompra} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Stock Mínimo: </label>
                    <input className="form-control" type="number" name="stockMinimo" min="1" max="10000" value={producto.stockMinimo} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Descripción: </label>
                    <input className="form-control"type="text" name="descripcion" value={producto.descripcion} onChange={(e)=>handleChange(e)}/>
                </div>
                <div>
                    <label>Unidad de Medida: </label>
                    <input className="form-control"type="text" name="unidadMedida" value={producto.unidadMedida} onChange={(e)=>handleChange(e)}/>
                </div>
            </form>
                <button className="btnContact" onClick={guardar}>Guardar</button>
                <button className="btnContact" onClick={limpiar}>Limpiar</button>
        </div>
    )
}

export default FormProductos