import { Position } from "./position";

// Displacement defines a vector quantity representing the change in position
class Displacement{
    stnA: Position;
    stnB : Position;
    
    constructor(stnA: Position, stnB: Position){
        this.stnA = stnA;
        this.stnB = stnB;
    }

    find(): number{
        return this.stnB.getTerminal - this.stnA.getTerminal
    }

    toString(){
        return `${this.find()}`
    }
}


export default Displacement;