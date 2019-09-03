import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../store'
import {STEP_ONE} from '../../reducer'

export default class StepOne extends Component {
    constructor(){
        super()

        this.state = {
            reduxState: store.getState(),
            name: '',
            address: '',
            city: '',
            States: '',
            zip: 0
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState(),
                name: this.state.reduxState.name,
                address: this.state.reduxState.address,
                city: this.state.reduxState.city,
                States: this.state.reduxState.States,
                zip: this.state.reduxState.zip
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

    nextStep = () => {
        const {
            name,
            address,
            city,
            States,
            zip
        } = this.state
        store.dispatch({type: STEP_ONE, payload: {name, address, city, States, zip}})
        console.log(store.getState())
    }

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
