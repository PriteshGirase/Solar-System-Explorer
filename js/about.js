// About page animations
document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideIn 0.8s ease-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all about sections
  const sections = document.querySelectorAll(".about-section");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.animationDelay = `${index * 0.1}s`;
    observer.observe(section);
  });

  // Smooth scroll for any anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add hover effects to cards
  const cards = document.querySelectorAll(
    ".info-card, .timeline-content, .stage-card, .evidence-card, " +
    ".galaxy-card, .reason-card, .struct-item, .planet-detail"
  );

  cards.forEach(card => {
    card.addEventListener("mouseenter", function() {
      this.style.transition = "all 0.3s ease";
    });
  });

  // Animate numbers in composition cards
  const percentageElements = document.querySelectorAll(".composition-card .percentage");
  const animatePercentage = (element) => {
    const finalValue = element.textContent;
    const numericValue = parseInt(finalValue);
    let currentValue = 0;
    const increment = numericValue / 30;

    const counter = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        element.textContent = finalValue;
        clearInterval(counter);
      } else {
        element.textContent = Math.floor(currentValue) + "%";
      }
    }, 30);
  };

  percentageElements.forEach(element => {
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animatePercentage(entry.target);
          observer2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer2.observe(element);
  });
});
