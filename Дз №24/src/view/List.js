const FINISHED_DEAL = 'finishedDeal';

export default class List{
    constructor(config){
        this.config = config;
        this.$dealTemplate = $('#dealTemplate').text();
        this.$inputFieldEl = $('#inputField');
        this.$dealListEl = $('#dealList');

        this.$dealListEl.on('click', 'span', this.onDeleteBtnClick.bind(this));
        this.$dealListEl.on('click', 'div', this.onChangeBtnClick.bind(this));
        $('#addButton').on('click',this.onAddButtonClick.bind(this));
    }
    renderToDoList(deals){
        console.log(deals);
        this.$dealListEl.html(deals.map(this.changeDealKeys.bind(this)).join(''))
    }
    changeDealKeys(deal){
        return this.$dealTemplate
            .replace('{{id}}', deal.id)
            .replace('{{status}}', this.getRightClass(deal.isDone))
            .replace('{{value}}', deal.title);
    }
    getRightClass(status){
        if(status){
            return FINISHED_DEAL;
        }
            return  '';
    }
    onDeleteBtnClick(event){
        const id = $(event.target).closest('.deal').data('id');
        this.config.onDelete(id);
        event.stopPropagation();
    }
    onChangeBtnClick(event){
        const id = $(event.target).data('id');
        this.config.onChange(id);
    }
    onAddButtonClick(){
        this.config.addDeal(this.$inputFieldEl.val());
        this.$inputFieldEl.val('');
    }
}