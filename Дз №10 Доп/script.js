const person = {
    name: 'Alex',
    surname: 'Smith',
    phone:'+380 00 000 00 00'
};

const helloTemplate = createTemplate('Hello, {{name}}!');
console.log(helloTemplate(person));

const detailsTemplate = createTemplate('{{name}} {{surname}}, phone {{phone}}')
console.log(detailsTemplate(person));

function createTemplate(template){
    return function(dataToChangeObj){
       const dataToChangeKeys = getObjKeys(dataToChangeObj);
       return  getRightMessage(template, dataToChangeKeys, dataToChangeObj);
    }
}
function getObjKeys(obj){
    return Object.keys(obj);
}
function getRightMessage(template, dataToChangeProperties, objWithCorrectData){
    dataToChangeProperties.forEach(function(property){                 
        if(template.includes(`{{${property}}}`)){
            template =  getModifiedMessage(template, property, objWithCorrectData);  
         }   
     });
     return template;
}
function getModifiedMessage(template, property, objWithCorrectData){
    return template.replace(`{{${property}}}`, objWithCorrectData[property]);
}

