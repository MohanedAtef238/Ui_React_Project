document.addEventListener('DOMContentLoaded', () => {
    const smoothscroller = document.querySelector('[data-target]'); 

    if (smoothscroller) {
        smoothscroller.addEventListener('click', event => {
            event.preventDefault(); 

            const targetID = smoothscroller.getAttribute('data-target');
            const Target = document.getElementById(targetID);

            if (Target) {
                Target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});