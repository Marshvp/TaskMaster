import buildDOM from './DOMel';
import { Projects, Task} from './classes'
import './styles/style.css';
console.log("Hello");
document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.appendChild(buildDOM())
})

