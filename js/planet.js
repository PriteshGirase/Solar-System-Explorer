document.addEventListener("DOMContentLoaded", () => {
  // Animate planet image on hover
  const img = document.querySelector(".planet-image img");
  if (img) {
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1) rotate(5deg)";
      img.style.transition = "0.6s ease-in-out";
    });

    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1) rotate(0deg)";
    });
  }

  // Animate stat boxes on scroll
  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "slideIn 0.6s ease-out forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const stats = document.querySelectorAll(".stat");
  stats.forEach(stat => {
    observer.observe(stat);
  });

  // Add CSS animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Smooth scroll for links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});