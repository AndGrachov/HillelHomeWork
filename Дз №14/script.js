const UNFINISHED_DEAL = 'unfinishedDeal';
const FINISHED_DEAL = 'finishedDeal';
const VALUE_KEY = '{{value}}';
const STATUS_KEY = '{{status}}'

const dealListEl = document.getElementById('dealList');
const dealTemplate = document.getElementById('dealTemplate').innerHTML;


createDelaArr();

function createDelaArr(){
    dealArr = fetch('https://jsonplaceholder.typicode.com/todos').then((res) => { 
        return res.json();
    }).then((data) => {
        data.forEach((el) =>{
            addDealToList (changeDealKeys(dealTemplate, VALUE_KEY, el['title']), el['completed']); 
            
        });
    });
}
function addDealToList(deal, status){
    if(status){
        deal =  changeDealKeys( deal, STATUS_KEY, FINISHED_DEAL);
    }else{
        deal = changeDealKeys(deal, STATUS_KEY, UNFINISHED_DEAL);
    }
    dealListEl.innerHTML += deal;
}
function changeDealKeys(deal,key, value){
    return deal.replace(key, value);
}