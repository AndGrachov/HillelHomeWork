const figureEl = document.getElementById('figure');
const colorInput = document.getElementById('color');
const figureSelecor = document.getElementById('figureSelecor');

colorInput.addEventListener('change', changeColor);
figureSelecor.addEventListener('change', changeFigure);
document.addEventListener('keydown', moveFigure);

function changeColor(){
    figureEl.style.backgroundColor = colorInput.value;
}
function changeFigure(){
    clearClasses();
    changeClass();
}
function clearClasses(){
    figureEl.classList.remove('square','circle','rectangle');
}
function changeClass(){
    switch(figureSelecor.value){
        case 'square': figureEl.classList.add('square'); break;
        case 'circle': figureEl.classList.add('circle'); break;
        case 'rectangle': figureEl.classList.add('rectangle'); break;
    }
}
function moveFigure(e){
    switch(e.code){
        case "ArrowUp":
            if(figureEl.offsetTop >= 10){ 
                moveUpOrDown(-10);
            }; 
            break;
        case "ArrowDown": moveUpOrDown(10); break;
        case "ArrowLeft": 
            if(figureEl.offsetLeft >= 10){
                moveLeftOrRight(-10);
            };
            break;
        case "ArrowRight": moveLeftOrRight(10); break;
    };
}
function moveUpOrDown(direction){
    figureEl.style.top = figureEl.offsetTop + direction + 'px';
}
function moveLeftOrRight(direction){
    figureEl.style.left = figureEl.offsetLeft + direction + 'px';
}
