import React from "react";

function TablePersonas(props){
    const {personas, onDelete, onView} = props;
  return(
        <table border={1}>
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Tipo Documento</th>
              <th>Número de Documento</th>
              <th>Dirección</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona)=>{
              return (<tr key={persona._id}>
                <td> {persona.nombres} </td>
                <td> {persona.apellidos} </td>
                <td> {persona.tipDoc} </td>
                <td> {persona.numDoc} </td>
                <td> {persona.direccion} </td>
                <td> {persona.correo} </td>
                <td> {persona.telefono} </td>
                <td>
                  <button onClick={()=>onDelete(persona._id)}>Eliminar</button>
                  <button onClick={()=>onView(persona)}>Ver</button>
                </td>
              </tr>)
            })}
          </tbody>
        </table>
    )
}

export default TablePersonas