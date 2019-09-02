import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import StepOne from '../../Steps/StepOne'
import StepTwo from '../../Steps/StepTwo'
import StepThree from '../../Steps/StepThree'
import store from '../../store'
import {CLEAR} from '../../reducer'

export default class Wizard extends Component {
    
    cancel = () => {
        let action = {
            type: CLEAR,
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <Link to='/'>
                    <button onClick={() => this.cancel()} >Cancel</button>
                </Link>
                <Route path='/wizard/step1' component={StepOne} />
                <Route path='/wizard/step2' component={StepTwo} />
                <Route path='/wizard/step3' component={StepThree} />
                
            </div>
        )
    }
}
