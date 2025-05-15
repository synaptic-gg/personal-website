import { createSignal } from 'solid-js'
import './app.css'

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <>
      <div> 
      </div>
      <div class=" flex flex-col gap-2">
        <div class = "text-white"> <h1 >solid</h1></div>

       <div class=' bg-violet-600'> <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button></div>

      </div>
    </>
  )
}

export default App
