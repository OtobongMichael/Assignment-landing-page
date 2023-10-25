import React, { Component } from 'react'
import { Icon } from '@iconify/react';

export default class Card extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container bg-white mt-5 '>
                <div style={{ width: "18rem" }}>
                    <div class="card-body">
                        <h5 className="card-title ">{this.props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary fs-5 fw-bold">{this.props.subtitle}</h6>
                        <p className="card-text ">{this.props.text}</p>
        
                    </div>
                </div>
            </div>
        )
    }
}
