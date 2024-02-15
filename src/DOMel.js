import { proFormSubmission } from "./createLogic";

export default function buildDOM() {
    // create container
    const container = document.createElement('div');
    container.className = 'container';
    
    const sidebar = createSidebar()
    const header = createHeader()
    const content = createContent()

    container.append(sidebar, header, content);

    const addProjectBtn = sidebar.querySelector('#addProjectBtn');
    addProjectBtn.addEventListener('click', () => {
        content.innerHTML = '';
        const form = proForm();
        content.appendChild(form)
    })
    
    return container;
}
// create sidebar
function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    //create UL and home button
    const proUL = document.createElement('ul');
    const homeLI = document.createElement('li');
    const homeBtn = document.createElement('button');

    homeLI.textContent = 'Home'
    homeBtn.innerHTML = 'Home'

    // create add Project Button
    const addProLI = document.createElement('li');
    // connect all LI into the UL
    homeLI.appendChild(homeBtn)
    proUL.appendChild(homeLI)
    proUL.appendChild(addProLI)
    sidebar.appendChild(proUL)



    // add project button
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';
    addButton.type = 'button'
    addButton.id = 'addProjectBtn';
    addProLI.appendChild(addButton)
    return sidebar;
}
// create header
function createHeader() {
    const header = document.createElement('div');
    header.className = 'header';
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
