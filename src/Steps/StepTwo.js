import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../store'
import {STEP_TWO} from '../reducer'

export default class StepTwo extends Component {
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

    handleImgChange = (imgVal) => {
        this.setState({
            img: imgVal
        })
    }

    nextStep = (val) => {
        let action = {
            type: STEP_TWO,
            payload: val
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <input type='text' src={this.state.img} onChange={e => this.handleImgChange(e.target.value)} />

                <Link to='/wizard/step1' className="links">
                    <button>Previos</button>
                </Link>

                <Link to='/wizard/step3' className="links">
                    <button onClick={() => this.nextStep()} >Next</button>
                </Link>
            </div>
        )
    }
}
