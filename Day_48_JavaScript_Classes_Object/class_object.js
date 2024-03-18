class Car {
    constructor(brandName, price, color) {
        this.brandName = brandName
        this.price = price
        this.color = color
    }
    display() {
        console.log(`The Car Brand Name = "${this.brandName}" and price = "${this.price}" and color = "${this.color}"`);
    }
}

class BMW extends Car {
    constructor(wheels, power, brandName, price, color) {
        super(brandName, price, color);
        this.wheels = wheels;
        this.power = power;
    }
    display() {
        // this.display();
        console.log(`The Car Brand Name = "${this.brandName}" and price = "${this.price}" and color = "${this.color}" Wheels = "${this.wheels}" and power = "${this.power}" `);
    }
}

// const c1 = new Car('BMW', 89576454523, 'Blue')

const c2 = new BMW(4, 1500, "BMW", 877544, "Blue")
c2.display();
// c1.display()