// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        document.body.classList.add('fade-out');
        
        setTimeout(() => {
            window.location.href = href;
        }, 500); // Matches the duration of the fade-out transition
    });
});

// Optional: When the new page loads, ensure it fades in
window.addEventListener('load', () => {
    document.body.classList.remove('fade-out');
    document.body.classList.add('fade-in');
});

// headerrrrr 
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#222'; // Darker color when scrolled
    } else {
        header.style.backgroundColor = '#333'; // Original color
    }
});
