/// Анимация кнопок при наведении
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-back, .btn-donate').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});