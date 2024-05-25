function createCalculator(firstNum){
    let result = firstNum;
    return{
        sum: function(secondNum){
            return result += secondNum;
        },
        div: function(secondNum){
            return result /= secondNum;
        },
        mult: function(secondNum){
            return result *= secondNum;
        },
        sub: function(secondNum){
            return result -= secondNum;
        },
        set: function(newFirstNumber){
            result = newFirstNumber;
        }
    }
}

// const calc = createCalculator(10);
// console.log(calc.sum(5)); 
// console.log(calc.mult(10)); 
// console.log(calc.sub(40)); 
// console.log(calc.div(10)); 
// calc.set(100);
// console.log(calc.sum(10));