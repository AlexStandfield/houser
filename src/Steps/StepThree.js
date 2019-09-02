import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store from '../store'
import StepOne from './StepOne'
import StepTwo from './StepTwo'

export default class extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip,
                img: reduxState.img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    addHouse = () => {
        const {name, address, city, state, zip} = this.reduxState
        const {img, mortgage, rent} = this.state
        const body = {
            name,
            address,
            city,
            state,
            zip,
            img,
            mortgage,
            rent
        }
        axios.post('/api/house', body).then(res => {
            this.setState({
                name: '',
                address: '',
                city: '',
                state: '',
                zip: 0,
                img: '',
                mortgage: 0,
                rent: 0
            })
        })
    }

    handleMortgageChange = (mortgageVal) => {
        this.setState({
            mortgage: mortgageVal
        })
    }
    handleRentChange = (rentVal) => {
        this.setState({
            rent: rentVal
        })
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.mortgage} onChange={e => this.handleMortgageChange(e.target.value)} />

                <input type='text' value={this.state.rent} onChange={e => this.handleRentChange(e.target.value)} />

                <button onClick={this.addHouse} >Complete</button>

                <Link to='/wizard/step2' className="links">
                    <button>Previous</button>
                </Link>
            </div>
        )
    }
}