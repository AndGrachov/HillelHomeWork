
const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos';
import List from '../view/List'
import Collection from '../model/Collection.js'


export default class Controller{
    constructor(){
        this.dealsCollection = new Collection(URL);
        this.dealsCollection.getToDos()
        .then(()=> this.render());

        this.listView = new List({
            onDelete: this.onDelete.bind(this),
            onChange: this.onChange.bind(this),
            addDeal: this.addDeal.bind(this)
        })
    }
    addDeal(value){
        this.dealsCollection.addNewDeal(value)
        .then(() => this.render());
    }
    onChange(id){
        this.dealsCollection.chandeDeal(id)
        .then(() => this.render());
    }
    onDelete(id){
        this.dealsCollection.deleteDeal(id)
        .then(() => this.render());
    }
    render(){
        this.listView.renderToDoList(this.dealsCollection.toDoList);
    }
}