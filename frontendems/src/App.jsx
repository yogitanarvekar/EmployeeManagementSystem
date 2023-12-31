import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderComponents from './components/HeaderComponents'
import EmployeeComponents from './components/EmployeeComponents'
import FooterComponents from './components/FooterComponents'
import ListEmployeeComponents from './components/ListEmployeeComponents'
import ShowEmployeeComponents from './components/ShowEmployeeComponents'

function App() {

  return (
    <>
      <BrowserRouter>

        <HeaderComponents/>

        <Routes>
          <Route path='/' element={<ListEmployeeComponents/>}/>
          <Route path='/add-employee' element={<EmployeeComponents/>}/>
          <Route path='/edit-employee/:id' element={<EmployeeComponents/>}/>
          <Route path='/view-employee/:id' element={<ShowEmployeeComponents/>}/>
        </Routes>

        <FooterComponents/>

      </BrowserRouter>
    </>
  )
}

export default App