import React, { Component } from "react"
import "./picLogin.css"

class PicLogin extends Component {
	constructor(props) {
		super(props) 
		this.state = {
			dbResponse: {
				fname: "Seun",
				lname: "Mejule",
				password: ["1", "2" , "3"]
			},
		inputPassword: [],
		logIn: false 
		}

	}

	onChange = (e) => {
		// console.log("target", e.target.id);
		this.setState({ 
			[e.target.id]: e.target.value
		});
	}

	checkPassword = (arr1, arr2) => {
		for (let i=0; i<arr1.length; i++) {
			if (arr1[i] != arr2[i]){
				return false
			}
		}
		return true
	}

	handleSubmit = (e) => {
		if (this.state.fname != this.state.dbResponse.fname || this.state.lname != this.state.dbResponse.lname){
			console.log("first loop")
			this.setState({
				logIn: false,
				inputPassword: [],
				fname: "",
				lname: "",
			})
			return "Invalid credentials"
		} else if(this.checkPassword(this.state.inputPassword, this.state.dbResponse.password) === false){
			console.log("2nd loop", this.state.inputPassword, this.state.dbResponse.password)
			this.setState({
				logIn: false,
				inputPassword: [],
				fname: "",
				lname: "",
			})
			return "Invalid password"
		} else{
			console.log("3rd loop")
			this.setState({
				logIn: true,
				inputPassword: [],
				fname: "",
				lname: "",
			})
			return "You are in!"
		}
	}

	onClickPixels = (e, i) => {
		console.log(i)
		const pixelInput = this.state.inputPassword
		pixelInput.push(i)
		this.setState({
			inputPassword: pixelInput
		})
	}

render (props) {
	console.log(this.state)
		return (
			<div>
				<input onChange={this.onChange} id='fname' type='text' placeholder='Enter firstname here' value={this.state.fname}></input>
				<input onChange={this.onChange} id='lname' type='text' placeholder='Enter lastname here' value={this.state.lname}></input>
				<button onClick={this.handleSubmit} className = "btn"> Submit </button>
				<div className = "picContainer">
					<div onClick={(e) => this.onClickPixels(e,"1")} className = "pixels" name = "1"> 1 </div>
					<div onClick={(e) => this.onClickPixels(e,"2")} className = "pixels" name = "2"> 2 </div>
					<div onClick={(e) => this.onClickPixels(e,"3")} className = "pixels" name = "3"> 3 </div>
					<div onClick={(e) => this.onClickPixels(e,"4")} className = "pixels" name = "4"> 4 </div>
					<div onClick={(e) => this.onClickPixels(e,"5")} className = "pixels" name = "5"> 5 </div>
					<div onClick={(e) => this.onClickPixels(e,"6")} className = "pixels" name = "6"> 6 </div>
					<div onClick={(e) => this.onClickPixels(e,"7")} className = "pixels" name = "7"> 7 </div>
					<div onClick={(e) => this.onClickPixels(e,"8")} className = "pixels" name = "8"> 8 </div>
					<div onClick={(e) => this.onClickPixels(e,"9")} className = "pixels" name = "9"> 9 </div>
				</div>
			</div>
			)
		}
}
export default PicLogin