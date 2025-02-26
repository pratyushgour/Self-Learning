
import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App(){
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(6);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const passwordRef = useRef(null);


    const passwordGenerator = useCallback(() => {
      var pass="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let num = "0123456789"
      let char = "!@#$%^&*`~_-+=?></";

      if(numberAllowed) str+=num;
      if(charAllowed) str+=char;

      for(let i=0; i<length; i++){
        let x = Math.floor(Math.random()*str.length);
        pass=pass+str[x];
      }
      setPassword(pass);

    }, [length, numberAllowed, charAllowed])

    useEffect(passwordGenerator, [passwordGenerator]);

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      //passwordRef.current?.setSelectionRange(0, 6);
      window.navigator.clipboard.writeText(password);
    }, [password])

    return (
        <>
            <div className='h-[100vh] w-[100vw] bg-slate-700 flex justify-center'>
              <div className='h-24 w-[50vw] bg-slate-200 mt-20 flex justify-center items-center flex-col rounded-lg'>
                <h1 className='font-bold py-1'>Password Generator</h1>

                <div className='w-[90%] flex items-center justify-center h-[50%] rounded-md overflow-hidden'>
                  <input 
                  type="text" 
                  className='w-[90%] py-2'
                  value={password}
                  readOnly
                  ref={passwordRef}
                  />
                  <button 
                  className='bg-blue-500 rounded-md py-2 px-5 w-[20%] text-white'
                  onClick={copyPasswordToClipboard}
                  >copy</button>
                </div>

                <div className='w-[90%] flex items-center justify-center h-[50%] gap-2'>

                  <input 
                  type="range"
                  min={6} 
                  max={100}
                  value={length}
                  className=''
                  onChange={(e) => setLength(e.target.value)}
                  />
                  <label htmlFor="">Length: ({length})</label>

                  <input 
                  type="checkbox"
                  defaultChecked={numberAllowed}
                  onChange={() => {
                    setNumberAllowed(!numberAllowed)
                  }}
                  />
                  <label htmlFor="">Numbers</label>

                  <input 
                  type="checkbox"
                  defaultChecked={charAllowed}
                  onChange={() => {
                    setCharAllowed(!charAllowed)
                  }}
                  />
                  <label htmlFor="">Characters</label>

                </div>
              </div>
            </div>
        </>
    );
}

export default App
