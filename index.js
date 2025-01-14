import {listForm} from "./listForm.js";

function saveToLocalStorage(){
    localStorage.setItem('items', JSON.stringify(myListForm.getValues()));
}

const myListForm = new listForm();
const addButton = document.querySelector('.plus');

addButton.addEventListener('click', ()=>{
    myListForm.addField("");
});

window.addEventListener('beforeunload', () => {
    saveToLocalStorage();
});

window.addEventListener('load',()=>{
    const retrievedItems = JSON.parse(localStorage.getItem('items'));
    myListForm.removeFirstField();
    if(retrievedItems)retrievedItems.forEach(item=>myListForm.addField(item));
})

myListForm.LIST.addEventListener('change', (e)=>{
    const tag = e.target;
    if(tag.matches( 'input[type="text"]' )) myListForm.updateField(tag);
    else if(tag.matches('input[type="checkbox"]'))myListForm.removeField(tag);
})


