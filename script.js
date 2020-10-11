const notesEl = document.querySelector('.notes')

const addBtn = document.querySelector('.add');

const notesContainerEl = document.querySelector('.notes-container')



addBtn.addEventListener("click",()=>{
    addNewNote();
    });

function addNewNote(){
    const newNoteToAdd = document.createElement('div');
    newNoteToAdd.classList.add('notes');
    newNoteToAdd.innerHTML=`<div class="tools-bar">
        <button id="edit-btn" class="edit"><i class="fas fa-edit"></i></button>
        <button id="delete-btn" class="delete"><i class="fas fa-trash"></i></button></div>
        <div class="main"></div>
        <textarea class="hidden" name="write-note" id="" cols="30" rows="10"></textarea>`;

    const editBtn = newNoteToAdd.querySelector('.edit');
    const deleteBtn = newNoteToAdd.querySelector('.delete');

    const main = newNoteToAdd.querySelector('.main');
    const textArea = newNoteToAdd.querySelector('textarea');
    
    editBtn.addEventListener("click", ()=>{
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        editBtn.classList.toggle('active');
        textArea.focus();
    });

    deleteBtn.addEventListener("click",(e)=>{
        newNoteToAdd.remove(); 
    });
    textArea.addEventListener("input",()=>{
        main.innerHTML = marked(textArea.value)
    });
    
    notesContainerEl.appendChild(newNoteToAdd); 
}