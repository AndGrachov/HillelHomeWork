
export default class Model{
    constructor(url,data){
        this.url = url;
        Object.assign(this,data)

    }
    change(){
        this.isDone = !this.isDone
        return fetch(this.url + '/' + this.id,{
            method: 'PUT',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(this)
        })
    }
    delete(){
       return fetch(this.url + '/' + this.id,{
            method:'DELETE'
        })
    }
}