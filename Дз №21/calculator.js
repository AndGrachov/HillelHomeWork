module.exports = calculator();


function calculator(){
    let baseNum = 0;
        return{
            add: function(secondNum){
                return baseNum += secondNum;
            },
            div: function(secondNum){
                return baseNum /= secondNum;
            },
            mult: function(secondNum){
                return baseNum *= secondNum;
            },
            sub: function(secondNum){
                return baseNum -= secondNum;
            },
            set: function(newFirstNumber){
                baseNum = newFirstNumber;
            }
        }
    }