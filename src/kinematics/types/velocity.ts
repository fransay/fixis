import Displacement from "./displacement";
import Time from "./time";


class Velocity{
    displacement: Displacement;
    time: Time;

    constructor(displacement: Displacement, time: Time){
        this.displacement = displacement;
        this.time = time;
    }

    average():number {
        return (this.displacement.pos.getTerminal - this.displacement.pos.getStart)  / this.time.getTime;
    }

    instant(){
        return (this.displacement.pos.getTerminal)  / this.time.getTime;
    }
}








export default Velocity;