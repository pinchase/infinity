   // JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Video play buttons functionality
            const videoButtons = document.querySelectorAll('.video-btn, .video-play');
            videoButtons.forEach(button => {
                button.addEventListener('click', function() {
                    alert('Video player would open here');
                });
            });

            // Smooth scrolling for navigation links
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
        // JavaScript for IGFO Website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for all learn more buttons
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // This would typically navigate to a detail page
            // For now, we'll just log a message
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
    // Donation chart data
    const donationData = [
        { category: "Skills training", percentage: 40, color: "#c8f7d6" },
        { category: "Empowering programs", percentage: 35, color: "#a094f0" },
        { category: "Helping people", percentage: 10, color: "#f5f5dc" },
        { category: "Seminars", percentage: 10, color: "#f1c75b" },
        { category: "Feeding the poor", percentage: 5, color: "#f5a4c7" }
    ];

    // Create donut chart using D3.js
    createDonutChart(donationData);
    
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

// Function to create donut chart
function createDonutChart(data) {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    
    // Clear any existing SVG
    d3.select("#donut-chart").html("");
    
    // Create SVG
    const svg = d3.select("#donut-chart")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
    // Create a pie layout
    const pie = d3.pie()
        .value(d => d.percentage)
        .sort(null);
    
    // Arc generator
    const arc = d3.arc()
        .innerRadius(radius * 0.6) // This creates the donut hole
        .outerRadius(radius);
    
    // Create pie chart
    const arcs = svg.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc");
    
    // Add path (shapes)
    arcs.append("path")
        .attr("d", arc)
        .attr("fill", d => d.data.color)
        .attr("stroke", "#1e2130")
        .attr("stroke-width", 2)
        .style("opacity", 0.9)
        .on("mouseover", function() {
            d3.select(this).style("opacity", 1);
        })
        .on("mouseout", function() {
            d3.select(this).style("opacity", 0.9);
        });
}

// Email validation function
function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}