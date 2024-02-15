// create sidebar
let sidebar = null;
const projectSideUL = document.createElement('ul')


export function createSidebar() {
    sidebar = document.createElement('div');
    sidebar.className = 'sidebar';

    //create topUL and home button
    const topUL = document.createElement('ul');
    const homeLI = document.createElement('li');
    const homeBtn = document.createElement('button');

    homeLI.textContent = 'Home'
    homeBtn.innerHTML = 'Home'

    // create project button
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';
    addButton.type = 'button'
    addButton.id = 'newProjectBtn';

    // connect all to topUL
    homeLI.appendChild(homeBtn)
    topUL.appendChild(homeLI)
    homeLI.appendChild(addButton)
    sidebar.appendChild(topUL)
    
    //projUL
    const projectSideDiv = document.createElement('div')
    projectSideDiv.className = 'projectSideDiv'
    const projectSideHeader = document.createElement('h2')

    projectSideHeader.textContent = 'Projects:'
    
    projectSideDiv.appendChild(projectSideHeader)
    projectSideDiv.appendChild(projectSideUL)
    sidebar.appendChild(projectSideDiv)


    return sidebar;
}

export function addProjectToSidebar (projectName) {
    if (!sidebar) {
        return console.log("Sidebar not created Yet");
    }
    const projectBtnLI = document.createElement('li');
    const projectBtn = document.createElement('button');
    projectBtn.textContent = projectName;
    projectBtn.className = `${projectName}-button`;
    projectBtn.onclick = () => {
        console.log(`Project ${projectName} clicked`);
    }
    
    projectBtnLI.appendChild(projectBtn)
    projectSideUL.appendChild(projectBtnLI)
    
    // still need to add button to list and implement logic in create logic.
}