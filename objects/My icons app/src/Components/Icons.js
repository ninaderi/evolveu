import React, { Component } from 'react';

class Icons extends Component {
	render() {
		return (
		<div>
		<img src={require('./cheers.svg')} className="glasses-logo"/>
		<img src={require('./crown.svg')} className="king-logo"/>
		<img src={require('./icons8-music.svg')} className="music-logo"/>
		<img src={require('./calculator.svg')} className="calc-logo"/>

		</div>
		);
	}
}

export default Icons;