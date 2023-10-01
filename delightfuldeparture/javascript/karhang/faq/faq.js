const toggles = document.querySelectorAll('.toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faqItem = toggle.parentElement.parentElement;
        const answer = faqItem.querySelector('.faq-answer');

        if (answer.style.display === 'block' || answer.style.display === '') {
            answer.style.display = 'none';
            toggle.textContent = '+';
        } else {
            answer.style.display = 'block';
            toggle.textContent = '-';
        }
    });
});

