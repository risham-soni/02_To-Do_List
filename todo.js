const inputBox=document.querySelector('.input-box');
const addBtn=document.querySelector('.input-btn');
const listContainer=document.querySelector('.list-container');

addBtn.addEventListener('click',()=>{
    const inputText=inputBox.value;
    if(inputText===''){
        alert('You must write something!');
    }
    else{
        let li=document.createElement('li');
        const currentTime = new Date().toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit', 
            hour12: true 
        });
        li.innerHTML=`${inputText}`;     
        listContainer.append(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.append(span);
    }
    inputBox.value='';
    saveData();
})
listContainer.addEventListener('click',(event)=>{
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked');
        saveData();
    }
    else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
showTask();