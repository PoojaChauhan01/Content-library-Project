document.getElementById('animateButton').addEventListener('click', function() {
    const button = this;
    button.classList.add('pulse');
    button.addEventListener('animationend', function() {
        button.classList.remove('pulse');
    }, { once: true });
});
