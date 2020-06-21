const TITLES_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';
const TITLE_ATTRIBUTE = 'title';
const ID_ATTRIBUTE = 'id';
const URL_ATTRIBUTE = 'url';


const titleTemplateEl = document.getElementById('titleTemplate').innerHTML;
const titlesListEl = document.getElementById('titlesList');
const photoTemplateEl = document.getElementById('photoTemplate').innerHTML;
const photosBlock = document.getElementById('photosBlock');

createTitlesList();
const timerId = setInterval(() => {
    if(titlesListEl.firstElementChild){
        createPhotosList(titlesListEl.firstElementChild.dataset.id)
        clearInterval(timerId);
    }
}, 1000);


titlesListEl.addEventListener('click', (e) =>{
    photosBlock.innerHTML = '';
    createPhotosList(e.target.dataset.id)
});

function createTitlesList(){
     fetch(TITLES_URL)
    .then((res) => res.json())
    .then((data) =>createList(data,titlesListEl,titleTemplateEl,TITLE_ATTRIBUTE,ID_ATTRIBUTE ));
}
function createPhotosList(albumId){
    fetch(PHOTOS_URL + albumId)
    .then((res) => res.json())
    .then((data) =>createList(data,photosBlock,photoTemplateEl,TITLE_ATTRIBUTE,URL_ATTRIBUTE));
}
function createList(data, listEl, templateEl, firstAttribute, secondAttribute){
    data.forEach(element => {
        listEl.innerHTML += templateEl
        .replace(`{{${firstAttribute}}}`, element[firstAttribute])
        .replace(`{{${secondAttribute}}}`, element[secondAttribute]);
    });
}