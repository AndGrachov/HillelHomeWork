const FINISHED_DEAL = 'finishedDeal';
const VALUE_KEY = '{{value}}';
const STATUS_KEY = '{{status}}';
const ID_KEY = '{{id}}';
const TODOLIST_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';
const DEAL_CLASS = 'deal';
const DELETE_DEAL_CLASS = 'deleteDeal';
const DATA_SELECTOR_ID = 'id';

const dealTemplate = $('#dealTemplate').text();
const inputFieldEl = $('#inputField');
const dealListEl = $('#dealList');

$('#addButton').on('click',onAddButtonClick);
dealListEl.on('click',`.${DELETE_DEAL_CLASS}`,onDealListElClickToDelete);
dealListEl.on('click',`.${DEAL_CLASS}`,onDealListElClickToChange);

let dealsList = [];


init();


function init(){
     fetch(TODOLIST_URL)
    .then((res) =>  res.json())
    .then(setTodos)
    .then(renderToDoList)
}
function setTodos(data){
    return(dealsList = data);
}
function renderToDoList(deals){
    console.log(deals);
    dealListEl.html(deals.map(changeDealKeys).join(''))
}
function changeDealKeys(deal){
    return dealTemplate
    .replace(ID_KEY, deal.id)
    .replace(STATUS_KEY, getRightClass(deal.isDone))
    .replace(VALUE_KEY, deal.title);
}
function getRightClass(status){
    if(status){
        return FINISHED_DEAL;
    }
        return  '';
}
function onDealListElClickToDelete(e){
    deleteDeal($(e.target.closest(`.${DEAL_CLASS}`)).data(DATA_SELECTOR_ID));
    e.stopPropagation();
}
function deleteDeal(dealId){
    fetch(TODOLIST_URL +'/' + dealId, {
        method: 'DELETE',
    });
    dealsList = dealsList.filter((value) => value.id != dealId);
    renderToDoList(dealsList);
    
}
function onDealListElClickToChange(e){
    changeStatusOfDeal($(e.target).data(DATA_SELECTOR_ID));
}
function changeStatusOfDeal(id){
    let deal = dealsList.find((deal) => deal.id == id);
    deal.isDone = !deal.isDone;
    fetch(TODOLIST_URL +'/' + id, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(deal),
    })
    renderToDoList(dealsList);
}
function onAddButtonClick(){
    sendNewProperty(inputFieldEl.val());
    inputFieldEl.val('');
}
function sendNewProperty(titleValue){
    const todo = { title:titleValue, isDone: false}
    fetch(TODOLIST_URL, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(todo),
    })
    .then((res) => res.json())
    .then((data) => {
        dealsList.push(data);
        renderToDoList(dealsList);
    })
}
