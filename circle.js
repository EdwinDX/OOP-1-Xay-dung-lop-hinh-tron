class Circle {
    radius;
    color;
    constructor(r,clr) {
        this.radius = r;
        this.color = clr;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return this.radius*this.radius*Math.PI;
    }
}