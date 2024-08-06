import { Point2D } from "../../src/types/point";

test("Point types", ()=>{
    let pointOne = new Point2D(2, 4);
    let pointTwo = new Point2D(5, 6);

    if (pointOne.toString() != "2, 4"){
        // raise an error with the testing..
    }
    
});