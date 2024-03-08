export function initializeQuiz() {
    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('.quiz-section');
        const nextButtons = document.querySelectorAll('.quiz-btn.quiz-next');
        const prevButtons = document.querySelectorAll('.quiz-btn.quiz-prev');

        nextButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                sections[index].style.display = 'none';
                sections[index + 1].style.display = 'block';
            });
        });

        prevButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                sections[index].style.display = 'none';
                sections[index - 1].style.display = 'block';
            });
        });
    });
}
