const TITLES_URL = 'https://jsonplaceholder.typicode.com/albums';
const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos?albumId=';
const TITLE_ATTRIBUTE = 'title';
const ID_ATTRIBUTE = 'id';
const URL_ATTRIBUTE = 'url';


const titleTemplate = document.getElementById('titleTemplate').innerHTML;
const titlesListEl = document.getElementById('titlesList');
const photoTemplate = document.getElementById('photoTemplate').innerHTML;
const photosBlock = document.getElementById('photosBlock');

createTitlesList();


titlesListEl.addEventListener('click', (e) =>{
    photosBlock.innerHTML = '';
    createPhotosList(e.target.dataset.id)
});

function createTitlesList(){
     fetch(TITLES_URL)
    .then((res) => res.json())
    .then((data) =>{
        createList(data,titlesListEl,titleTemplate,TITLE_ATTRIBUTE,ID_ATTRIBUTE );
        createPhotosList(titlesListEl.firstElementChild.dataset.id);
    });
}
function createPhotosList(albumId){
    fetch(PHOTOS_URL + albumId)
    .then((res) => res.json())
    .then((data) =>createList(data,photosBlock,photoTemplate,TITLE_ATTRIBUTE,URL_ATTRIBUTE));
}
function createList(data, listEl, templateEl, titleAttribute, additionalAttribute){
    data.forEach(element => {
        listEl.innerHTML += templateEl
        .replace(`{{${titleAttribute}}}`, element[titleAttribute])
        .replace(`{{${additionalAttribute}}}`, element[additionalAttribute]);
    });
}