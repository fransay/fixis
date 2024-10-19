import { Position } from "./position";

// Displacement defines a vector quantity representing the change in position
class Displacement{
    firstPoint: Position;
    secondPoint : Position;
    
    constructor(firstPoint: Position, secondPoint: Position){
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
    }

    find(): number{
        return this.stnB.getTerminal - this.stnA.getTerminal
    }

    toString(){
        return `${this.find()}`
    }
}


export default Displacement;