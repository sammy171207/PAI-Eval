import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import AddForm from './component/AddForm'
import Home from './component/Home'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/add_product' element={<AddForm/>}/>
     </Routes>
    </>
  )
}

export default App;