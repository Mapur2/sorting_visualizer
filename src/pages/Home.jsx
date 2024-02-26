import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const ele = [
        {
            name: "Bubble Sort",
            link: "/bubble"
        }
        , {
            name: "Selection Sort",
            link: "/selection"
        },
        {
            name: "Insertion Sort",
            link: "/insertion"
        }
    ]

    return (
        <>
            <div className='d-flex home align-items-center flex-wrap container text-center my-5'>
                <div className='w-80 col m-3'>
                    A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements.
                    The comparison operator is used to decide the new order of elements in the respective data structure.
                </div>
                <div className='col m-3'>
                    <img src="https://embed-ssl.wistia.com/deliveries/70d6f4e10e2badb5ef394f00c17ad2bc1c14f6e7.jpg" alt="" srcset="" />
                </div>
            </div>
            <p className='text-center fs-3'>What do you want to visualize?</p><br />
            <div className='position-absolute start-50 translate-middle text-center'>
                
                {ele.map(data=> <Link className='btn btn-success m-2 sortbutton btn-outline-dark text-white p-3' to={data.link}>{data.name}</Link>)}
            </div>
        </>
    )
}

export default Home
