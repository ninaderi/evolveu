import React, { Component } from "react"
import ReactDOM from "react-dom"
import City from "./City"

class CityApp extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			inputUpdate: 0,
			// arrCity: this.props.cityObject
		}
	}

	onChange = (e) => {
		// console.log("target", e.target.id);
		this.setState({ 
			inputUpdate: Number(e.target.value)
		})
	}

	 moveIn = (id, people) => {
        this.props.onMovingIn(this.props.cityObject.id, this.state.inputUpdate);
        this.setState({
			inputUpdate: 0,
		})
    }

    moveOut = (id, people) => {
        this.props.onMovingOut(this.props.cityObject.id, this.state.inputUpdate);
        this.setState({
			inputUpdate: 0,
		})
    }

    showingInfo = () => {
		this.props.onShowInfo(this.props.cityObject.id)
	}

	deletingCity = () => {
		this.props.onDelete(this.props.cityObject.id)
	}


	render (props) {
		return (
				<div className='classDiv1'>
			<div className='citycard'>
				<p id='info'>Name: {this.props.cityObject.name}</p>
				<p id='info'>Type: {this.props.cityObject.howBig()}  </p>
				<p id='info'>Population: {this.props.cityObject.pop}</p>
				<p id='info'>Latitude:{this.props.cityObject.lat}</p>
				<p id='info'>Longitude: {this.props.cityObject.long}</p>
				<p id='info'>Hempishere: {this.props.cityObject.whichSphere()}</p>
				<input type='text' value={this.state.inputUpdate} placeholder='Enter Numbers' onChange={this.onChange}></input>
				<br />
				
				<br />
				<button id='btns' onClick={this.moveIn}>MovedIn</button>
				<button id='btns' onClick={this.moveOut}>MovedOut</button>
				<button id='btns'onClick={this.showingInfo}>Show Info</button>
				<button id='btns' onClick={this.deletingCity}>Delete</button>
			</div>
				</div>
			)
	}
	

}

export default CityApp