document.getElementById('themeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    this.textContent = this.textContent === 'Dark Theme' ? 'Light Theme' : 'Dark Theme';
});
