
// A particle is localised object characterised by its mass, position or charge.
export class Particle{
    mass: number; // standard unit in kg
    speed: number;  // in standard unit in ms-2
    size: number; // m^2 
    height: number // m

    constructor(mass: number, speed: number, size: number, height: number){
        this.mass = mass;
        this.speed = speed;
        this.size = size;
        this.height = height;
    };
}