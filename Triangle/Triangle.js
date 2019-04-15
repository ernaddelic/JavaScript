function Triangle(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype.kind = function() {
    if (this.a === 0 || this.b === 0 || this.c === 0) {
        throw new Error ('triangles with no size are illegal')
    } else if (this.a < 0 || this.b < 0 || this.c < 0) {
        throw new Error ('triangles with negative sides are illegal');
    } else if (this.a > this.b + this.c || this.b > this.a + this.c || this.c > this.a + this.b) {
        throw new Error ('triangles violating triangle inequality are illegal');
    } else if (this.a === this.b && this.b === this.c) {
        return 'equilateral';
    } else if (this.a === this.b || this.b === this.c || this.c === this.a) {
        return 'isosceles';
    } else {
        return 'scalene';
    }
};
let triangle = new Triangle(3,5,5);
console.log(triangle.kind());
