import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false)
  // const [isFirstRender, setIsFirstRender] = useState(true)
  const copy=()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
    });
  }
  const passGen = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if (number) {
      str += "1234567890"
    }
    if (char) {
      str += "!@#$%&*"
    }
    for (let i = 1; i <= length; i++) {
      let selectedChar = Math.floor(Math.random() * str.length) // corrected index calculation
      pass += str.charAt(selectedChar)
    }
    setPassword(pass)
  }, [length, number, char, setPassword])//if we will not use setPassword then also run but it is not optimized. because it stores password in cache.
  const passwordRef=useRef(null)
  // useEffect(() => {
  //   if (!isFirstRender) {
  //     passGen()
  //   } else {
  //     setIsFirstRender(false)
  //   }
  // }, [length, number, char, passGen])//use useEffect when you want to use automatic and continuous generation on each change

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-black/5  text-red-600 font-semibold">
        <h1 className='text-red-600 font-orbitron font-extrabold text-center my-3 text-2xl uppercase'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copy}
            className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0'
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        
        <div className='flex flex-col gap-y-4 sm:flex-row sm:gap-y-0 sm:gap-x-4 text-sm lg:text-base'>
          <div className='grid items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(parseInt(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => setNumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => setChar((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
        <button
          onClick={passGen}
          className='outline-none rounded-lg mt-6 bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0 '
        >
          Generate Password
        </button>
      </div>
    </>
  )
}

export default App
