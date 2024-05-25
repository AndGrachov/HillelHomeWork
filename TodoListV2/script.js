const UNFINISHED_DEAL = 'unfinishedDeal';
const FINISHED_DEAL = 'finishedDeal';
const VALUE_KEY = '{{value}}';
const STATUS_KEY = '{{status}}'

const dealListEl = document.getElementById('dealList');
const dealTemplate = document.getElementById('dealTemplate').innerHTML;


fillInDealList();

function fillInDealList(){
    dealArr = fetch('https://jsonplaceholder.typicode.com/todos').then((res) => { 
        return res.json();
    }).then((data) => {
        data.forEach((el) =>{
            addDealToList (changeDealKeys(dealTemplate, VALUE_KEY, el['title']), el['completed']); 
            
        });
    });
}
function addDealToList(deal, status){
    deal = addRightClass(deal, status);
    dealListEl.innerHTML += deal;
}
function addRightClass(deal, status){
    if(status){
        return changeDealKeys( deal, STATUS_KEY, FINISHED_DEAL);
    }else{
        return changeDealKeys(deal, STATUS_KEY, UNFINISHED_DEAL);
    }
}
function changeDealKeys(deal,key, value){
    return deal.replace(key, value);
}