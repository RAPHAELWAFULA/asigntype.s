interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  constructor(
    public make: string,
    public model: string,
    public year: number
  ) {}

  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance
const myCar = new Car("Toyota", "Corolla", 2022);

// Call the start method
myCar.start();
