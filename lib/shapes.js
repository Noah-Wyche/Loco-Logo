class Triangle {
    constructor(points = "150,18 244,182 56,182") {
        this.points = points;
    }

    render(color) {
        return `<polygon points="${this.points}" fill="${color}" />`;
    }
}

class Circle {
    constructor(cx = 150, cy = 100, r = 80) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
    }

    render(color) {
        return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${color}" />`;
    }
}

class Square {
    constructor(x = 50, y = 50, width = 200, height = 200) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    render(color) {
        return `<rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${color}" />`;
    }
}

module.exports = { Triangle, Circle, Square };
