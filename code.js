






const cars = ['bmw', 'mazda', 'nissan'];
console.log('cars >>> ', cars);

const cars2 = new Array('bmw', 'mazda', 'nissan');
console.log('cars2 >>> ', cars2);

const testArray = new Array(3).fill('x');
console.log('testArray >>> ', testArray);





const details = {
	1: {name: 'Pepperoni', price: 200},
	2: {name: 'Salami', price: 300},
  3: {name: 'Vegan', price: 400},
  4: {name: 'Meat', price: 500},
  5: {name: 'Saussage', price: 700},
}

const pizza = Array.from({ length: 5 }, 
  (_, i) => (`Пицца ${details[i + 1].name}. Стоимость: ${details[i + 1].price}.`));

console.log('pizza >> ', pizza);