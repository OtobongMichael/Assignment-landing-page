import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import './App.css'; // Your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Component/Button';
import Card from './Component/Card';
import { Icon } from '@iconify/react';


export default class Hero extends Component {
  render() {
    return (
      <div className='HeroMain '>
        <Navbar />
        <div className=' container d-lg-flex text-center text-md-start '>
          <div className='container' style={{ marginTop: "150px" }}>
            <h1 className="display-4 fw-bold mb-3 1s-sm ">Design a better Website <br />template</h1>
            <p className="mb-4 lead">Building your brand's Website and get detailed insights on how templates <br />are Created</p>
            <Button title="Free Download"
              btn="btn-success" rounded="rounded-2"
              padding="p-2" btnSize="Ig px-4 display-5" />
          </div>
           <div className='offset -xl-1 col-xl-5 col-lg-6 col-md-12 mt-5 col-md-6'>
          <div className="d-block mt-n5 text-center">
            <a href="https://www.youtube.com/watch?v=JRzWRZahOVU" class="text-dark mt-5">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" 
              className="display-3 border rounded-circle shadow-sm mt-5 iconify iconify--gg" width="1em" 
              height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m15 12.33l-6 4.33V8l6 4.33Z"></path></svg></a></div>
        </div>
        </div>

        <div className='container bg-white p-5' style={{ marginTop: "360px" }}>
          <div className='row'>
            <div className=' col-12 col-md-4 '>
              <Card title={<Icon icon="emojione-monotone:light-bulb" className='iconify' />}
                subtitle="intuitive thinking"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate." />

            </div>

            <div className='col-12 col-md-4'>
              <Card title={<Icon icon="la:carrot" />}
                subtitle="intuitive thinking"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate." />
            </div>

            <div className='col-12 col-md-4'>
              <Card title={<Icon icon="ph:infinity-thin" />}
                subtitle="intuitive thinking"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magnam officiis cupiditate." />
            </div>


          </div>

        </div>

      </div>
    )
  }
}
