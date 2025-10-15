document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        // Alterna la clase 'dark-theme' en el body
        document.body.classList.toggle('dark-theme');
    });
});