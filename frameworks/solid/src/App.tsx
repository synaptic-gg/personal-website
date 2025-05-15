//import { createSignal } from 'solid-js'
import './app.css'

function App() {
  //const [count, setCount] = createSignal(0)

  return (
   <div class="flex items-center justify-center w-full flex-col px-4 min-h-50 lg:min-h-100">
    <h2 class="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        The Syanpic Signal <br /> Broadcast in Code
      </h2>
      <p class="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        This part is written in <strong>Solid</strong>
      </p>
       <br />
   </div>
  )
}

export default App
