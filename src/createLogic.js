import { Projects } from "./classes";

export function proFormSubmission(formElement, onSuccess) {
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // declare title and desc from form
        const title = formElement.querySelector('#projectTitle').value.trim();
        const desc = formElement.querySelector('#projectDesc').value.trim();

        console.log('Submitting: ', title, desc);

        //validation
        if(!title || !desc) {
            alert('Please fill in all fields.');
            return;
        }

        //create a new prod
        const newtask = new Projects(title, desc)
        console.log(newtask);

        if(typeof onSuccess === 'function') {
            onSuccess(title, desc)
        }
    })
}