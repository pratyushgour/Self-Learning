import React, { useCallback, useEffect, useState, useRef } from "react";
import "./App.css";
import { use } from "react";

function Prat() {
  let [password, setPassword] = useState("asd");
  let [length, setLength] = useState(8);
  let [numIncluded, setNumIncluded] = useState(false);
  let [charIncluded, setCharIncluded] = useState(false);
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let options = "abcdefghijklmnopqrstwvxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789"
    let characters = "!@#$%^&*/?|"

    if(numIncluded){
      options = options+numbers;
    }
    if(charIncluded){
      options = options+characters;
    }
    var pass="";

    for(var i=0; i<length; i++){  
      var index = Math.floor(Math.random()*options.length);
      pass=pass+options[index];
    }
    setPassword(pass);
  },[length, numIncluded, charIncluded])

  useEffect(() => {
    passwordGenerator()
  }, [length, numIncluded, charIncluded])

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,9);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="flex justify-center pt-16 h-screen bg-black">

        <div className="w-1/2 h-24 bg-slate-400 text-white flex items-center flex-col justify-center rounded-md">

          <div className="flex h-10 px-4 py-1 w-[100%] justify-center">
            <input 
            type="text" 
            className="rounded-l-md w-3/4 text-black" 
            value={password}
            placeholder="password"
            readOnly
            ref={passwordRef}
            />
            <button 
            className="bg-blue-500 w-1/4 rounded-r-md"
            onClick={copyPassToClipboard}
            >
              copy
            </button>
          </div>

          <div className="flex items-center h-10 pt-2 px-4 w-[100%] border-s-violet-400 space-x-2">
            <div className="flex items-center space-x-0.5">
              <input 
              type="range"
              defaultValue={8} 
              min={6}
              max={100}
              onChange={(e) => setLength(e.target.value)}
              />
              <label htmlFor="">Length ({length})</label>
            </div>
            <div className="flex items-center space-x-0.5">
              <input 
              type="checkbox" 
              name="" 
              id="" 
              defaultChecked={numIncluded}
              onClick={() => setNumIncluded(!numIncluded)}
              />
              <label htmlFor="">Numbers</label>
            </div>
            <div className="flex items-center space-x-0.5">
            <input 
              type="checkbox" 
              name="" 
              id="" 
              defaultChecked={charIncluded}
              onClick={() => setCharIncluded(!charIncluded)}
              />
              <label htmlFor="">Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prat;
