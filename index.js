// white mode button
const buttonMode = document.querySelector('.dark-mode-btn');
const wholeBody = document.querySelector('body');
const whiteImg = document.querySelector('.white-mode-img');
const normalImg = document.querySelector('.normal-mode-img');
const arrowIcon = document.querySelector('.arrow-left');
normalImg.style.display = 'none';
const wagonLogo = document.querySelector('.wagon');
const journyBanner = document.querySelector('.journey-banner');
const aniBanner1 = document.querySelector('.project-x');
const aniBanner2 = document.querySelector('.projects-lists');
const spanMsg = document.querySelector('.state-msg');


buttonMode.setAttribute('aria-pressed', 'false');
spanMsg.textContent = 'Change Website Into Contrasted Mode';

buttonMode.addEventListener('click', function() {
    if (wholeBody.classList.toggle('white-mode')) {
        whiteImg.style.display = 'none';
        normalImg.style.display = 'block';
        dialogBtn.style.color = 'black';
        buttonMode.setAttribute('aria-pressed', 'true');
        spanMsg.textContent = 'Change website into normal mode';
        wagonLogo.style.filter = 'invert(0)';
        arrowIcon.style.mixBlendMode = 'difference';
        journyBanner.style.background = 'black';
        aniBanner1.style.background = '#7d90b0';
        aniBanner2.style.background = 'rgb(223 223 239)';
        for (const card of cards) {
            card.style.background = 'rgb(0 0 0 / 7%)';
            card.style.color = 'black';
            card.style.boxShadow = 'inset 0px 1px 7px -4px rgb(0 0 0)';
        }
    } else {
        wagonLogo.style.filter = 'invert(1)';
        aniBanner1.style.background = '#1C1C35';
        aniBanner2.style.background = 'white';
        aniBanner2.style.color = 'white !important';
        whiteImg.style.display = 'block';
        buttonMode.setAttribute('aria-pressed', 'false');
        spanMsg.textContent = 'Change Website Into Contrasted Mode';
        normalImg.style.display = 'none';
        dialogBtn.style.color = 'white';
        journyBanner.style.background = '#42424287';
        for (const card of cards) {
            card.style.background = 'rgba(255, 255, 255, 0.02)';
            card.style.color = 'white';
        }
    }
});


// Burger menu

const closeImg = document.querySelector('.close-menu-img')
closeImg.style.display = 'none';
const openImg = document.querySelector('.open-menu-img')

const burgerBtn = document.querySelector('.burger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');
const overlayEffect = document.querySelector('.overlay');
overlayEffect.style.display = 'none';

burgerBtn.setAttribute('aria-expanded', 'false');


burgerBtn.addEventListener('click', function() {
    if(dropdownMenu.classList.toggle('reveal')) {
        burgerBtn.setAttribute('aria-expanded', 'false');
        closeImg.style.display = 'block';
        openImg.style.display = 'none';
        overlayEffect.style.display = 'block';
        overlayEffect.classList.add('z-superior');
        if(overlayEffect.style.display === 'block') {
            for (const anchorX of anchorsX) {
                anchorX.addEventListener('click', function() {
                    overlayEffect.style.display = 'none'
                    dropdownMenu.classList.remove('reveal');
                    closeImg.style.display = 'none';
                    openImg.style.display = 'block';
                });
            }
        };        
    } else {
        burgerBtn.setAttribute('aria-expanded', 'true');
        closeImg.style.display = 'none';
        openImg.style.display = 'block';
        overlayEffect.style.display = 'none';
        overlayEffect.classList.remove('z-superior');
    }
});



// Anchor links for mobile 

const anchorsX = document.querySelectorAll('.anchor-mb');




// Modal window
const dialogBtn = document.querySelector('.contact-btn');
const dialog = document.querySelector('.dialog-window');
const closeDialog = document.querySelector('.close-btn');


dialog.style.display = 'none';
dialog.setAttribute('aria-modal', 'false');

dialogBtn.addEventListener('click', function() {
    dialog.style.display = 'block';
    overlayEffect.style.display = 'block';
    closeDialog.focus();
    dialog.setAttribute('aria-modal', 'true');
});

closeDialog.addEventListener('click', function() {
    dialog.style.display = 'none';
    overlayEffect.style.display = 'none';
    for (const input of inputs) {
        input.classList.remove('error-indicator');
    }
    dialogBtn.focus();
    dialog.setAttribute('aria-modal', 'false');
});

document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        dialog.style.display = 'none';
        dialogBtn.focus();
        overlayEffect.style.display = 'none';
        dialog.setAttribute('aria-modal', 'false');
    }
});


// Send and receive emails 

const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const email = document.getElementById('email');
const secondName = document.getElementById('second-name');
const message = document.getElementById('message');
const subject = document.getElementById('subject');
const inputs = document.querySelectorAll('.input-errors');

function receiveEmail() {
    const bodyMessage = `First Name: ${firstName.value}<br> Email: ${email.value}<br> Second Name: ${secondName.value} <br> Message: ${message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "dushveer11@gmail.com",
        Password : "54384736B06FB6F9F278599D958123A1F67A",
        To : 'dushveer11@gmail.com',
        From : "dushveer11@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(() => {
        dialog.style.display = 'none';
        overlayEffect.style.display = 'none';
        dialogBtn.focus();
        dialog.setAttribute('aria-modal', 'false');
        checkInputs();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your form was successfully submitted!",
            showConfirmButton: false,
            timer: 1500
          });
    });
};

function checkInputs() {
    if(dialog.style.display === 'none') {
        for (const input of inputs) {
            input.value = '';
        }
    }
}




form.addEventListener("submit", function(e) {
    e.preventDefault();
    receiveEmail();
    checkInputs();
});



// const anchors = document.querySelectorAll('.anchor-link');
// const header = document.querySelector('header');
// console.log(anchors);

// function indicators(checkIndex) {
//     anchors.forEach((anchor, index) => {
//         if(index !== checkIndex) {
//             anchor.style.color = 'white';
//             anchor.removeAttribute('aria-current', 'true')
//         } else {
//             anchor.style.color = '#e44076';
//             anchor.setAttribute('aria-current', 'true')
//         };
//     });

// };

// anchors.forEach((anchor, index) => {
//     anchor.addEventListener('click', function() {
//         indicators(index);
//         // header.style.position = 'fixed';
//         // header.style.background = 'black';
//         // header.style.zIndex = '9';
//     })
// });



// View project animation

const viewProjects = document.querySelector('.view-projects');
const projectSection = document.querySelector('.projects-section');
const loadProjects = document.querySelector('.load-projects');
const cards = document.querySelectorAll('.project-card');

loadProjects.style.display = 'none';

const messageSr = document.querySelector('.message');

viewProjects.addEventListener('click', function() {
    viewProjects.style.animation = 'rotate 5s infinite';
    setTimeout(() => {
        projectSection.style.display = 'none';
        loadProjects.style.display = 'block';
        messageSr.textContent = 'Additional informations have been loaded on your screen, 3 new projets are now avalaible, you have been redirected on the contact me button';
    }, 3000);
});


