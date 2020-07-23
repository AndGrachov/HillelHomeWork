class Collection{
    constructor(url){
        this.url = url;
        this.toDoList = [];
    }

    getToDos(){
        return fetch(this.url)
               .then((res) => res.json())
               .then(this.setData.bind(this))
    }

    setData(data){
        this.toDoList = data.map((item) =>{
            const deal = new Model(this.url,item);
            return deal;
        })
    }
    addNewDeal(value){
        const newDeal ={url: this.url, isDone:false, title:value};
        return fetch(this.url,{
            method:'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newDeal),
        }).then((res) => res.json())
        .then((data) =>{ 
            const deal = new Model(data.url, {id:data.id, isDone:data.isDone, title:data.title})
            this.toDoList.push(deal);
    });
    }
    chandeDeal(id){
        const deal = this.toDoList.find((item) => item.id == id);
        return deal.change();
    }
    deleteDeal(id){
        const deal = this.toDoList.find((item) => item.id == id);
        return deal.delete()
               .then(this.toDoList = this.toDoList.filter((item) => item !== deal));
    }

}