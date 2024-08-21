import {Position} from "../../src/kinematics/types/position";


test('position', () => {
    // test distance
    expect((new Position(3,5).distance(new Position(6,7)))).toBe(3.60555127546)
    // test
})