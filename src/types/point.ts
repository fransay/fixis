
/* 
Point2D models a point in two dimensional space
Axis: X,Y 
*/
export class Point2D{
    // x-coordinate of point
    x: number;

    // y-coordinate of point
    y: number;
    constructor(x: number, y:number){
        this.x = x;
        this.y = y;
    }

    // translate point by axial shifts
    translate(x:number, y:number){
        this.x += x;
        this.y += y;
    }

    // euclidean distance between two points (self and other)
    distance(pnt: Point2D){
        return Math.sqrt(Math.pow((pnt.x -this.x), 2) + Math.pow((pnt.y -this.y), 2));
    }

    // bearing distance between two points (self and other)
    bearing(pnt: Point2D){
        let deltaX = pnt.x - this.x;
        let deltaY = pnt.y - this.y;
        return Math.atan(deltaY / deltaX)
    }

    // string point representation in 2d
    toString(){
        return `${this.x}, ${this.y}`;
    }
}

/* 
Point3D models a point in three dimensional space
Axis: X,Y, Z
*/
export class Point3D{
    // x-coordinate of point
    x: number;

    // y-coordinate of point
    y: number;

    // z-coordinate of point
    z: number;
    constructor(x: number, y:number, z: number){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    // translate point by axial shifts
    translate(x:number, y:number, z:number){
        this.x += x;
        this.y += y
        this.z += z
    }

    // euclidean distance between two point in a 3-dim space
    distance(pnt: Point3D): number{
        return Math.sqrt(
            Math.pow((pnt.x -this.x), 2) + Math.pow((pnt.y -this.y), 2) + Math.pow((pnt.z - this.z), 2));
    }

    // bearing distance between two points (self and other)
    bearing(pnt: Point3D): number{
        let magnitude = Math.sqrt(Math.pow((pnt.x - this.x), 2) + Math.pow((pnt.y - this.y), 2)+Math.pow((pnt.z - this.z), 2))
        let azimuth = Math.atan((pnt.y - this.y) / (pnt.x - this.x))
        let elevation = Math.sin((pnt.z - this.z) / magnitude)
        return Math.atan2(pnt.y - this.y, pnt.x - this.x)
    }

    // string point representation in 3D
    toString(){
        return `${this.x}, ${this.y}, ${this.z}`
    }
}