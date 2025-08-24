
// event listener for when the page has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary HTML elements and store them in constants
    const body = document.body;
    const modeToggleBtn = document.getElementById('mode-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Handle Page Navigation
    // Event listener for all navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevents the default action of a link (page refresh)


            // Hide all pages and remove active class from links
            pages.forEach(page => page.classList.remove('active'));
            navLinks.forEach(navLink => navLink.classList.remove('active'));

            // Show the selected page and add active class to the clicked link
            const targetPageId = event.target.dataset.page;
            document.getElementById(targetPageId).classList.add('active');
            event.target.classList.add('active');
        });
    });
});
