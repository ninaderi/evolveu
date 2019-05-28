import React, { Component } from "react";
import AccountApp from "./AccountApp";
import Accounts from "./Accounts.js";
import "./General.css"

class AccountsApp extends Component {
	constructor () {
		super();
		this.state = {
			newAccount:new Accounts(),
			accountName: null,
			accountBalance: 0,
			total: 0,
			highest: 0,
			lowest: 0,

		};
	}

	onHandleChange = (e) => {
		// e.preventDefault();
		console.log("target", e.target.id);
		
		if (e.target.id === "accountName") {
		this.setState({ 
			accountName: e.target.value
		});
	} else if (e.target.id === "accountBalance"){
		this.setState({ 
			accountBalance: Number(e.target.value)
		})
	} else if (e.target.id === "depositing"){
		this.setState({ 
			depositing: Number(e.target.value)
		})
	}

	}


	addNewAccount = () => {
		const array1 = this.state.newAccount;
		array1.addAccount(this.state.accountBalance, this.state.accountName);
		console.log(array1)
		this.setState({ //  We have to update the state
			newAccount: array1
		})

	}

	removeNewAccount = (id) => {
		const array1 = this.state.newAccount;
		array1.removeAccount(id);
		console.log(array1)
		this.setState({ //  We have to update the state
			newAccount: array1
		})
	}

	depositAccount = (id, amount) => {
			console.log("This is deposit:" , id, amount)
			const array1 = this.state.newAccount;
			array1.deposit(id, amount);
			console.log(array1)
			this.setState({ //  We have to update the state
				newAccount: array1
			})
		}

	withdrawAccount = (id, amount) => {
			console.log("This is withdraw:" , id, amount)
			const array1 = this.state.newAccount;
			array1.withdraw(id, amount);
			console.log(array1)
			this.setState({ //  We have to update the state
				newAccount: array1
			})
		}

	// totalAccount = () => {
	// 	let totAcc = this.newAccount.accountTotal();
	// 	this.setState({total: totAcc});
	// 	return totAcc;
	// }

	// gettingHighest = () => {
	// 	let high = this.newAccount.highestAccount();
	// 	this.setState({high: high});
	// 	return high;
	// }

	// gettingLowest = () => {
	// 	let low = this.newAccount.lowestAccount();
	// 	this.setState({low: low});
	// 	return low;
	// }

	render () {
			const obj = this.state.newAccount.newArray
			const renderList = obj.map(item => {
				return <AccountApp key={item.id}
									accountObject = {item}
									onRemove = {this.removeNewAccount}
									onDeposit = {this.depositAccount}
									onWithdraw = {this.withdrawAccount}
								
			/>
		})
		console.log(obj);
		
		return (
			<div className= "boxAccountParent">
				<div>
					<input onChange={this.onHandleChange} className="sizeControl" name="accountName" id='accountName'type='text' placeholder='Enter Account Name'></input>
					<input onChange={this.onHandleChange} className="sizeControl" name="accountBalance" id='accountBalance'type='number' placeholder='Enter Account Balance'></input>
					<button onClick={this.addNewAccount} id="adding" className = "btn"> Add </button> 
				</div>
				<br></br>
				<div>
					<form>
						<fieldset>
							<legend className = "border">Account List</legend>
						
							<h6>Account Total : {this.state.newAccount.accountTotal()}</h6>
							<h6>Account Highest : {this.state.newAccount.highestAccount()}</h6>
							<h6>Account Lowest : {this.state.newAccount.lowestAccount()}</h6>
						</fieldset>
					</form>
				</div>

				{renderList}
				
			</div>

			)
		}

}

export default AccountsApp