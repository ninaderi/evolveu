import Community from "./Community"


test("Adding city test", () => {
	let c = new Community()
	expect(c.cityArray.length).toBe(0)
	console.log("This is adding city", c.cityArray)

	c.addCity("Antananarivo", -18.933333, 47.516667, 1391433)
	c.addCity("Santa Barbara", 34.4208, -119.6982, 92101)
	c.addCity("El Bordo", 2.116, -76.989, 11679)

	expect(c.cityArray.length).toBe(3)
	console.log("Arraaaayyyy", c.cityArray)

	expect(c.cityArray[0].name).toBe("Antananarivo")
	expect(c.cityArray[0].id).toBe(0)
	console.log("The array", c.cityArray[0])
	expect(c.cityArray[0].lat).toBe(-18.933333)
	expect(c.cityArray[0].long).toBe(47.516667)
	expect(c.cityArray[0].pop).toBe(1391433)

	expect(c.getPop()).toBe(1495213)
	console.log("Gettig pop", c.getPop())

	expect(c.mostNorthern()).toBe("Santa Barbara 34.4208")
	expect(c.mostSouthern()).toBe("Antananarivo -18.933333")

	c.commMovedIn(1, 102)
	console.log(c.cityArray[1].pop)
	expect(c.cityArray[1].pop).toBe(92203)

	c.commMovedOut(2, 10)
	console.log(c.cityArray[2].pop)
	expect(c.cityArray[2].pop).toBe(11669)

	c.showInfo(1)
	expect(c.showInfo(1)).toBe("1 Santa Barbara 34.4208 -119.6982 92203")
	console.log(c.cityArray[1])

	console.log(c.cityArray)
	c.deleteCity(0)
	expect(c.cityArray.length).toBe(2)
	console.log(c.cityArray)
})
