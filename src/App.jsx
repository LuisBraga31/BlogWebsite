import { Route, Routes } from 'react-router'
import './App.css'

import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog/:id" element={<BlogDetail/>}/>
      </Routes>  
    </>
  )
}

export default App
