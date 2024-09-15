// Function to handle scroll and apply/remove blur effect
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // If the section is within view
        if (sectionTop < windowHeight && sectionTop >= -50) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
});