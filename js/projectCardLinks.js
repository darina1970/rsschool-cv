export function initProjectCardLinks() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const link = card.dataset.link;
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
}