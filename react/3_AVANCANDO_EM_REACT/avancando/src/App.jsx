import { useState } from 'react'
import './App.css'

import 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default App
