import React, { Component } from 'react'
//import Navbar from './Component/Navbar'
//import './App.css'; // Your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg bg-body-transparent ">
                <div className="container fixed-tp">
                    <a className="navbar-brand fw-bold fs-2 " href="#">Atomic</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQs</a>
                            </li>

                        </ul>
                        <div className='d-flex gap-3 ms-auto' >
                            <button type="button " className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-3">Login</button>
                            <button type="button" className="btn btn-sm px-3 btn-light rounded-pill shadow-sm ">Sign Up</button>

                        </div>
                    </div>

                </div>

            </nav>



        )
    }
}
