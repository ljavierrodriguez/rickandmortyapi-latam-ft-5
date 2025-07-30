import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Detail from './pages/Detail'

const App = () => {
    return (
        <Routes>
            <Route path='/:character' element={<Detail />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default App