let CreatedArray = ["a", "b", "c", "d"];
for (let newArray of CreatedArray) {
    console.log(newArray)
}

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}


function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

console.log(sum(...numbers));


function Car(make, model) {
  this.make = make;
  this.model = model;


}

Car.prototype.start = function() {
  console.log('Engine started!');
};


let myCar = new Car('Toyota', 'Camry');

// metodis gamodzaxeba
myCar.start(); 
