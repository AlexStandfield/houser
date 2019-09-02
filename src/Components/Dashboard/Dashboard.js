import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios';

import './Dashboard.css'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state ={
            houses: []
        }
    }

    componentDidMount(){
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houses')
        .then(res => {
            this.setState({
                houses: res.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        const mappedHouses = this.state.houses.map((houses, i) => {
            return (
                <House key={i} id={houses.id} name={houses.name} address={houses.address} city={houses.city} state={houses.state} zip={houses.zip} getHouses={this.getHouses} />
            )
        })

        return (
            <div className='body'>
                Dashboard
                <Link to='/wizard/step1' className="links">
                    <button>Add New Property</button>
                </Link>
                <House />
                {mappedHouses}
            </div>
        )
    }
}

