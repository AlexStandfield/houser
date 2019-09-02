import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../store'
import {STEP_ONE} from '../../reducer'

export default class StepOne extends Component {
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            States: reduxState.States,
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
                States: reduxState.States,
                zip: reduxState.zip,
                img: reduxState.img,
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
    }

    handleNameChange(nameVal){
        this.setState({
            name: nameVal
        })
    }
    handleAddressChange(addressVal){
        this.setState({
            address: addressVal
        })
    }
    handleCityChange(cityVal){
        this.setState({
            city: cityVal
        })
    }
    handleStatesChange(StatesVal){
        this.setState({
            States: StatesVal
        })
    }
    handleZipChange(zipVal){
        this.setState({
            zip: zipVal
        })
    }

    nextStep = (val) => {
        let action = {
            type: STEP_ONE,
            payload: val
        }
        store.dispatch(action)
    }

    // nextStep(){
    //     const reduxState = store.getState()
    //     store.dispatch({
    //         type: STEP_ONE,
    //         payload
    //     })
    // }

    render() {
        return (
            <div>
                <input type='text' value={this.state.name} onChange={e => this.handleNameChange(e.target.value)} >

                </input>
                <input type='text' value={this.state.address} onChange={e => this.handleAddressChange(e.target.value)}>

                </input>
                <input type='text' value={this.state.city} onChange={e => this.handleCityChange(e.target.value)}>

                </input>
                <input type='text' value={this.state.States} onChange={e => this.handleStatesChange(e.target.value)}>

                </input>
                <input type='text' value={this.state.zip} onChange={e => this.handleZipChange(e.target.value)}>

                </input>

                <Link to='/wizard/step2' className="links">
                    <button onClick={() => this.nextStep()} >Next</button>
                </Link>

            </div>
        )
    }
}
