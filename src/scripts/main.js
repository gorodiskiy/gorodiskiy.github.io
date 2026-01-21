const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

menuIcon?.addEventListener('click', () => {
    sidebar?.classList.toggle('active');
    menuIcon?.classList.toggle('active');
});

// Close sidebar when clicking outside on mobile (anywhere on document)
document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar?.contains(event.target);
    const isClickOnMenuIcon = menuIcon?.contains(event.target);

    if (sidebar?.classList.contains('active') && !isClickInsideSidebar && !isClickOnMenuIcon) {
        sidebar.classList.remove('active');
        menuIcon?.classList.remove('active');
    }
});

// Mouse Trail (Glints)
let lastGlintTime = 0;

function createGlint(x, y) {
    const glint = document.createElement('div');
    glint.className = 'cursor-glint';
    glint.style.left = `${x}px`;
    glint.style.top = `${y}px`;
    
    const size = Math.random() * 4 + 2;
    glint.style.width = `${size}px`;
    glint.style.height = `${size}px`;

    const driftX = (Math.random() - 0.5) * 30;
    const driftY = (Math.random() - 0.5) * 30;
    glint.style.setProperty('--drift-x', `${driftX}px`);
    glint.style.setProperty('--drift-y', `${driftY}px`);
    
    document.body.appendChild(glint);
    
    setTimeout(() => {
        glint.remove();
    }, 600);
}

// 1. Parallax Effect & Floating Animation
const shapes = document.querySelectorAll('.shape');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = (window.innerWidth - e.pageX * 2) / 100;
    mouseY = (window.innerHeight - e.pageY * 2) / 100;

    // 2. Glint Effect
    const now = Date.now();
    if (now - lastGlintTime > 50) {
        createGlint(e.clientX, e.clientY);
        lastGlintTime = now;
    }
});

let tick = 0;
function animate() {
    tick += 0.01;
    
    shapes.forEach((shape, i) => {
        const speed = parseFloat(shape.getAttribute('data-speed')) || 2;
        const x = mouseX * speed + Math.sin(tick + i) * 10;
        const y = mouseY * speed + Math.cos(tick + i) * 10;
        const rotation = Math.sin(tick * 0.5 + i) * 15;
        
        shape.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotation}deg)`;
    });
    
    requestAnimationFrame(animate);
}

if (shapes.length > 0) {
    animate();
}
