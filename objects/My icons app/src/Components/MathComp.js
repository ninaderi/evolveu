import React, { Component } from 'react';
import math from "./math";
// import "./App";



class MathComp extends Component {
	constructor () {
		super ()
		this.state = {
			// input1: " ",
			// input2: " ",
			// total: " ",
			results:0 //
		}
	}



		sum = () => {
			let x = parseInt(document.getElementById("input1").value)
			let y = parseInt(document.getElementById("input2").value)
			this.setState({results:math.sum(x,y)});
			console.log("Inside Func1");	
			}

		sub = () => {
			let x = parseInt(document.getElementById("input1").value)
			let y = parseInt(document.getElementById("input2").value)
			this.setState({results:math.sub(x,y)});
			console.log("Inside Func2");	
			}

		multi = () => {
			let x = parseInt(document.getElementById("input1").value)
			let y = parseInt(document.getElementById("input2").value)
			this.setState({results:math.mul(x,y)});
			console.log("Inside Func3");	
			}
	

		divi = () => {
			let x = parseInt(document.getElementById("input1").value)
			let y = parseInt(document.getElementById("input2").value)
			this.setState({results:math.div(x,y)});
			console.log("Inside Func4");
			}


	


	render() {
		return (

		<div>

			
				<div>
					<input id="input1" onClick={this.Calculate}></input>
					<br></br>
					<input id="input2" onClick={this.Calculate}></input>
				</div>

				<div> 
					<input type="button" id="sum" value="+" onClick={this.sum} className = "btnCalc"></input> 
					<input type="button" id="sub" value="-" onClick={this.sub} className = "btnCalc"></input> 
					<input type="button" id="multi" value="x" onClick={this.multi} className = "btnCalc"></input>
					<input type="button" id="divi" value="/" onClick={this.divi} className = "btnCalc"></input>
					<p>{this.state.results}</p>
				</div>

		</div>

		);
	}
}

export default MathComp;