
import { useState } from "react"
import numbers from "./assets/numArr"
import "bootstrap/dist/css/bootstrap.min.css"

let newArr = []
let arrayToDraw = [...numbers]

function App() {
  const state = useState(null)
  const [numb, setNumb] = state 

  const drawNumb = () =>{
    let newN = Math.floor(Math.random() * arrayToDraw.length)
    setNumb(arrayToDraw[newN])
    newArr.push(arrayToDraw[newN])
    arrayToDraw.splice(newN, 1)
    console.log(arrayToDraw);
    
    
  }

  return (
    <>
    <button className="btn btn-primary" onClick={drawNumb}>Pesca</button>
    <p>{numb}</p>
    <ul>
      {numbers.map((curN) =>{
        return (
          <li className={`listNumb ${(newArr.includes(curN)) && "bg-warning"}`}>{curN}</li>
        )
      })}
    </ul>
    </>
  )
  

  
}

export default App
