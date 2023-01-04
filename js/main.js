
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());
document.addEventListener('click', documentClick);

function documentClick(e) {
    const targItem = e.target;
    if (targItem.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    };
};

var swiper = new Swiper(".main__container", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
});

var swiper = new Swiper(".instagram__swiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
});
var swiper = new Swiper(".rocks__box", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
});
const footerScroll = document.getElementById('footer-scroll');
footerScroll.onclick = () => {
    window.scrollTo(0, 0);
};



// const btn = document.getElementById('button');

// document.getElementById('form')
//     .addEventListener('submit', function (e) {
//         e.preventDefault();

//         btn.value = 'Sending...';

//         const serviceID = 'default_service';
//         const templateID = 'template_zpqcdch';

//         emailjs.sendForm(serviceID, templateID, this)
//             .then(() => {
//                 btn.value = 'Send Email';
//                 alert('Sent!');
//             }, (err) => {
//                 btn.value = 'Send Email';
//                 alert(JSON.stringify(err));
//             });
//     });
// const btn = document.getElementById('button');
// const form = document.getElementById('form');


// btn.addEventListener('click', function (e) {
//     e.preventDefault();

//     btn.value = 'Sending...';

//     const serviceID = 'default_service';
//     const templateID = 'template_zpqcdch';
//     emailjs.sendForm(serviceID, templateID, form)
//         .then(() => {
//             btn.value = 'Send Email';
//             alert('Sent!');
//         }, (err) => {
//             btn.value = 'Send Email';
//             alert(JSON.stringify(err));
//         });
// });
