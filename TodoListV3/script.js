const UNFINISHED_DEAL = 'unfinishedDeal';
const FINISHED_DEAL = 'finishedDeal';
const VALUE_KEY = '{{value}}';
const STATUS_KEY = '{{status}}';
const ID_KEY = '{{id}}';
const TODOLIST_URL = 'https://jsonplaceholder.typicode.com/todos';
const DEAL_CLASS = 'deal';
const DELETE_DEAL_CLASS = 'deleteDeal';


const dealListEl = document.getElementById('dealList');
const dealTemplate = document.getElementById('dealTemplate').innerHTML;
const inputField = document.getElementById('inputField');
const addButton = document.getElementById('addButton');
let dealsList = [];
let dealToAdd ={};


fillInDealList();
dealListEl.addEventListener('click', onDealListElClick);
addButton.addEventListener('click',onAddButtonClick);


function fillInDealList(){
     fetch(TODOLIST_URL)
    .then((res) =>  res.json())
    .then(createToDoList);
}
function createToDoList(deals){
    dealsList = deals;
    dealsList.forEach((el) =>{
        dealToAdd['body'] = changeDealKeys(dealTemplate, VALUE_KEY, el['title']);
        dealToAdd['status'] = el['completed'];
        dealToAdd['id'] = el['id'];
        addDealToList(dealToAdd); 
        
    });
}
function onDealListElClick(e){
    let element = e.target;
    if(element.classList.contains(DELETE_DEAL_CLASS)){
        deleteDeal(element.parentNode);
        deleteDealOnServer(element.parentNode.dataset.id);
    }else if(element.classList.contains(DEAL_CLASS)){
        changeStatusOfDeal(element);
    };
}
function changeStatusOfDeal(element){
    changeStatus(element);
    if(element.classList.contains(FINISHED_DEAL)){
        changeStatusOnServer(element.dataset.id, dealsList[element.dataset.id - 1]['title'],true)
    }else{
        changeStatusOnServer(element.dataset.id, dealsList[element.dataset.id - 1]['title'],false)
    }
}
function deleteDealOnServer(dealId){
    fetch(TODOLIST_URL +'/' + dealId, {
        method: 'DELETE',
    })
    .then((res) => res.json())
    .then((data) => console.log(data));

}
function changeStatusOnServer(dealId, titleValue ,status){
    fetch(TODOLIST_URL +'/' + dealId, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            title: titleValue,
            completed: status
        }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
function onAddButtonClick(){
    sendNewProperty(inputField.value);
    inputField.value = '';
}
function sendNewProperty(titleValue){
    fetch(TODOLIST_URL, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            title:titleValue,
             completed: false
        }),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        dealToAdd['body'] = changeDealKeys(dealTemplate, VALUE_KEY, data['title']);
        dealToAdd['status'] = data['completed'];
        dealToAdd['id'] = data['id'];
        dealsList.push(dealToAdd);
        addDealToList(dealToAdd);
    })
    ;

}
function deleteDeal(deal){
    dealsList = dealsList.filter((value) => value['id'] != deal.dataset.id);
    deal.remove();
}
function changeStatus(deal){
            deal.classList.toggle(FINISHED_DEAL);
}
function addDealToList(deal){
    deal['body'] = changeDealKeys(deal['body'],ID_KEY, deal['id'])
    deal['body'] = addRightClass(deal['body'], deal['status']);
    dealListEl.innerHTML += deal['body'];
}
function addRightClass(deal, status){
    if(status){
        return changeDealKeys( deal, STATUS_KEY, FINISHED_DEAL);
    }else{
        return changeDealKeys(deal, STATUS_KEY, '');
    }
}
function changeDealKeys(deal,key, value){
    return deal.replace(key, value);
}