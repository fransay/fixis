
// A particle is localised object characterised by its mass, position or charge.
export class Particle{
    mass: number;
    speed: number;
    size: number[];

    constructor(mass: number, speed: number, size: number[]){
        this.mass = mass;
        this.speed = speed;
        this.size = size
    };
}