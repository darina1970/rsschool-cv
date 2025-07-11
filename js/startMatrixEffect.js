export function startMatrixEffect() {
    const canvas = document.getElementById('matrix-canvas');
    const codeSection = document.querySelector('.code');

    if (!canvas || !codeSection) {
        return;
    }

    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = codeSection.offsetHeight;
    }

    setCanvasSize();

    const letters = '101010101010101010101010101010';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    function draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'; // fade
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#e281a5'; // розовый
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
        }
    }

    setInterval(draw, 50);

  // Обновление размеров при ресайзе
    window.addEventListener('resize', () => {
        setCanvasSize();
    });
}