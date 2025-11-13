
 document.addEventListener('DOMContentLoaded', function() {
            // Initialize all scrollable containers
            const containers = document.querySelectorAll('.certificates-container');
            containers.forEach(container => {
                const scrollElement = container.querySelector('.certificates-scroll');
                const prevBtn = container.querySelector('.scroll-btn.prev');
                const nextBtn = container.querySelector('.scroll-btn.next');
                
                // Function to update button visibility
                const updateButtons = () => {
                    const scrollLeft = scrollElement.scrollLeft;
                    const scrollWidth = scrollElement.scrollWidth;
                    const clientWidth = scrollElement.clientWidth;
                    
                    // Show/hide prev button
                    if (scrollLeft > 10) {
                        prevBtn.classList.remove('hidden');
                    } else {
                        prevBtn.classList.add('hidden');
                    }
                    
                    // Show/hide next button
                    if (scrollLeft < scrollWidth - clientWidth - 10) {
                        nextBtn.classList.remove('hidden');
                    } else {
                        nextBtn.classList.add('hidden');
                    }
                };
                
                // Scroll event listener
                scrollElement.addEventListener('scroll', updateButtons);
                
                // Button click handlers
                prevBtn.addEventListener('click', () => {
                    scrollElement.scrollBy({
                        left: -300,
                        behavior: 'smooth'
                    });
                });
                
                nextBtn.addEventListener('click', () => {
                    scrollElement.scrollBy({
                        left: 300,
                        behavior: 'smooth'
                    });
                });
                
                // Initial button state
                updateButtons();
                
                // Update buttons on window resize
                window.addEventListener('resize', updateButtons);
            });
        });
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });
    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });
    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    // Certificate modal functionality
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('certImage');

    // Open modal when clicking view certificate button
    $('.view-cert').on('click', function() {
        const imgSrc = $(this).data('cert');
        modalImg.src = imgSrc;
        modal.classList.add('active');
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
        }
    });

    // About section toggle (click the overlay title to hide/show the about content)
    (function() {
        const aboutToggle = document.getElementById('about-toggle');
        const aboutSection = document.getElementById('about');
        if (!aboutToggle || !aboutSection) return;

        aboutToggle.addEventListener('click', function() {
            const isCollapsed = aboutSection.classList.toggle('about-collapsed');
            // aria-expanded true when content is visible
            aboutToggle.setAttribute('aria-expanded', String(!isCollapsed));
            // Update text to indicate action (keeps original main word)
            if (isCollapsed) {
                aboutToggle.innerText = 'Show About';
            } else {
                aboutToggle.innerText = 'About Me & Qualification';
            }
        });
    })();



