const createNoteBtn = document.querySelector('.notes-button');
const notesContainer = document.querySelector('.notes-container');
const rightNotesContainer = document.querySelector('.right-notes-container');

// Function to create a note in the right container
const createRightNotes = function(innerHtmlText) {
    let para = document.createElement('p');
    let img = document.createElement('img');
    img.src = 'images/delete.png';
    img.className = 'delPara';
    para.className = 'input-box';
    para.innerHTML = innerHtmlText;
    para.setAttribute('contenteditable', 'true');
    para.appendChild(img);
    rightNotesContainer.appendChild(para);
};

// Event listener to create a new note in the left container
createNoteBtn.addEventListener('click', () => {
    let para = document.createElement('p');
    let img = document.createElement('img');
    img.src = 'images/delete.png';
    img.className = 'delPara';
    para.className = 'input-box';
    para.setAttribute('contenteditable', 'true');
    para.appendChild(img);

    notesContainer.appendChild(para);
});

// Event listener to handle click events for deletion
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delPara')) {
        e.target.parentElement.remove();
    }
});

// Event listener to handle keydown events in the notes container
notesContainer.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault(); // Prevent the default action of creating a new line
        createRightNotes(e.target.innerText);
        e.target.remove(); // Remove the note from the left container
    }
});
