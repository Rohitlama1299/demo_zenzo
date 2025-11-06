 // Hide loader after 3 seconds
        setTimeout(function() {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }, 3000);

        // Category filtering functionality
        document.addEventListener('DOMContentLoaded', function() {
            const categoryButtons = document.querySelectorAll('.category-btn');
            
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    
                    // Update active button
                    categoryButtons.forEach(btn => {
                        btn.classList.remove('active-category');
                    });
                    this.classList.add('active-category');
                    
                    // Show/hide categories
                    if (category === 'all') {
                        document.querySelectorAll('.category-section').forEach(section => {
                            section.style.display = 'block';
                        });
                    } else {
                        document.querySelectorAll('.category-section').forEach(section => {
                            section.style.display = 'none';
                        });
                        document.getElementById(category).style.display = 'block';
                    }
                    
                    // Scroll to the top of the category
                    if (category === 'all') {
                    }
                });
            });
        });
        // Add loader functionality
// Replace the existing loader JavaScript
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    const content = document.querySelector('main');
    
    // Initially hide main content
    content.style.opacity = '0';
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            content.style.opacity = '1';
            content.style.transition = 'opacity 0.5s ease-in';
        }, 500);
    }, 2500);
});

// Replace the existing scroll JavaScript with this version
let lastScroll = 0;
const logo = document.querySelector('.logo-container');
const scrollThreshold = 50;
let ticking = false;

// Update the scroll event listener in your JavaScript
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            const header = document.querySelector('.header-gradient');
            
            if (currentScroll <= 0) {
                logo.classList.remove('logo-hidden');
                header.classList.add('header-with-logo');
            } else if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
                logo.classList.add('logo-hidden');
                header.classList.remove('header-with-logo');
            } else if (currentScroll < lastScroll) {
                logo.classList.remove('logo-hidden');
                header.classList.add('header-with-logo');
            }
            
            lastScroll = currentScroll;
            ticking = false;
        });
        ticking = true;
    }
});

// Update the touch event handler similarly
document.addEventListener('touchmove', e => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const touchEnd = e.touches[0].clientY;
            const deltaY = touchEnd - touchStart;
            const header = document.querySelector('.header-gradient');
            if (deltaY < -scrollThreshold && window.pageYOffset > scrollThreshold) {
                logo.classList.add('logo-hidden');
                header.classList.remove('header-with-logo');
            } else if (deltaY > scrollThreshold || window.pageYOffset <= 0) {
                logo.classList.remove('logo-hidden');
                header.classList.add('header-with-logo');
            }
            ticking = false;
        });
        ticking = true;
    }
});
        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        