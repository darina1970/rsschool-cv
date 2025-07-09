export function animateOnScroll() {
    const animatedSections = document.querySelectorAll('.section-animated');
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;

            if (entry.isIntersecting && scrollingDown) {
                entry.target.classList.add('visible');
            } else if (!scrollingDown) {
                entry.target.classList.remove('visible');
            }

            lastScrollY = currentScrollY;
        });
    }, {
        threshold: 0.2,
    });

    animatedSections.forEach(section => {
        observer.observe(section);
    });
}