import City from "./City"

test("Testing the city", () => {
	console.log("Test 1")
	const cityTest = new City (0, "Antananarivo", -18.933333, 47.516667, 1391433)
	expect(cityTest.id).toBe(0)
	expect(cityTest.name).toBe("Antananarivo")
	expect(cityTest.lat).toBe(-18.933333)
	expect(cityTest.long).toBe(47.516667)
	expect(cityTest.pop).toBe(1391433)


	console.log("Test 2")
	expect(cityTest.show()).toBe(`0 Antananarivo -18.933333 47.516667 1391433`)
	
	console.log("Test 3")
	expect(cityTest.movedIn(2)).toBe(1391435)

	console.log("Test 4")
	expect(cityTest.movedOut(100)).toBe(1391335)


	console.log('Test 5')	
	expect(cityTest.howBig(1000000)).toBe('City')
	
	console.log('Test 6')	
	expect(cityTest.whichSphere(-18.933333)).toBe('South')

})

	test('test the object reference', () => {
	    const city = new City (4, "myCity", -20, 10, 500000);
	    expect(city.show()).toEqual('4 myCity -20 10 500000');
	    expect(city.pop).toEqual(500000)
	    let myFav = city
	    expect(myFav.movedIn(100)).toEqual(500100);
	    let myCity = myFav
	    expect(myCity.movedIn(500)).toEqual(500600)

}); 



	