let body = document.querySelector('body');
let buttons=document.querySelectorAll('.box');
// add event listener on boxes

buttons.forEach( (button) => {
    button.addEventListener('click',function(event){
        
        body.style.backgroundColor=event.target.id;
    });
});