function escreva(x,c){
    console.log(arguments[0])
    console.log(arguments[1])
}
escreva(1,2)

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.model);
  // expected output: "Eagle"
  