import React from 'react'
import { useState } from 'react'

const arr = []

function Bubble() {
  const [input, setInput] = useState("")
  const [display, setDisplay] = useState(true)
  const [message, setMessage] = useState("Welcome. Please enter your numbers.")
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
      for (let j = 0; j < n - 1 - i; j++) {
        let t = 0;

        let e1 = document.getElementById(`${arr[j]}`)
        let e2 = document.getElementById(`${arr[j + 1]}`)
        e1.classList.add('flashit')
        e2.classList.add('flashit')
        if (arr[j] > arr[j + 1]) {
          setMessage(`${arr[j]} is greater than ${arr[j+1]}. So they are swapped`)
          e2.style.backgroundColor = "green"
          e1.style.backgroundColor = "red"
          await delay(2000)
          e2.innerText = arr[j]
          e2.id = arr[j]
          e1.innerText = arr[j + 1]
          e1.id = arr[j + 1]
          t = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = t
          e2.style.backgroundColor = "red"
          e1.style.backgroundColor = "green"
          await delay(1500)
          f = 1
        }
        else {
          e2.style.backgroundColor = "red"
          e1.style.backgroundColor = "green"
          setMessage(`${arr[j]} is smaller than ${arr[j+1]}. So they are not swapped`)
          await delay(1500)
        }
        e2.style.backgroundColor = "rgb(202, 5, 202)"
        e1.style.backgroundColor = "rgb(202, 5, 202)"
        e1.classList.remove('flashit')
        e2.classList.remove('flashit')
        await delay(1000)
      }
      if (f == 0)
        break
    }
    setMessage("Done!")
    for (let index = 0; index < n; index++) {
      console.log(document.getElementById(`${arr[index]}`).innerText)

    }
  }

  return (
    <>
      <h1 className='text-center m-3' >Bubble Sort</h1>
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
              1. Check if the first element in the input array is greater than the next element in the array.
            </p>
            <p>
              2. If it is greater, swap the two elements; otherwise move the pointer forward in the array.
            </p>
            <p>
              3. Repeat Step 2 until we reach the end of the array.
            </p>
            <p>4. Check if the elements are sorted; if not, repeat the same process (Step 1 to Step 3) from the last element of the array to the first.</p>
          </div>
          <input type="number"
            onChange={e => { setInput(e.target.value) }}
            value={input} />
          <br />
          <button className='m-3' onClick={handleSubmit}>Insert</button>
          <button className='m-3' onClick={handleSort}>Sort</button>
        </div>
      </div>
    </>
  )
}

export default Bubble
