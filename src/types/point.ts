// 2 dimensional point type
export class Point2D{
    x: number;
    y: number;
    constructor(x: number, y:number){
        this.x = x,
        this.y = y
    }
    
    /**
     * 
     * @returns {string} `x``y` as a string representation 
     */
    toString(){
        return `${this.x}, ${this.y}`;
    }
}

// 3 dimension point type
export class Point3D{
    x: number;
    y: number;
    z: number;
    constructor(x: number, y:number, z: number){
        this.x = x,
        this.y = y,
        this.z = z
    }


    /**
     * 
     * @returns {string}`x``y``z` as a string representation
     */
    toString(){
        return `${this.x}, ${this.y}, ${this.z}`
    }
}