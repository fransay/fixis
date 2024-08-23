
// Position is defined in a two-dimensional cartesian coordinate system
import {Point2D} from "../../types/point";

export class Position{
    private x: number;
    private y: number;
    ref: Point2D = new Point2D(0,0);

    constructor(x: number, y: number, ref: Point2D) {
        this.x = x;
        this.y = y;
        this.ref = ref;
    }

    /**
     * @get this.x value
     */
    get getX(){
        return this.x;
    }

    /**
     * @get this.y value
     */
    get getY(){
        return this.y;
    }

    /**
     * @param newX
     * @set this.x to newX
     */
    set setX(newX: number){
        this.x = newX;
    }

    /**
     * @param newY
     * @set this.y to newY
     */
    set setY(newY: number){
        this.y = newY;
    }

    /**
     * returns distance btn  [this.x, this.y] and new other position
     * */
    public distance(other: Position){
        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
    }

    /**
     * returns distance btn  [this.x, this.y] and ref the point which defaults to Point2D(0,0)
    * */
    public distanceFromRef(){
        return Math.sqrt(Math.pow(this.x - this.ref.x, 2) + Math.pow(this.y - this.ref.y, 2));
    }

    /**
     * return string representation of this.Position
    * */
    toString(){
        return `x: ${this.x}, y: ${this.y} ${this.ref}`;
    }
}