const mathAction = prompt ('Какое математическое действие вы хотите выполнить?');

if(mathAction =='cos' || mathAction =='sin' || mathAction =='tan'){
    const singleNum = +prompt('Введите число');
    switch(mathAction){
        case 'sin': sinNum(singleNum); break;
        case 'cos': cosNum(singleNum); break;
        case 'tan': tanNum(singleNum); break;
    };   
} else{
    const firstNum = +prompt('Введите первое число');
    const secondNum = +prompt('Введите второе число');
    switch(mathAction){
        case '+': sum(firstNum, secondNum); break;
        case '-': sumsubtraction(firstNum, secondNum); break;
        case '*': multiplication(firstNum, secondNum); break;
        case '/':division(firstNum, secondNum); break;
        case 'max': maxNum(firstNum, secondNum); break;
        case 'min': minNum(firstNum, secondNum); break;
        case '**': exponentiation(firstNum, secondNum); break;
        default: console.log('Вы ввели неверный математический символ!!!!');
    };
};


function sum(firstTerm, secondTerm){
    const sumResult = firstTerm + secondTerm;
    console.log(`Результат: ${firstTerm} + ${secondTerm} = ${sumResult}`);
    return sumResult;
}
function sumsubtraction(minuend, subtrahend){
    const subtractionResult = minuend - subtrahend;
    console.log(`Результат: ${minuend} - ${subtrahend} = ${subtractionResult}`);
    return subtractionResult;
}
function multiplication(multiplicand, multiplier){
    const multiplicationResult = multiplicand * multiplier;
    console.log(`Результат: ${multiplicand} * ${multiplier} = ${multiplicationResult}`);
    return multiplicationResult;
}
function division(divident, divisor){
    const divisionResult = divident / divisor;
    console.log(`Результат: ${divident} / ${divisor} = ${divisionResult}`);
    return divisionResult;
}
function maxNum(a,b){
    const maxNumResult = Math.max(a, b);
    console.log(`Наибольшее число из: ${a} и ${b} = ${maxNumResult}`);
    return maxNumResult;
}
function minNum(a,b){
    const minNumResult = Math.min(a, b);
    console.log(`Наименьшее  число из: ${a} и ${b} = ${minNumResult}`);
    return minNumResult;
}
function cosNum(a){
    const cosNumResult = Math.cos(a);
    console.log(`Косинус числа: ${a}  = ${cosNumResult}`);
    return cosNumResult;
}
function sinNum(a){
    const sinNumResult = Math.sin(a);
    console.log(`Синус числа: ${a}  = ${sinNumResult}`);
    return sinNumResult;
}
function tanNum(a){
    const tanNumResult = Math.tan(a);
    console.log(`Тангенс числа: ${a}  = ${tanNumResult}`);
    return tanNumResult;
}
function exponentiation (a,b){
    const expResult = a ** b;
    console.log(`Число ${a} в степени ${b}  = ${expResult}`);
    return expResult;
}