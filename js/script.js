document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Alternar entre modos claro y oscuro
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        // Cambiar ícono y texto
        if (isDarkMode) {
            themeIcon.classList.replace('fa-moon', 'fa-sun'); // Cambiar a ícono de sol
        } else {
            themeIcon.classList.replace('fa-sun', 'fa-moon'); // Cambiar a ícono de luna
        }
    });
    const botonAsistente = document.getElementById('boton-asistente');
    const botonesOcultos = document.getElementById('botones-ocultos');

    // Alternar visibilidad de los botones ocultos
    botonAsistente.addEventListener('click', () => {
        botonesOcultos.classList.toggle('mostrar'); // Muestra u oculta los botones
    });
});