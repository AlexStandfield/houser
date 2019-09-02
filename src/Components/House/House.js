import React, { Component } from 'react'
import axios from 'axios'

export default class House extends Component {

    deleteHouse = () => {
        axios.delete(`/api/house/${this.props.id}`)
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
            this.props.getHouses()
    }
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.address}
                {this.props.city}
                {this.props.state}
                {this.props.zip}
                {this.props.img}
                {this.props.mortgage}
                {this.props.rent}

                <button onClick={(() => this.deleteHouse(this.props.id))} >Delete</button>
            </div>
        )
    }
}
