import React, { Component } from "react"
// import ReactDOM from "react-dom"
// import Account from "./Account"
import "./Account.css"

class AccountApp extends Component {
	constructor(props) {
		super(props) 
		// this.account = new Account(0,1000, "Nilou")
		this.state = {
			// inputAmount : 0,
		// 	balance: 0,
			depositing: 0,
			withdrawing: 0,
		}

	}

	deleteAccount = () => {
		this.props.onRemove(this.props.accountObject.id)
	}
 
	depositAccount = () => {
		this.props.onDeposit(this.props.accountObject.id, this.state.depositing)
	}

	withdrawAccount = () => {
		this.props.onWithdraw(this.props.accountObject.id, this.state.withdrawing)
	}

	onChange = (e) => {
		// console.log("target", e.target.id);
		this.setState({ 
			[e.target.id]: e.target.value
		});

	// handleChange = (e) => {
	// 	e.target.id === "inputAmount"
	// 	this.setState(input: event.target.value)
	// }

	   // value = {Number(this.state.depositing)}
	}

	render (props) {
		return (
			<div className = "boxAccountChild"> 
				<p>Account Name {this.props.accountObject.accname}</p>
				<p>Account Balance {this.props.accountObject.balance}</p>
				
				

				<button onClick={this.depositAccount} className = "btn"> Deposit </button>
				<input onChange={this.onChange} id='depositing' type='number' placeholder='Enter the amount here'></input>
				<br></br>
				<button onClick={this.withdrawAccount} className = "btn"> Withdraw </button>
				<input onChange={this.onChange} id='withdrawing' type='number' placeholder='Enter the amount here'></input>
				<br></br>
				<button onClick={this.deleteAccount} className = "btn"> Delete </button>
			</div>
			)
		}

}

export default AccountApp