export class GeometricPrimitive {
    #coordinates;
    #color;
    #isVisible;

    constructor (coordinates,color, isVisible){
        this.#coordinates = coordinates;
        this.#color = color;
        this.#isVisible = isVisible;
    }

    toString() {
        return `Координати ${}`
    }

    show(){

    }

    hide(){

    }

    move(){

    }
}