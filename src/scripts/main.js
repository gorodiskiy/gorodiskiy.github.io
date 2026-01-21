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
