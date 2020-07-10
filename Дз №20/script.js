const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
const DELETE_STICKER_CLASS = 'deleteSticker';
const STICKER_BODY_CLASS = 'stickerBody';
const STICKER_CLASS = 'sticker';
const RESIZABLE_CLASS = 'ui-resizable-handle';
const STICKER_HEAD_CLASS = 'stickerHead';

const inputStickerBodyEl = document.getElementById('inputStickerBody');
const createStickerBtn = document.getElementById('createStickerBtn');
const stickerListBlockEl = document.getElementById('stickerListBlock');
const stickerTemplate = document.getElementById('stickerTemplate').innerHTML;

createStickerBtn.addEventListener('click',oncreateStickerBtnElClick);
stickerListBlockEl.addEventListener('click',onstickerListBlockElClick);
stickerListBlockEl.addEventListener('blur',onstickerListBlockElBlure, true);
stickerListBlockEl.addEventListener('mouseup',onstickerListBlockElMouseUp);

let stickers = [];

init();

function init(){
    getStickers();
}
function getStickers(){
    fetch(URL)
    .then((res) => res.json())
    .then(setStickersList)
    .then(renderStickersList);
}
function setStickersList(data){
    return (stickers = data)
}
function renderStickersList(data){
    console.log(data);
    stickerListBlockEl.innerHTML = data.map(changeTemplate).join('');
    $('.sticker').draggable({ containment: "parent" }).resizable();;
}
function changeTemplate(data){
    return stickerTemplate
    .replace('{{id}}' ,data.id)
    .replace('{{body}}' ,data.description)
    .replace('{{top}}' ,data.y)
    .replace('{{left}}' ,data.x)
    .replace('{{width}}' ,data.width)
    .replace('{{height}}' ,data.height)
}
function oncreateStickerBtnElClick(){
    const sticker = {
        description: inputStickerBodyEl.value,
        x:getRandom(),
        y:getRandom(),
        width:300,
        height:200
    };
    fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sticker),
    })
    .then((res) => res.json())
    .then((data) =>{
        stickers.push(data);
        renderStickersList(stickers);
    })

}
function onstickerListBlockElClick(e){
    if(e.target.classList.contains(DELETE_STICKER_CLASS)){
        deleteSticker(e.target.closest('.' + STICKER_CLASS).dataset.id);
    }
     
}
function deleteSticker(id){
    fetch(`${URL}/${id}`,{
        method: 'DELETE'
    })
    stickers = stickers.filter((sticker) => sticker.id !==id);
    renderStickersList(stickers);

}
function onstickerListBlockElBlure(e){
    if(e.target.classList.contains(STICKER_BODY_CLASS)){
        changeSticker(e.target.parentNode.dataset.id,e.target.value);
    }
}
function onstickerListBlockElMouseUp(e){
    const element = e.target; 
    if(checkRightClasses(element)){
        if(!element.dataset.id){ 
            const computedStyle = getComputedStyle(element.closest('.' + STICKER_CLASS));
            const changedSticker =  fillInChangedSticker(computedStyle);
            changeSticker(element.closest('.' + STICKER_CLASS).dataset.id,changedSticker);
        }else{
            const computedStyle = getComputedStyle(element);
            const changedSticker =  fillInChangedSticker(computedStyle);
            changeSticker(element.dataset.id,changedSticker);
        }
    };
}
function checkRightClasses(element){
    return (element.classList.contains(STICKER_CLASS) 
    || element.classList.contains(RESIZABLE_CLASS) 
    || element.classList.contains(STICKER_HEAD_CLASS))
} 
function fillInChangedSticker(computedStyle){
  return {
        x:computedStyle.left.replace('px',''),
        y:computedStyle.top.replace('px',''),
        width:computedStyle.width.replace('px',''),
        height:computedStyle.height.replace('px','')
    };
}
function changeSticker(id, newValue){
    let sticker = stickers.find((sticker) => sticker.id == id);
    if(typeof newValue === 'object'){
        sticker.x = newValue.x;
        sticker.y = newValue.y;
        sticker.width = newValue.width;
        sticker.height = newValue.height;
    }else{
        sticker.description = newValue;
    }
    fetch(`${URL}/${id}`,{
        method:'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sticker),
    })
    renderStickersList(stickers);
}
function getRandom() {
    return Math.round(100 * Math.random());
  }