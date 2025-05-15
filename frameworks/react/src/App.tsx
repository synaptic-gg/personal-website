import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div> 
      </div>
      <div className=" flex flex-col gap-2">
        <div className = "text-white"> <h1 >React</h1></div>

       <div className=' bg-violet-600'> <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button></div>

      </div>

    </>
  )
}

export default App
