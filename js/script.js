document.addEventListener('DOMContentLoaded', function () {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Scroll to Top Button ---
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show or hide the button based on scroll position
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };
});

// Function to scroll to the top of the document
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close mobile menu when a link is clicked (optional but good for UX)
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
             mobileMenu.classList.add('hidden');
        }
    });
});

        // JavaScript for the accordion functionality
        document.addEventListener('DOMContentLoaded', function () {
            const accordionButtons = document.querySelectorAll('.accordion-button');

            accordionButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const accordionContent = button.nextElementSibling;
                    const chevron = button.querySelector('svg');

                    // Toggle the content visibility
                    if (accordionContent.style.maxHeight) {
                        accordionContent.style.maxHeight = null;
                        chevron.style.transform = 'rotate(0deg)';
                    } else {
                        // Close all other open accordions
                        document.querySelectorAll('.accordion-content').forEach(content => {
                            content.style.maxHeight = null;
                        });
                        document.querySelectorAll('.accordion-button svg').forEach(svg => {
                            svg.style.transform = 'rotate(0deg)';
                        });
                        
                        // Open the clicked one
                        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
                        chevron.style.transform = 'rotate(180deg)';
                    }
                });
            });
        });
