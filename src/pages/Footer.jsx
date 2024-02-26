import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer class="text-center text-white bg-primary fixed-bottom">

                <div class="container p-4 pb-0">

                    <section class="">
                        <p class="d-flex justify-content-center align-items-center">
                            <span class="me-3">Made using React by</span>
                            <a style={{ color: "white", textDecoration: "none" }} target='_blank' href="https://mapur2.github.io/new_portfolio/" color='black'>
                                <button data-mdb-ripple-init type="button" class="btn btn-outline-light btn-rounded">
                                    Rupam
                                </button>
                            </a>
                        </p>
                    </section>

                </div>

                <div class="text-center p-3">
                    © 2024 Copyright:RupamModak
                </div>
            </footer>

        </>
    )
}

export default Footer