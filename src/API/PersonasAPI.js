// let url = 'http://localhost:5000/'; 
// url += 'personas/'; 

const url = 'https://g1g23be.onrender.com/personas/';

export async function listarPersonas(){
    const res = await fetch(url);
    const data = await res.json();
    return data.personas;
}

export async function crearPersona(persona){
    const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(persona)
    });
    const data = await res.json();
    return data;
}

export async function actualizarPersona(persona){
    const res = await fetch(url, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(persona)
    });
    const data = await res.json();
    return data;
}

export async function eliminarPersona(id){
    const res = await fetch(url + `${id}`,{
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    const data = await res.json();
    return data;
}
