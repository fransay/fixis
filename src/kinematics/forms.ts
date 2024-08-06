// Varying forms of kinematics

import Displacement from "./types/displacement";
import { Position } from "./types/position";
import Time from "./types/time";

/// displacement returns the change in position of a vector quantity
export function displacement(positionA: Position, positionB: Position): number{
    return positionB.getTerminal - positionA.getTerminal
}

export function velocity(displacement: Displacement, time: Time){}