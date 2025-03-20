document.addEventListener("DOMContentLoaded", function() {
  const serviceCards = document.querySelectorAll('.service-card');
  
  serviceCards.forEach(card => {
    card.classList.add('visible');
  });
});
