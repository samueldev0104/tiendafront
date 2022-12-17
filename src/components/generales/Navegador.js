import React from 'react'

function Navegador() {
  return (
    // <header>
    //     <nav>
    //         <ul>
    //             <li><a href='/'>Home</a></li>
    //             <li><a href='/personas'>Personas</a></li>
    //             <li><a href='/usuarios'>Usuarios</a></li>
    //         </ul>
    //     </nav>
    // </header>
    <details>
      <summary></summary>
      <nav class="menu">
        <a href='/'>Home</a>
        <a href='/personas'>Personas</a>
        <a href='/usuarios'>Usuarios</a>
      </nav>
    </details>
  )
}

export default Navegador