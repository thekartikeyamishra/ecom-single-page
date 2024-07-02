document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    const ctaButtons = document.querySelectorAll('.cta');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Redirecting to Shop Page...');
            document.querySelector('.featured-products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    const seeAllButton = document.querySelector('.see-all');
    seeAllButton.addEventListener('click', () => {
        alert('Redirecting to All Products Page...');
        window.location.href = '/all-products.html';
    });

    const categoryElements = document.querySelectorAll('.category');
    categoryElements.forEach(category => {
        category.addEventListener('click', () => {
            alert(`Redirecting to ${category.textContent} category...`);
            window.location.href = `/category/${category.textContent.toLowerCase()}.html`;
        });
    });

    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
