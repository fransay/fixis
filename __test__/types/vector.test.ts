
import { Vector } from "../../src/types/vector";

test('Vector Addition ', ()=> {
    const vectorOne = new Vector([1,2,3,4]);
    const vectorTwo = new Vector([2,3,4,5]);

    expect(vectorOne.add([2,3,4,5])).toBe([3,5,7,9])


    // test toString
    expect(vectorOne.toString()).toBe("[1,2,3,4]");
    expect(vectorTwo.toString()).toBe("[2,3,4,5]");

});