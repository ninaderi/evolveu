import React, { Component } from "react"
import Community from "./Community"
import CityApp from "./CityApp"

class CommunityApp extends Component {
	constructor() {
		super();
		this.state = {
			nwC: new Community(),
			view: " ",
			inputNameCity: null,
			inputLatCity: 0,
			inputLongCity: 0,
			inputPopCity: 0,
			outPutCity: null,
		}
	}

	onChange = (e) => {
		if (e.target.id === 'city') {
			console.log('changing city name', e.target.value);
			this.setState({
				inputNameCity: e.target.value
			})
		} else if (e.target.id === 'pop') {
			console.log('changing population', Number(e.target.value));
			this.setState({
				inputPopCity: Number(e.target.value)
			})
		} else if (e.target.id === 'lat') {
			console.log('changing latitude', Number(e.target.value));
			this.setState({
				inputLatCity: Number(e.target.value)
			})
		} else if (e.target.id === 'long') {
			console.log('changing longitude', Number(e.target.value));
			this.setState({
				inputLongCity: Number(e.target.value)
			})
		}
			
	}

	onCityInput = () => {
		return (
				<div id='cities' className='cities'>
				<input onChange={this.onChange} id='city'type='text' placeholder='Enter City Name'></input>
				<input onChange={this.onChange} id='pop' type='number' placeholder='Enter Population'></input>
				<input onChange={this.onChange} id='lat' type='number' placeholder='Enter Latitude'></input>
				<input onChange={this.onChange} id='long' type='number' placeholder='Enter Longitude'></input>
				<button className="sizeControlCommunity" onClick={this.onAddingCity}>Submit</button>
			</div>

			)
	}

	onViewChange = () => {
		this.setState ({
			view: "add"
		})
	}

	onAddingCity = () => {
		console.log('addCity')
		const arr = this.state.nwC;
		arr.addCity(this.state.inputNameCity, this.state.inputLatCity, this.state.inputLongCity, this.state.inputPopCity);
		console.log(arr);
		this.setState({
			nwC: arr,
			view: '',
		})
	}

	onDeletingCity = (id) => {
			console.log('delete', id)
			const arr = this.state.nwC;
			arr.deleteCity(id);
			this.setState({
				nwC: arr,
			})	
		}

	onMovingIn = (id, ppl) => {
		console.log('movedIn', id)
		const arr = this.state.nwC;
		arr.commMovedIn(id, ppl);
		this.setState({
			nwC: arr,
			})
		}

	onMovingOut = (id, ppl) => {
		console.log('movedOut', id)
		const arr = this.state.nwC;
		arr.commMovedOut(id, ppl);
		this.setState({
			nwC: arr,
		})
	}

	onShowingInfo = (id) => {
		const arr = this.state.nwC;
		let info = arr.showInfo(id);
		console.log(info);
		this.setState({
			outPutCity: info,
		})
	}

	render () {
		const obj = this.state.nwC.cityArray
		const renderList = obj.map((item ,i) => {
			return <CityApp key={i}
							cityObject = {item}
							onDelete = {this.onDeletingCity}
							onMovingIn = {this.onMovingIn}
							onMovingOut = {this.onMovingOut}
							onShowInfo = {this.onShowingInfo}
					/>


		})

		return (
			<div className = "commDiv">
				<div>
					<button id='addbtn' onClick={this.onViewChange}>Add City</button>
					{this.state.view === "add" && this.onCityInput()}
				</div>
				<br></br>
			

				<div className='status'>
					<form>
						<fieldset>
							<legend className = "border">City Info</legend>
							<p>Show City Info: {this.state.outPutCity}</p>
							<p>Most Northern City: {this.state.nwC.mostNorthern()}</p>
							<p>Most Southern City: {this.state.nwC.mostSouthern()}</p>
							<p>Total Population - all Cities: {this.state.nwC.getPop().toLocaleString()}</p>
						</fieldset>
					</form>
				</div>
				{renderList}
			</div>

			)
	}

}


export default CommunityApp