document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-sidebar');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    // Function to open sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        overlay.style.display = 'block';
        menuToggle.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
    }

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        overlay.style.display = 'none';
        menuToggle.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners
    menuToggle.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when clicking links
    const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // Close sidebar when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && sidebar.classList.contains('active')) {
            closeSidebar();
        }
    });
});
  // JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
                      const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    // In a real implementation, this would scroll to the section
                    console.log('Scrolling to section: ' + this.textContent);
                });
            });

            // Donate button functionality
            const donateBtn = document.querySelector('.donate-btn');
            donateBtn.addEventListener('click', function() {
                alert('Donation page would open here');
            });

            // Learn more button functionality
            const learnMoreBtn = document.querySelector('.about-link');
            learnMoreBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Learn more page would open here');
            });
        });
       

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all learn more buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
                    const programName = this.closest('.program-item, .project-card')
                .querySelector('h2').textContent;
            
            console.log(`Learning more about: ${programName}`);
            
            // Example animation for button click
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // Add intersection observer for scroll animations
    const elementsToAnimate = document.querySelectorAll('.program-item, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // Add CSS for the animations
    const style = document.createElement('style');
    style.textContent = `
        .program-item, .project-card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .program-item.visible, .project-card.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .learn-more.clicked {
            transform: scale(0.95);
        }
    `;
    document.head.appendChild(style);
});
document.addEventListener('DOMContentLoaded', function() {
   
    // Add event listeners for buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.textContent.toLowerCase();
            if (action.includes('volunteer')) {
                console.log('Opening volunteer registration form');
                // Code to open volunteer form would go here
            } else if (action.includes('donate')) {
                console.log('Opening donation form');
                // Code to open donation form would go here
            }
        });
    });
    
    // Add event listeners for event cards
    document.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', function() {
            const eventTitle = this.querySelector('.event-title').textContent;
            console.log(`Opening details for event: ${eventTitle}`);
            // Code to navigate to event details page would go here
        });
    });
    
    // Newsletter subscription form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (validateEmail(email)) {
                console.log(`Subscribing email: ${email}`);
                // Code to submit email to backend would go here
                this.querySelector('input[type="email"]').value = '';
                alert('Thank you for subscribing to our newsletter!');
            } else {
                alert('Please enter a valid email address.');
            }
        });
        
        // Add submit event to button click
        const subscribeButton = document.querySelector('.btn-subscribe');
        if (subscribeButton) {
            subscribeButton.addEventListener('click', function() {
                newsletterForm.dispatchEvent(new Event('submit'));
            });
        }
    }
});


// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

 // Simple form validation and submission handling
 document.getElementById('subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email-input');
    const email = emailInput.value.trim();
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Here you would typically send the email to your server
    // For this example, we'll just show a success message
    alert('Thank you for subscribing!');
    emailInput.value = '';
  });
  
  function isValidEmail(email) {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
// Donation data
document.addEventListener('DOMContentLoaded', function() {
    // Data for the chart
    const data = [
        { category: 'Skills training', percentage: 40, color: '#c3e6c3' },
        { category: 'Empowering programs', percentage: 35, color: '#b39ddb' },
        { category: 'Helping people', percentage: 10, color: '#fff3cd' },
        { category: 'Seminars', percentage: 10, color: '#ffe082' },
        { category: 'Feeding the poor', percentage: 5, color: '#f8bbd0' }
    ];
    
    // Create donut chart
    createDonutChart(data);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        // Clear and redraw chart when window is resized
        document.getElementById('donutChart').innerHTML = '';
        createDonutChart(data);
    });
});

function createDonutChart(data) {
    const svg = document.getElementById('donutChart');
    const center = { x: 50, y: 50 };
    const radius = 40;
    const innerRadius = 25;
    
    let startAngle = 0;
    
    // Calculate total for validation
    const total = data.reduce((sum, item) => sum + item.percentage, 0);
    
    // Create paths for each segment
    data.forEach(item => {
        // Calculate angles
        const angleSize = (item.percentage / total) * 360;
        const endAngle = startAngle + angleSize;
        
        // Calculate path coordinates
        const x1 = center.x + radius * Math.cos((startAngle - 90) * Math.PI / 180);
        const y1 = center.y + radius * Math.sin((startAngle - 90) * Math.PI / 180);
        const x2 = center.x + radius * Math.cos((endAngle - 90) * Math.PI / 180);
        const y2 = center.y + radius * Math.sin((endAngle - 90) * Math.PI / 180);
        
        const x1Inner = center.x + innerRadius * Math.cos((startAngle - 90) * Math.PI / 180);
        const y1Inner = center.y + innerRadius * Math.sin((startAngle - 90) * Math.PI / 180);
        const x2Inner = center.x + innerRadius * Math.cos((endAngle - 90) * Math.PI / 180);
        const y2Inner = center.y + innerRadius * Math.sin((endAngle - 90) * Math.PI / 180);
        
        // Determine if the arc should be drawn as a large arc
        const largeArcFlag = angleSize > 180 ? 1 : 0;
        
        // Create the SVG path
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        // Define the path
        const d = [
            `M ${x1} ${y1}`,
            `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
            `L ${x2Inner} ${y2Inner}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1Inner} ${y1Inner}`,
            'Z'
        ].join(' ');
        
        path.setAttribute('d', d);
        path.setAttribute('fill', item.color);
        path.setAttribute('stroke', '#1c2030');
        path.setAttribute('stroke-width', '0.5');
        
        svg.appendChild(path);
        
        // Update the starting angle for the next segment
        startAngle += angleSize;
    });
}