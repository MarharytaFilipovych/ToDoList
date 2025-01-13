function addNewFieldForItem(){
    const list = document.querySelector('.todo-list');
    const li = document.createElement('li');
    li.innerHTML=`<input type="checkbox" >
            <input type="text" name="to-do" placeholder="type your to-do" value="" >`
    changeSizeOfListForm(true);
    list.appendChild(li);
}

function changeSizeOfListForm(increase){
    const listForm = document.querySelector('.list');
    const height =listForm.offsetHeight;
    listForm.style.height= increase?`${height+100}px`: `${height-100}px`;
}

function getHeightOfListForm(){
    const listForm = document.querySelector('.list');
    return listForm.offsetHeight;
}

function updateValueInItem(tag){
    const newItem = tag.value;
   tag.setAttribute('value', newItem);
}

function removeItem(tag){
    if(getHeightOfListForm()>100){
        tag.parentElement.remove();
        changeSizeOfListForm(false);
    }else{
        const textInput = tag.parentElement.querySelector('input[type="text"]');
        textInput.value = "";
    }
}

const LIST = document.querySelector('.todo-list');
const addButton = document.querySelector('.plus');

addButton.addEventListener('click', ()=>{
    addNewFieldForItem();
})

LIST.addEventListener('change', (e)=>{
    const tag = e.target;
    if(tag.matches( 'input[type="text"]' )) updateValueInItem(tag);
    else if(tag.matches('input[type="checkbox"]'))removeItem(tag);
})

