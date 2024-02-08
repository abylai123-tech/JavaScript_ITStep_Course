let scrollToTopButton = document.getElementById('scrollToTop');
        
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo(0, 0);
});