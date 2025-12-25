document.addEventListener("DOMContentLoaded", () => {
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            
            // Wenn das Element im Bild ist:
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } 
            // WICHTIG: Wenn das Element NICHT MEHR im Bild ist:
            else {
                entry.target.classList.remove('visible');
            }
            
        });
    });

    const hiddenElements = document.querySelectorAll('.fly-in');
    hiddenElements.forEach((el) => observer.observe(el));
});