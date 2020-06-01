const action = getAction();
const userNumbers = getUserNumbers();

calculate(action, userNumbers);

function getAction(){
    let mathAction;

    do{
         mathAction = prompt('What to do? + - * /');
        
    }while(checkAction(mathAction));

    return mathAction;
}

function checkAction(mathAction){
       switch(mathAction){
        case '+':
        case '-':
        case '*':
        case '/': return false;
       };
       
       return true;
}

function getUserNumbers(){
    const operands = getArrOfNumbers();
    const correctOperands = operands.filter(checkOperand);
    
    return correctOperands;
}

function getArrOfNumbers(){
    const stringOfOperands = getStringOfOperands();
    let numbers = stringOfOperands.split(' ');
    
    numbers.forEach(function(elem, index){
        numbers[index] = +elem;
    });

    return numbers;
}

function getStringOfOperands(){
    let userInput;

    do{
        userInput = prompt('Введите числа');
    }while(checkUserInput(userInput));
    
    return userInput;
}

function checkUserInput(userInput){
    return (userInput.trim() === '' || userInput === null);
}

function checkOperand(element){
    return !(isNaN(element));
}

function calculate(operation, operands){
    switch(operation){
        case '+': sum(operands); break;
        case '*': multiplication(operands); break;
        case '-': subtraction(operands); break;
        case '/': division(operands); break;
    }
}

function sum(numbers){
    let sumResult = numbers[0];
    let operandString = `${numbers[0]}`;
    
    for(let i = 1; i < numbers.length; i++){
         sumResult += numbers[i];
         operandString += ` + ${numbers[i]}`;
    };
    console.log(`Результат вычислений: ${operandString} = ${sumResult}`);
    
    return sumResult;
};

function subtraction(numbers){
    let subResult = numbers[0];
    let operandString = `${numbers[0]}`;
    
    for(let i = 1; i < numbers.length; i++){
        subResult -= numbers[i];
        operandString += ` - ${numbers[i]}`;
    };
    console.log(`Результат вычислений: ${operandString} = ${subResult}`);
    
    return subResult;
};

function multiplication(numbers){
    let multResult = numbers[0];
    let operandString = `${numbers[0]}`;
    
    for(let i = 1; i < numbers.length; i++){
        multResult *= numbers[i];
        operandString += ` * ${numbers[i]}`;
    };
    console.log(`Результат вычислений: ${operandString} = ${multResult}`);
    
    return multResult;
};

function division(numbers){
    let divResult = numbers[0];
    let operandString = `${numbers[0]}`;
    
    for(let i = 1; i < numbers.length; i++){
        divResult /= numbers[i];
        operandString += ` / ${numbers[i]}`
    };
    console.log(`Результат вычислений: ${operandString} = ${divResult}`);
    
    return divResult;
}

