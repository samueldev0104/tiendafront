import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Personas from '../personas/Personas'
import Productos from '../productos/Productos'
import Login from '../usuarios/Login'
import Usuarios from '../usuarios/Usuarios'
import Home from './Home'

function Router () {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/personas' element={<Personas/>}/>
                    <Route path='/usuarios' element={<Usuarios/>}/>
                    <Route path='/productos' element={<Productos/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
