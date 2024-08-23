import {Position} from "../../src/kinematics/types/position";
import {Point2D} from "../../src/types/point";


test('position', () => {
    let refPoint = new Point2D(0,0)

    // test distance
    expect((new Position(3,5,refPoint).distance(new Position(6,7,refPoint)))).toBe(3.60555127546)

    // test distanceFromRef
    let secondRefPoint = new Point2D(1,1)
    expect(new Position(10, 40, secondRefPoint).distanceFromRef()).toBe(40.024992192)
})