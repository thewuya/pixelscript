window.addEventListener('scroll', function() {
    const content = document.getElementById('content');
    if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
