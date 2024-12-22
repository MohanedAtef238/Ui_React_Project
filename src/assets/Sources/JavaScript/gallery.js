document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');

    images.forEach((element) => {

        images.forEach((element) => {
            element.style.transition = 'transform 0.6s ease, filter 1.1s ease'; 
            element.style.filter = 'brightness(60%)';
    
            element.addEventListener('mouseover', () => {
                element.style.transform = 'scale(1.05)';
                element.style.filter = 'brightness(80%)';
            });
    
            element.addEventListener('mouseout', () => {
                element.style.transform = 'scale(1)';
                element.style.filter = 'brightness(60%)';
            });
        });
    })});
