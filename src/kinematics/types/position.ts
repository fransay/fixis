
// Position is defined in a two-dimensional cartesian coordinate system
import {Point2D} from "../../types/point";

export class Position{
    private x: number;
    private y: number;
    private ref: Point2D = new Point2D(0,0);

    constructor(x: number, y: number, ref: Point2D) {
        this.x = x;
        this.y = y;
        this.ref = ref;
    }

    get getX(){
        return this.x;
    }

    get getY(){
        return this.y;
    }

    set setX(newX: number){
        this.x = newX;
    }

    set setY(newY: number){
        this.y = newY;
    }

    public distance(other: Position){
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }

    public distanceFromReference(){
        return Math.sqrt(Math.pow(this.x - this.ref.x, 2) + Math.pow(this.y - this.ref.y, 2));
    }
}