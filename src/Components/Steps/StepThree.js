import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store from '../../store'
import {ADD_HOUSE} from '../../reducer'

export default class extends Component {
    constructor(){
        super()
        this.state = {
            reduxState: store.getState(),
            mortgage: 0,
            rent: 0
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState(),
                mortgage: this.state.reduxState.mortgage,
                rent: this.state.reduxState.rent
            })
        })
    }

    addHouse = () => {
        const {name, address, city, States, zip} = this.state.reduxState
        const {img, mortgage, rent} = this.state
        const body = {
            name,
            address,
            city,
            States,
            zip,
            img,
            mortgage,
            rent
        }
        axios.post('/api/house', body).then(res => {
            console.log(store.getState())
           store.dispatch({type: ADD_HOUSE, payload: res})
        })
        console.log(store.getState())
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

                <Link to='/' className="links">
                    <button onClick={this.addHouse} >Complete</button>
                </Link>
                

                <Link to='/wizard/step2' className="links">
                    <button>Previous</button>
                </Link>
            </div>
        )
    }
}