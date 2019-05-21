class City {
	constructor (id, name, lat, long, pop) {
		this.id = id;
		this.name = name;
		this.long = long;
		this.lat = lat;
		this.pop = pop;
	}

	show () {
		return `${this.id} ${this.name} ${this.lat} ${this.long} ${this.pop}`
	}

	movedIn(people) {
		this.pop = this.pop + people
		return this.pop
	}

	movedOut(people) {
		this.pop = this.pop - people
		return this.pop
	}

	howBig() {
		let answer;
		if (this.pop > 100000) {
			answer = "City"
		} else if (this.pop >20000 && this.pop <= 100000) {
             answer = 'Large Town'
        } else if ( this.pop >1000 && this.pop <= 20000) {
           answer ='Town'
        } else if ( this.pop >100 &&this.pop <= 1000) {
            answer = 'Village'
        } else if (this.pop >=1 && this.pop <= 100) {
            answer = 'Hamlet'
        }
        return answer;
	}

	whichSphere() {
        let sphere;
        if (this.lat > 0) {
            sphere = 'North';
        } else if (this.lat < 0) {
            sphere = 'South';
        } else {
            sphere = 'Keep calm! You are somewhere on earth!'
        }

        return sphere;
    }


}

export default City