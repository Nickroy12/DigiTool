import './App.css'
import { Suspense, useState } from 'react'
import { Counter } from './components/Counter'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Tools } from './components/Tools'
import { ToastContainer } from 'react-toastify'
import { Footer } from './components/Footer'
import { Step } from './components/Step'
import { PriceCard } from './components/PriceCard'
import { Join } from './components/Join'

function App() {
   const [select , setSelect] = useState([])
  const dataFetch = async () => {
    const res = await fetch('./product.json')
    return res.json()
  }
  const fetchStep = async () =>{
    const res = await fetch('./steps.json')
     return res.json()
  }
  const dataPromise = dataFetch();
  const stepPromise = fetchStep()

  return (
    <div>
      <Navbar select={select} setSelect={setSelect}/>
      <Hero />
      <Counter />

      <Suspense fallback={<p>Loading tools...</p>}>
        <Tools dataPromise={dataPromise} select={select} setSelect={setSelect}/>
      </Suspense>
      <Suspense fallback={<p>Loading tools...</p>}>
        <Step stepPromise={stepPromise}/>
      </Suspense>
      <PriceCard/>
      <Join/>
        <ToastContainer />
        <Footer/>
        
    </div>
  )
}

export default App
