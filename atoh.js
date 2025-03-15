const nav = document.querySelector('.nav');
const menu = document.querySelector('.bx-menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

window.onscroll = () => {
    nav.classList.remove('active')
    menu.classList.remove('bx-x');
}

//Scroll reveal

const sr = ScrollReveal({
    distance: '40px',
    duration: 2400,
    delay:400,
    reset: true,
    cleanup: true
})

//home page
sr.reveal('.home h1',{delay: 200, origin: 'left'});
sr.reveal('.home h3',{delay: 300, origin: 'right'});
sr.reveal('.home button',{delay: 400, origin: 'bottom'});
sr.reveal('.home img',{delay: 500, origin: 'top'});

sr.reveal('.topic',{delay: 200, origin: 'top'});
sr.reveal('.product',{delay: 300, origin: 'bottom'});
sr.reveal('.fabric h3',{delay: 200, origin: 'left'});
sr.reveal('.fabric h1',{delay: 300, origin: 'right'});
sr.reveal('.fabric button',{delay: 400, origin: 'bottom'});
sr.reveal('.letter h2',{delay: 200, origin: 'left'});
sr.reveal('.letter p',{delay: 200, origin: 'left'});
sr.reveal('.letter .email',{delay: 400, origin: 'right'});
sr.reveal('footer',{delay: 200, origin: 'bottom'});
sr.reveal('.Shop h1',{delay: 200, origin: 'top'});
sr.reveal('.Shop h2',{delay: 400, origin: 'top'});
sr.reveal('.Contact h1',{delay: 200, origin: 'top'});
sr.reveal('.Contact h2',{delay: 400, origin: 'top'});
sr.reveal('.know',{delay: 300, origin: 'bottom'});
sr.reveal('.blogProduct',{delay: 200, origin: 'bottom'});
sr.reveal('.blogProduct h4',{delay: 400, origin: 'left'});
sr.reveal('.location',{delay: 200, origin: 'left'});
sr.reveal('.map',{delay: 400, origin: 'right'});
sr.reveal('.form',{delay: 300, origin: 'top'});
sr.reveal('table th',{delay: 200, origin: 'top'});
sr.reveal('table td',{delay: 300, origin: 'bottom'});