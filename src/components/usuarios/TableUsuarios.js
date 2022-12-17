import React from "react";

function TableUsuarios(props){
    const {usuarios, onDelete, onView} = props;
  return(
        <table border={1}>
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Clave</th>
              <th>Rol</th>
              <th>Correo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario)=>{
              return (<tr key={usuario._id}>
                <td> {usuario.usuario} </td>
                <td> {usuario.clave} </td>
                <td> {usuario.rol} </td>
                <td> {usuario.persona.correo} </td>
                <td> {usuario.estado} </td>
                <td>
                  <button onClick={()=>onDelete(usuario._id)}>Eliminar</button>
                  <button onClick={()=>onView(usuario)}>Ver</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
    )
}

export default TableUsuarios