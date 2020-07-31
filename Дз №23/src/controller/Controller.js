const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';

class Controller{
    constructor(){
        this.dealsCollection = new Collection(URL);
        this.dealsCollection.getToDos()
        .then(()=> render());

        this.listView = new List({
            onDelete: this.onDelete.bind(this),
            onChange: this.onChange.bind(this),
            addDeal: this.addDeal.bind(this)
        })
    }
    addDeal(value){
        this.dealsCollection.addNewDeal(value)
        .then(() => render());
    }
    onChange(id){
        this.dealsCollection.chandeDeal(id)
        .then(() => render());
    }
    onDelete(id){
        this.dealsCollection.deleteDeal(id)
        .then(() => render());
    }
    render(){
        this.listView.renderToDoList(this.dealsCollection.toDoList);
    }
}