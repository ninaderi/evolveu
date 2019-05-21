import City from './City'
// import myData from './CityList.json'

class Community {
	constructor() {
		this.cityArray = [];
		this.counter = 0;
		// this.importCity();
	}

	addCity(name, lat, long, pop) {
		const obj = new City(this.counter, name, lat, long, pop);
		this.cityArray.push(obj);
		this.counter++;
	}

	// importCity() {
	// 	const tempArray = myData;
	// 	tempArray.forEach(item => {
	// 		this.addCity(item.name, item.lat, item.long, item.pop)
	// 	})
	// }

	getPop() {
		this.totalPop = this.cityArray.reduce((acc, value) => {
			return parseInt(acc) + parseInt(value.pop);
		}, 0);
			return this.totalPop
	}

	mostNorthern() {
		const maxNorth = this.cityArray.reduce((a, b) => {
			if(a.lat > b.lat) {
				return a
			}
				return b
		}, 0);
		return `${maxNorth.name} ${maxNorth.lat}`;
	}

	mostSouthern() {
		const maxSouth = this.cityArray.reduce((a, b) => {
			if(a.lat < b.lat) {
				return a
			}
				return b
		}, 0);
		return `${maxSouth.name} ${maxSouth.lat}`;
	}

	commMovedIn(id, ppl) {
		this.cityArray.forEach(item => {
			if(item.id === id) {
				item.movedIn(ppl);
			}
		})
	}

	commMovedOut(id, ppl) {
			this.cityArray.forEach(item => {
				if(item.id === id) {
					item.movedOut(ppl);
				}
			})
		}

	showInfo(id) {
		let answer;
		this.cityArray.forEach(item => {
			if(item.id === id) {
				answer = item.show();
			}
		})
		return answer;
	}

	deleteCity(id) {
		let index = 0;
		this.cityArray.forEach(item => {
			if(item.id === id) {
				this.cityArray.splice(index,1)
			}
			index++;
		})

	}


}



export default Community
