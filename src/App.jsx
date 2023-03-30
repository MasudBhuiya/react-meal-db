import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/Header/Header'
import Meals from './component/Header/Meals/Meals'

function App() {
  const [count, setCount] = useState(0)
  const [meal, setMeal] = useState('')
  const handleFood = (meal) =>{
    setMeal(meal)
  }

  return (
    <div className="App">
      <Header></Header>
      <Meals meal={meal} handleFood={handleFood}></Meals>
    </div>
  )
}

export default App
