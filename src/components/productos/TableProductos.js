import React from "react";

function TableProductos(props){
    const {productos, onDelete, onView} = props;
  return(
        <table border={1}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Código</th>
              <th>Cantidad</th>
              <th>Precio de Venta</th>
              <th>Precio de Compra</th>
              <th>Stock Minimo</th>
              <th>Descripción</th>
              <th>Unidad de Medida</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto)=>{
              return (<tr key={producto._id}>
                <td> {producto.nombre} </td>
                <td> {producto.codigo} </td>
                <td> {producto.cantidad} </td>
                <td> {producto.precioVenta} </td>
                <td> {producto.precioCompra} </td>
                <td> {producto.stockMinimo} </td>
                <td> {producto.descripcion} </td>
                <td> {producto.unidadMedida} </td>
                <td>
                  <button onClick={()=>onDelete(producto._id)}>Eliminar</button>
                  <button onClick={()=>onView(producto)}>Ver</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
    )
}

export default TableProductos