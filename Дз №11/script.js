'use strict'

const SIZE_SMALL = {price: 50, callories: 20};
const SIZE_BIG = {price: 100, callories: 40};
const SIZE_MED = {price: 75, callories: 30};
const TOPPING_CHEESE = {price: 10, callories: 20}
const TOPPING_SALAD = {price: 20, callories: 5}
const TOPPING_POTATO = {price: 15, callories: 10}
const TOPPING_SEASONIG = {price: 15, callories: 0} 
const TOPPING_MAYO = {price: 20, callories: 5}

function Hamburger(size){
    this.burgerPrice = [size['price']];
    this.burgerCallories = [size['callories']];
};

Hamburger.prototype.addTopping = function(topping){
    this.burgerPrice.push(topping['price']);
    this.burgerCallories.push(topping['callories']);
}
Hamburger.prototype.getPrice = function(){
    return this.burgerPrice.reduce((acc, current) => acc + current);
}
Hamburger.prototype.getCallories = function(){
    return this.burgerCallories.reduce((acc, current) => acc + current);
}

const smallBurger = new Hamburger(SIZE_SMALL);
smallBurger.addTopping(TOPPING_CHEESE);
smallBurger.addTopping(TOPPING_SALAD);
console.log('Call ' + smallBurger.getCallories());
console.log('Price ' + smallBurger.getPrice());
console.log('//////////////////////////////////////////////////////////');
const bigBurger = new Hamburger(SIZE_BIG);
bigBurger.addTopping(TOPPING_MAYO);
bigBurger.addTopping(TOPPING_POTATO);
bigBurger.addTopping(TOPPING_CHEESE);
console.log('Callories ' + bigBurger.getCallories());
console.log('Price ' + bigBurger.getPrice());