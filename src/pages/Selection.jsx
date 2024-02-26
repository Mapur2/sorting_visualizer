import React from 'react'
import { useState } from 'react'
const arr = []

function Selection() {
  const [input, setInput] = useState("")
  const [display, setDisplay] = useState(false)
  const [message, setMessage]=useState("Welcome. Please enter your numbers.")

  function handleSubmit() {
    if (input == null || input == "")
      return
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == input) {
        alert('Element Present ')
        return
      }
    }
    arr.push(parseInt(input))
    setInput("")

    console.log(arr)
  }


  const delay = (ms) => {
    return new Promise(res =>
      setTimeout(
        res, ms)
    )
  }

  async function handleSort() {
    setMessage("Starting Sort")
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
      let f = 0

      let t = 0;
      let m = i
      let e1 = document.getElementById(`${arr[m]}`)
      let e2;
      e1.classList.add('flashit')
      e1.style.backgroundColor = "red"
      setMessage(`${arr[m]} is selected.`)
      await delay(600)
      for (let j = i + 1; j < n; j++) {
        e2 = document.getElementById(`${arr[j]}`)
        e2.classList.add('flashit')
        e2.style.backgroundColor = "green"
        await delay(1000)
        if (arr[m] > arr[j]) {
          document.getElementById(`${arr[j]}`).style.backgroundColor = "blue"
          if (m != i)
            document.getElementById(`${arr[m]}`).style.backgroundColor = "rgb(202, 5, 202)"
          m = j;
          setMessage(`${arr[m]} is minimum.`)
          await delay(1500)
        }
        else {
          await delay(1000)
          e2.style.backgroundColor = "rgb(202, 5, 202)"
        }
        e2.classList.remove('flashit')
        //await delay(500)
      }

      e2 = document.getElementById(`${arr[m]}`)
      if (m != i) {

        e2.classList.add('flashit')
        await delay(1000)
        setMessage(`${arr[m]} is swapped with ${arr[i]}.`)
        e2.innerText = arr[i]
        e2.id = arr[i]
        e1.innerText = arr[m]
        e1.id = arr[m]
        t = arr[m]
        arr[m] = arr[i]
        arr[i] = t
        e2.style.backgroundColor = "red"
        e1.style.backgroundColor = "blue"
        await delay(1500)
      }
      e2.style.backgroundColor = "rgb(202, 5, 202)"
      e1.style.backgroundColor = "rgb(202, 5, 202)"
      e1.classList.remove('flashit')
      e2.classList.remove('flashit')
      await delay(1000)
      // e2.classList.remove('flashit')
    }
    setMessage("Done!")
    for (let index = 0; index < n; index++) {
      console.log(document.getElementById(`${arr[index]}`).innerText)

    }
  }

  return (
    <>
      <h1 className='text-center m-3' >Selection Sort</h1>
      <div className='d-flex home align-items-center flex-wrap container text-center my-5'>
        <div className=' col-8'>
          <div className='d-flex'>
          {arr.map(data =>
            <p className=' num_box' id={data} style={{ color: "white" }}>{data}</p>
          )}
          </div>
          <br /><br />
             <div>Message: <span>{message}</span></div>
        </div>
        <div className='col-4 func'>
          <div className='rounder bg-dark text-white rounded p-2 m-3'>
          <p className='text-center'>Algorithm</p>
            <p>
              1. Set MIN to location 0.
            </p>
            <p>
              2. Search the minimum element in the list.
            </p>
            <p>
              3. Swap with value at location MIN. Increment MIN to point to next element.
              Repeat until the list is sorted.
            </p>
          </div>
          <input type="number"
            onChange={e => { setInput(e.target.value) }}
            value={input} />
            <br />
          <button className='m-3'  onClick={handleSubmit}>Insert</button>
          <button className='m-3' onClick={handleSort}>Sort</button>
        </div>
      </div>
    </>
  )
}


export default Selection
