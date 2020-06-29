const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
const DELETE_STICKER_CLASS = 'deleteSticker';
const STICKER_BODY_CLASS = 'stickerBody';
const STICKER_CLASS = '.sticker';

const inputStickerBodyEl = document.getElementById('inputStickerBody');
const createStickerBtn = document.getElementById('createStickerBtn');
const stickerListBlockEl = document.getElementById('stickerListBlock');
const stickerTemplate = document.getElementById('stickerTemplate').innerHTML;

createStickerBtn.addEventListener('click',oncreateStickerBtnElClick);
stickerListBlockEl.addEventListener('click',onstickerListBlockElClick);
stickerListBlockEl.addEventListener('blur',onstickerListBlockElBlure, true);

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
}
function changeTemplate(data){
    return stickerTemplate
    .replace('{{id}}' ,data.id)
    .replace('{{body}}' ,data.description);
}
function oncreateStickerBtnElClick(){
    const sticker = {description: inputStickerBodyEl.value}
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
        deleteSticker(e.target.closest(STICKER_CLASS).dataset.id);
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
        changeStickerDescription(e.target.parentNode.dataset.id,e.target.value);
    }
}
function changeStickerDescription(id, newValue){
    let sticker = stickers.find((sticker) => sticker.id === id);
    sticker.description = newValue;
    fetch(`${URL}/${id}`,{
        method:'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sticker),
    })
    renderStickersList(stickers);
}