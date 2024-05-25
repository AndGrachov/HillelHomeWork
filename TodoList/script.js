const inputDealEl = document.getElementById('inputDeal');
const dealListEl = document.getElementById('dealList');
const dealTemplate = document.getElementById('dealTemplate').innerHTML;
const deleteDealEl = document.getElementById('deleteDeal');


document.getElementById('addDeal').addEventListener('click', onAddDealBtnClick);
dealListEl.addEventListener('click', onDealListElClick);


function onAddDealBtnClick(){
    addDealToList (dealTemplate.replace('{{value}}', inputDealEl.value)); 

    clearInput();
}
function addDealToList(deal){
    dealListEl.innerHTML += deal;
}
function clearInput(){
    inputDealEl.value = '';
}
function onDealListElClick(e){
    if(e.target.id === 'deleteDeal'){
        deleteDeal(e.target.parentNode);
    }else if(e.target.nodeName === 'LI'){
        changeStatusOfDeal (e.target);
    };
}
function deleteDeal(deal){
    deal.remove();
}
function changeStatusOfDeal(deal){
    deal.classList.toggle('finishedDeal');
}