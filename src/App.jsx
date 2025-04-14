import { useState } from 'react'
import './app.css'

function App() {
  const [color, setColor] = useState("olive")
    // console.log(color);
    
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-15 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button
          onClick={() => setColor("#332C23")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#332C23"}}
          >
            Van Dyke
          </button>

          <button
         onClick={() => setColor("#88527F")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#88527F"}}
          >
            Plum
          </button>

          <button
           onClick={() => setColor("Purple")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Purple"}}
          >
            Purple
          </button>

          <button
           onClick={() => setColor("#A06B9A")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#A06B9A"}}
          >
            Pomp
          </button>

          <button
           onClick={() => setColor("#522B29")}
          className="outline-none px-4 rounded-full text-white shadow-lg"
          style={{backgroundColor: "#522B29"}}
          >
            Chocolate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
