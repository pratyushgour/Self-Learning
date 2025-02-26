import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 w-full px-2">
          <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-2xl">
            <button className="px-4 py-2 text-white rounded-2xl " style={{backgroundColor: "red"}} onClick={() => setColor("red")}>red</button>
            <button className="px-4 py-2 text-white rounded-2xl " style={{backgroundColor: "green"}} onClick={() => setColor("green")}>green</button>
            <button className="px-4 py-2 text-white rounded-2xl " style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>blue</button>
            <button className="px-4 py-2 text-white rounded-2xl " style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>yellow</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
