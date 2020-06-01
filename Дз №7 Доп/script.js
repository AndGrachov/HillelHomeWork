const inputFirstNum = document.getElementById('inputFirstNum');
const inputSecondNum = document.getElementById('inputSecondNum');
const mathAction = document.getElementById('mathAction');
const calculateButton = document.getElementById('calculateButton');
const resultField = document.getElementById('resultField');

calculateButton.addEventListener('click', () => onCalculateButtonClick(inputFirstNum.value,inputSecondNum.value,mathAction.value,resultField));

function onCalculateButtonClick(firstNum,secondNum,action,fieldForResult){
   if(checkNums(firstNum,secondNum)){
        const mathResult = caclculate(Number(firstNum),Number(secondNum),action);
        fieldForResult.textContent = `${mathResult}`;
    } else{
        fieldForResult.textContent = 'Вы ввели неверные данные!!';
    };
}
function caclculate (firstNum,secondNum,action){
    let result;
    switch(action){
        case '+': result = sum(firstNum, secondNum); break;
        case '-': result = sumsubtraction(firstNum, secondNum); break;
        case '*': result = multiplication(firstNum, secondNum); break;
        case '/': result = division(firstNum, secondNum); break;
        case 'max': result =  maxNum(firstNum, secondNum); break;
        case 'min': result = minNum(firstNum, secondNum); break;
    };
    return result;
}
function checkNums(firstNum,secondNum){
    if(isNaN(firstNum) || isNaN(secondNum) || firstNum.trim() === '' || secondNum.trim() === ''){
        return false;
    }
    return true;
}
function sum(firstTerm, secondTerm){
    return (`Результат: ${firstTerm} + ${secondTerm} = ${firstTerm + secondTerm}`);
}
function sumsubtraction(minuend, subtrahend){
    return (`Результат: ${minuend} - ${subtrahend} = ${minuend - subtrahend}`);
}
function multiplication(multiplicand, multiplier){
    return (`Результат: ${multiplicand} * ${multiplier} = ${multiplicand * multiplier}`);
}
function division(divident, divisor){
    return (`Результат: ${divident} / ${divisor} = ${divident / divisor}`);
}
function maxNum(a,b){
    return (`Наибольшее число из: ${a} и ${b} = ${Math.max(a, b)}`);
}
function minNum(a,b){
    return (`Наименьшее  число из: ${a} и ${b} = ${Math.min(a, b)}`);
}