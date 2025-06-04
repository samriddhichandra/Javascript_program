class Vehicle 
{
    constructor(name,type,color,engine, price)
{
    this.name = name;
    this.type = type;
    this.color = color;
    this.engine = engine;
    this.price = price;
}
showDetails() {
    console.log(`Vehicle Name: ${this.name}`);
    console.log(`Type: ${this.type}`);
    console.log(`Color: ${this.color}`);
    console.log(`Engine: ${this.engine}`);
    console.log(`Price: ₹${this.price}`);
    console.log('-------------------------');
  }
}
const vehicle1 = new Vehicle("Honda City", "Sedan", "White", "Petrol", 1200000);
const vehicle2 = new Vehicle("Toyota Fortuner", "SUV", "Silver", "Diesel", 4000000);
vehicle1.showDetails();
vehicle2.showDetails();

