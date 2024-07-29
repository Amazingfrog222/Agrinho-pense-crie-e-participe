document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            alert(`Você clicou na ${card.querySelector('h3').textContent}`);
        });
    });
});