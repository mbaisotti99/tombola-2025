
import { useState } from "react"
import numbers from "./assets/numArr"
import "bootstrap/dist/css/bootstrap.min.css"

let newArr = []
let arrayToDraw = [...numbers]

function App() {
  const state = useState(null)
  const [numb, setNumb] = state

  const drawNumb = () => {
    if (arrayToDraw.length > 0) {
      let newN = Math.floor(Math.random() * arrayToDraw.length)
      setNumb(arrayToDraw[newN])
      newArr.push(arrayToDraw[newN])
      arrayToDraw.splice(newN, 1)
    } else {
      setNumb("NUMERI FINITI!")
    }
    // console.log(arrayToDraw);


  }

  const reset = () =>{
    setNumb(null)
    newArr = []
    arrayToDraw = [...numbers]
  }

  return (
    <div className="container my-5">
      <div className="header">
        <button className={`btn btn-primary pesca ${arrayToDraw.length == 0 && "disabled"}`} onClick={drawNumb}>Pesca</button>
        <button className={`btn btn-primary pesca ${arrayToDraw.length > 0 && "d-none"} my-5`} onClick={reset}>Reset</button>
        <p className="my-5">{numb}</p>
      </div>
      <ul className="list-group list-group-horizontal d-flex flex-wrap text-center">
        {numbers.map((curN) => {
          return (
            <li className={`column list-group-item ${(newArr.includes(curN)) && "bg-warning"} flex-fill border  `}>{curN}</li>
          )
        })}
      </ul>
    </div>
  )



}

export default App
