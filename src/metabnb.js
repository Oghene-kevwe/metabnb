import { useEffect, useRef } from "react"

export const App = () =>{
    const testRef = useRef(null)
    useEffect(()=>{
        testRef.current.style.color = 'red'
        console.log(testRef.current.style);
    })
    return (
        <h1 className="text-3xl font-bold underline" ref={testRef}>
          Hello world!
        </h1>
      )
}








