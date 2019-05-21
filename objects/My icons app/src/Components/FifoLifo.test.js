import FifoLifo from './FifoLifo';
test('Testing the FifoLifo Class', () => {
    console.log("Testing for constructor");
    const obj = new FifoLifo();
    expect(obj.arr.length).toBe(0);
    
    console.log("Testing for Insertion method");
    obj.insertion("Kitty");
    expect(obj.arr.length).toBe(1);
    obj.insertion("Bunny");
    expect(obj.arr.length).toBe(2);
    obj.insertion("Puppy");
    expect(obj.arr.length).toBe(3);
    obj.insertion("Calf");
    expect(obj.arr.length).toBe(4);
    obj.insertion("Turtle");
    expect(obj.arr.length).toBe(5);
    obj.insertion("Chick");
    expect(obj.arr.length).toBe(6);
    // console.log(obj.arr);
   
    console.log("Testing for delFifo method");
    obj.delFifo();
    expect(obj.arr.length).toBe(5);
    // console.log(obj.arr);
    obj.delFifo();
    expect(obj.arr.length).toBe(4);
    // console.log(obj.arr);

    console.log('Test Insertion method after using delFifo');
    obj.insertion('Duckling');
    expect(obj.arr.length).toBe(5);
    // console.log(obj.arr);

    console.log("Testing for delLifo method");
    obj.delLifo();
    expect(obj.arr.length).toBe(4);
    obj.delLifo();
    expect(obj.arr.length).toBe(3);
    // console.log(obj.arr);

    console.log('Test Insertion method after using delLifo');
    obj.insertion('Bunny');
    expect(obj.arr.length).toBe(4);
    obj.insertion('Chick');
    expect(obj.arr.length).toBe(5);
    console.log(obj.arr);
});
