import { useState } from "react";
import "./App.css";
import Card from "./Components/Card.jsx"
import CardPhirse from "./Components/CardPhirse.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-5">Tailwind test</h1>
      <Card username="Pratyush" />
      <CardPhirse username="Nikhil" btnText="Click me"/>
    </>
  );
}

export default App;