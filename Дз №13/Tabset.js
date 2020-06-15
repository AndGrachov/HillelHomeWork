class Tabset{
    static VISIBLE_CLASS = 'visible';
    static TABSET_TITLE_CLASS = 'title-tabset';
    static TABSET_BODY_CLASS = 'body-tabset';
    static TABSET_BLOCK_CLASS = 'block-tabset';
    static ACTIVE_TITLE = 'active-title';
    constructor(container){
        this.containerEl = container;
        this.init();
        this.titleCollection = Array.from(this.containerEl.getElementsByClassName('title'));
        this.bodyCollection = Array.from(this.containerEl.getElementsByClassName('body'));
        this.bindEventLictener();
    }
    init(){
        Array.prototype.forEach.call(this.containerEl.children, (el) => el.classList.add(Tabset.TABSET_BLOCK_CLASS));
        Array.prototype.forEach.call(this.containerEl.getElementsByClassName('title'),
        (el,ind,arr) => {
            this.addClass(ind,arr, Tabset.TABSET_TITLE_CLASS);
            if(arr[ind] === arr[0]){
                this.addClass(ind,arr, Tabset.ACTIVE_TITLE);
            }
            if(arr[ind] !== arr[0]){
                this.containerEl.children[0].append(el);
            }
        });
        Array.prototype.forEach.call(this.containerEl.getElementsByClassName('body'),
        (el,ind,arr) =>{ 
            this.addClass(ind,arr, Tabset.TABSET_BODY_CLASS);
            this.containerEl.children[0].append(el);
            if(arr[ind] === arr[0]){
                this.addClass(ind,arr, Tabset.VISIBLE_CLASS);
            }
        });
    }
    bindEventLictener(){
        this.containerEl.addEventListener('click', (e) => this.onTitleElemClick(e));
    }
    onTitleElemClick(e){
        if(e.target.classList.contains(Tabset.TABSET_TITLE_CLASS)){
            this.removeClasses(this.bodyCollection, Tabset.VISIBLE_CLASS);
            this.addClass(this.checkElNum(e.target),this.bodyCollection, Tabset.VISIBLE_CLASS);
            this.removeClasses(this.titleCollection, Tabset.ACTIVE_TITLE);
            this.addClass(this.checkElNum(e.target),this.titleCollection, Tabset.ACTIVE_TITLE);
        }
    }
    checkElNum(el){
        if(el.previousElementSibling === null){
            return 0;
        }
        return  1 + this.checkElNum(el.previousElementSibling);
    }

    addClass(numOfElem, collection, classToAdd){
        collection[numOfElem].classList.add(classToAdd);
    }
    removeClasses(collection, classToAdd){
        collection.forEach((el) => {
            if(el.classList.contains(classToAdd)){
                el.classList.remove(classToAdd);
            }
        })
    }

}