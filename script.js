function showContent(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Display the "about" section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('about');
});
