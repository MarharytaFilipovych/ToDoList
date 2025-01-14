export class listForm{

    constructor() {
        this.LIST = document.querySelector('.list');
        this.ul = document.querySelector('.todo-list');
    }

     addField(item){
        const li = document.createElement('li');
        li.innerHTML=`<input type="checkbox" >
            <input type="text" name="to-do" placeholder="type your to-do" value=${item} >`
        this.changeSize(true);
         this.ul.appendChild(li);
    }

    changeSize(increase){
        this.LIST.style.height= increase?`${this.LIST.offsetHeight+100}px`: `${this.LIST.offsetHeight-100}px`;
    }

    getHeight(){
        return this.LIST.offsetHeight;
    }

   updateField(tag){
        const newItem = tag.value;
        tag.setAttribute('value', newItem);
    }

    removeField(tag){
        if(this.getHeight()>100){
            tag.parentElement.remove();
            this.changeSize(false);
            this.updateIndexes();
        }else{
            const textInput = tag.parentElement.querySelector('input[type="text"]');
            textInput.value = "";
        }
    }

    updateIndexes() {
        const listItems = this.ul.querySelectorAll('li');
        let i = 0;
        listItems.forEach(item => item.setAttribute('data-index', `${i+1}`));
    }

    removeFirstField(){
        this.ul.querySelector('li').remove();
        this.changeSize(false);
    }

    getValues(){
        const values=[];
        this.ul.querySelectorAll('input[type="text"]').forEach(input => values.push(input.value));
        return values;
    }


}