import React from 'react'
import { useState } from 'react'

const arr = []

function Insertion() {

  const [input, setInput] = useState("")
  const [display, setDisplay] = useState(true)
  const [key, setKey] = useState("Key")
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
    setMessage("Starting sort")
    let n = arr.length
    for (let i = 1; i < n; i++) {
      let k = arr[i]
      let ky = document.getElementById(`${k}`)
      ky.classList.add("flashit")
      ky.style.backgroundColor = "red"
      await delay(1000)
      setKey(arr[i])
      setMessage(`${k} is key`)
      ky.classList.remove("flashit")
      ky.style.backgroundColor = "rgb(202, 5, 202)"
      await delay(1000)
      let e, e2;
      let j = i - 1
      while (j >= 0 && arr[j] > k) {
        e = document.getElementById(`${arr[j]}`)
        e.classList.add('flashit')
        e.style.backgroundColor = "green"
        setMessage(`${k} is smaller than ${arr[j]}`)
        await delay(1500)
        e2 = document.getElementById(`${arr[j + 1]}`)
        e2.classList.add('flashit')
        e2.style.backgroundColor = "red"
        arr[j + 1] = arr[j]
        await delay(1000)
        e2.innerText = arr[j]
        e2.id = arr[j]
        e2.style.backgroundColor = "green"
        await delay(1500)
        e.classList.remove('flashit')
        e2.style.backgroundColor = "rgb(202, 5, 202)"
        e.style.backgroundColor = "rgb(202, 5, 202)"
        e2.classList.remove('flashit')
        await delay(1000)
        j--;
      }
      if (j == i - 1)
        continue
      e2 = document.getElementById(`${arr[j + 1]}`)
      e2.classList.add('flashit')
      e2.style.backgroundColor = "red"
      await delay(1000)
      e2.innerText = k
      e2.id = k
      arr[j + 1] = k
      e2.style.backgroundColor = "blue"
      await delay(1000)
      e2.style.backgroundColor = "rgb(202, 5, 202)"
      e2.classList.remove('flashit')
      setKey("")
      await delay(1000)
    }
    setKey("Key")
    setMessage("Done!")
    for (let index = 0; index < n; index++) {
      console.log(document.getElementById(`${arr[index]}`).innerText)
    }
  }

  return (
    <>
      <h1 className='text-center m-3' >Insertion Sort</h1>
      <div className='d-flex home align-items-center flex-wrap container text-center my-3 '>

        <div className='col-8'>
          <div className='d-flex'>
            {arr.map(data =>
              <p className=' num_box' id={data} style={{ color: "white" }}>{data}</p>
            )}
          </div>
          <div className='key'>
            <br />

            <p className=' num_box' id={key} style={{ color: "white", font: "bold", backgroundColor: "blue" }}>{key}</p>

            <div>Message: <span>{message}</span></div>
          </div>
        </div>

        <div className='col-4 func'>
          <div className='rounder bg-dark text-white rounded'>
            <p className='text-center'>Algorithm</p>
            <p>Step 1 - If the element is the first element, assume that it is already sorted. Return 1.</p>
            <p>Step2 - Pick the next element, and store it separately in a key.</p>
            <p>
              Step3 - Now, compare the key with all elements in the sorted array.
            </p>
            <p> Step 4 - If the element in the sorted array is smaller than the current element, then move to the next element. Else, shift greater elements in the array towards the right.</p>
          </div>
          <input type="number"
            onChange={e => { setInput(e.target.value) }}
            value={input} />
          <br />
          <button className='m-3' onClick={handleSubmit}>Insert</button>
          <button className='m-3' onClick={handleSort}>Sort</button>

        </div>
      </div >
    </>
  )
}

export default Insertion
