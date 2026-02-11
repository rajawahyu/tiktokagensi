document.addEventListener("DOMContentLoaded", () => {
    // Reveal animation on scroll
    const reveal = () => {
        const elements = document.querySelectorAll('section, .feature-card, .creator-card');
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    
    // Smooth Transition Styles
    const style = document.createElement('style');
    style.innerHTML = `
        section, .feature-card, .creator-card { 
            opacity: 0; 
            transform: translateY(30px); 
            transition: all 1s cubic-bezier(0.22, 1, 0.36, 1); 
        }
        .active { 
            opacity: 1 !important; 
            transform: translateY(0) !important; 
        }
    `;
    document.head.appendChild(style);
    reveal(); 
});