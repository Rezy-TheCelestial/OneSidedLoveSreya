document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    aboutSection.style.opacity = 0;
    window.addEventListener('scroll', function() {
        const sectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        if (sectionPosition < screenPosition) {
            aboutSection.style.transition = 'opacity 1s';
            aboutSection.style.opacity = 1;
        }
    });
});


