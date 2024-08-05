
class Vector{
    elements: number[]
    constructor(elements: number[]){
        this.elements = elements
    }

    // Add other vector to self
    add(vector: number[]): number[]{
        let summedVector: number[] = [];
        if (vector.length != this.elements.length){
            throw new Error("Vector dimensions don't match!")
        }
        for (let i=0; i<=vector.length; i++){
            summedVector.push(vector[i] + this.elements[i])
        }
        return summedVector;
    }

    // Multiply self vector by scalar :: dot product in effect
    multiply(scalar: number){
        let scaledVector: number[] = [];
        for (let i=0; i<=this.elements.length; i++){
            scaledVector.push(this.elements[i] * scalar)
        }
        return scaledVector;
    }

    // Norm of a vector
    norm(){
        return this.elements.length;
    }

    // Normalise the vector( make it a unit vector)
    normalise(){
        const magnitude = Math.sqrt(this.elements.reduce((sum, val) => sum + val * val, 0));
        if (magnitude === 0) return this.elements;
        return this.elements.map(val => val / magnitude);
    }

    // String representation of any vector
    toString(){
        return `${this.elements.toString}`
    }
}