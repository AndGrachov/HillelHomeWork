
const mathAction = getAction();
const numberOfOperands = gerNumOfOperands();
const operands = getOperands(numberOfOperands);

calculate(mathAction, operands);


function getAction(){
let action;
do{
  action = prompt ('Какое математическое действие вы хотите выполнить? +, -, *, /');
switch(action){
    case '+':
    case '-':
    case '*':
    case '/':break;
    default: action = ''; 
    alert("Вы ввели не допустимое значение"); 
};
} while(!action);
    return action;
};

function gerNumOfOperands(){
    let numOfOperands;
do{ 
    numOfOperands = +prompt ('Сколько чисел вы хотите использовать?');
} while(!(numOfOperands > 1));
    return numOfOperands;
};

function getOperands(numOfOperands){
    let arrOfOperands = [];
for(let i = 0; i < numOfOperands; i++){
        do{
            arrOfOperands[i] = prompt(`Введите число №${i + 1}`);
            console.log((!(Number(arrOfOperands[i]))));
        } while( arrOfOperands[i] === null || arrOfOperands[i].trim() === '' || (!(Number(arrOfOperands[i]))) && !(arrOfOperands[i] ==='0'));
        arrOfOperands[i] = Number(arrOfOperands[i]);
}
    return arrOfOperands;
};

function calculate(action, numbers){
    switch(action){
        case '+':sum(numbers);break;
        case '-':subtraction(numbers);break;
        case '*':multiplication(numbers);break;
        case '/':division(numbers);break;
    }
};

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