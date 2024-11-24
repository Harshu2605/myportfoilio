document.addEventListener('DOMContentLoaded', function() {
    const skillsSection = document.getElementById('skills');
    const skillCircles = document.querySelectorAll('.skill');
  
    function fillSkillCircles() {
        skillCircles.forEach(skill => {
            const percentage = skill.getAttribute('data-percentage');
            let count = 0;
            const interval = setInterval(() => {
                if (count >= percentage) {
                    clearInterval(interval);
                } else {
                    count++;
                    skill.querySelector('circle').style.strokeDashoffset = 472 - (472 * count / 100);
                }
            }, 30);
        });
    }
  
    function checkScroll() {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            fillSkillCircles();
            window.removeEventListener('scroll', checkScroll);
        }
    }
  
    document.querySelector('a[href="#skills"]').addEventListener('click', function() {
        fillSkillCircles();
    });
  
    window.addEventListener('scroll', checkScroll);
  });
  AOS.init({
    offset: 120,
    duration: 1000,
    easing: 'ease',
    delay: 100,
    once: true
  });
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

        // Display a prompt message
    alert('Thank you for your message! We will get back to you shortly.');

        // Optionally, you can reset the form after submission
    this.reset();
    });
    

  
        