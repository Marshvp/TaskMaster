import loadHome from './homepage';
import loadProds from './projectpage';
import './styles/style.css';
import loadTasks from './taskpage';
console.log("Hello");

const btn = document.querySelectorAll('button')

btn.forEach(item => {
    item.addEventListener('click', function() {
        loadPage(item.innerHTML);
    })
})

function loadPage(item){

    switch (item) {
        case 'Home':
            loadHome();
            break;
        case 'Add Task':
            loadTasks();
            break;
        case 'Projects':
            loadProds()
            break;
        default:
            console.log('Page not found:', item);
        break;
    }
}