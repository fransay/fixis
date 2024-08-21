import { Point2D } from "../../src/types/point";

test("Point types", ()=>{
    let pointOne = new Point2D(2, 4);
    let pointTwo = new Point2D(5, 6);

    expect(pointOne.toString).toBe("2, 4");
    expect(pointTwo.toString).toBe("5, 6");
    
});