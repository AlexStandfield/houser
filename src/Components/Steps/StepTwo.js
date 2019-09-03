import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../../store'
import {STEP_TWO} from '../../reducer'

export default class StepTwo extends Component {
    constructor(){
        super()
        this.state = {
            reduxState: store.getState(),
            img: ''
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            this.setState({
                reduxState: store.getState(),
                img: this.state.reduxState.img
            })
        })
    }

    // handleImgChange = (imgVal) => {
    //     this.setState({
    //         img: imgVal
    //     })
    // }

    nextStep = () => {
        const {
            img
        } = this.state
        store.dispatch({type: STEP_TWO, payload: {img}})
        console.log(store.getState())
    }

    render() {
        return (
            <div>
                <input type='text' src={this.state.img} onChange={(e) => this.setState({img: e.target.value})} />

                <Link to='/wizard/step1' className="links">
                    <button>Previos</button>
                </Link>

                <Link to='/wizard/step3' className="links">
                    <button onClick={this.nextStep} >Next</button>
                </Link>
            </div>
        )
    }
}
