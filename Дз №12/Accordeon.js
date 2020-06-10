function Accordeon(list){
    if(list.children.length === 0){
        console.log('У вас нет элементов для создания акардеона')
        return;
    }
    this.listEl = list;
    this.showBody();
}
Accordeon.VISIBLE_CLASS = 'visible-class';
Accordeon.arrOfBody = Array.from(document.getElementsByClassName('body'));

Accordeon.prototype.showBody = function(){
    this.listEl.addEventListener('click', this.onBodyElClick.bind(this));
}
Accordeon.prototype.onBodyElClick = function(e){
    if(e.target.classList.contains('title')){
        if(e.target.nextElementSibling.classList.contains(Accordeon.VISIBLE_CLASS)){
            this.deleteVisbleClass(e.target.nextElementSibling);
        }else{
            Accordeon.arrOfBody.forEach(element => {
                if(element.classList.contains(Accordeon.VISIBLE_CLASS)){
                    this.deleteVisbleClass(element);
                }
            });
        this.addVisibleClass(e.target.nextElementSibling);
        }
    }
}
Accordeon.prototype.deleteVisbleClass = function(element){
    element.classList.remove(Accordeon.VISIBLE_CLASS);

}
Accordeon.prototype.addVisibleClass = function(element){
    element.classList.toggle(Accordeon.VISIBLE_CLASS);
}