import './App.css'
import { Suspense, useState } from 'react'
import { Counter } from './components/Counter'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Tools } from './components/Tools'
import { ToastContainer } from 'react-toastify'

function App() {
   const [select , setSelect] = useState([])
  const dataFetch = async () => {
    const res = await fetch('./product.json')
    return res.json()
  }

  const dataPromise = dataFetch();

  return (
    <div>
      <Navbar select={select} setSelect={setSelect}/>
      <Hero />
      <Counter />

      <Suspense fallback={<p>Loading tools...</p>}>
        <Tools dataPromise={dataPromise} select={select} setSelect={setSelect}/>
      </Suspense>
        <ToastContainer />
    </div>
  )
}

export default App
