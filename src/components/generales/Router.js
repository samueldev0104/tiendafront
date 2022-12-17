import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Personas from '../personas/Personas'
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
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router