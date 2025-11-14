
// event listener for when the page has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary HTML elements and store them in constants
    const body = document.body;
    const modeToggleBtn = document.getElementById('mode-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    // Set initial state based on Storage or default to dark mode
    // Check for a saved mode in the browser's storage and apply it
    const currentMode = localStorage.getItem('mode') || 'dark'; // Defaults to 'dark' if no mode is found
    if (currentMode === 'dark') {
        body.classList.add('dark-mode');
        modeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        modeToggleBtn.textContent = 'Switch to Dark Mode';
    }

    // Toggle Light/Dark Mode
    // Event listener for the mode toggle button
    modeToggleBtn.addEventListener('click', () => {
        // Toggles the 'dark-mode' class on the body element
        if (body.classList.toggle('dark-mode')) {
            localStorage.setItem('mode', 'dark'); // Save the preference to local storage
            modeToggleBtn.textContent = 'Switch to Light Mode';
        } else {
            localStorage.setItem('mode', 'light');
            modeToggleBtn.textContent = 'Switch to Dark Mode';
        }
    });

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
