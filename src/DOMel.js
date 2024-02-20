import { proFormSubmission } from "./createLogic";
import { createSidebar } from "./sidebar";

export default function buildDOM() {
    // create container
    const container = document.createElement('div');
    container.className = 'container';
    
    const sidebar = createSidebar()
    const header = createHeader()
    const content = createContent()

    container.append(sidebar, header, content);

    const newProjectBtn = sidebar.querySelector('#newProjectBtn');
    newProjectBtn.addEventListener('click', () => {
        content.innerHTML = '';
        const form = proForm();
        content.appendChild(form)
    })
    
    return container;
}

// create header
function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';

    const h1 = document.createElement('h1');
    h1.textContent = 'TASK MASTER'

    header.appendChild(h1)
    return header;
}
//create content
function createContent() {
    const content = document.createElement('div');
    content.className = 'content';
    return content;
}


//create project form
function proForm() {
    const form = document.createElement('form');
    form.id = 'projectForm';

    // Project name
    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'projectTitle';
    title.placeholder = 'Project Title';
    form.appendChild(title)
       
    // Project Desc
    const desc = document.createElement('textarea');
    desc.id = 'projectDesc';
    desc.placeholder = 'Project Description';
    form.appendChild(desc);

    // Submit
    const submitbtn = document.createElement('button');
    submitbtn.type = 'submit';
    submitbtn.textContent = 'Create Project';
    form.appendChild(submitbtn)
    
    // handle logic in Createlogic.js
    proFormSubmission(form, (title, desc) => {
        alert(`Project Added: ${title}`)
    })
    return form
}
