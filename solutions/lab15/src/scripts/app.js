import * as sayHello from './sayHello.js';

window.addEventListener('load', ()=>{
    document.getElementById('welcome-message')
        .innerHTML = sayHello.greet('Your name');
});
