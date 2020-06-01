const firstNum = +prompt('Введите первое число');
const secondNum = +prompt('Введите второе число');

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
sum(firstNum, secondNum);
sumsubtraction(firstNum, secondNum);
multiplication(firstNum, secondNum);
division(firstNum, secondNum);