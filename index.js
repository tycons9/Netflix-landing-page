const form = document.getElementsByClassName('emailForm');
  const emailInput = document.getElementsByClassName('emailInput');
  const errorMsg = document.getElementsByClassName('errorMsg');

  form.addEventListener('submit', function (e) {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      e.preventDefault(); 
      errorMsg.textContent = "Please enter a valid email address.";
    } else {
      errorMsg.textContent = ""; 
    }
    
  });
  const faqItems = document.querySelectorAll('.faq-item');
      
  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Close all other active items
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
        if (i !== item) i.nextElementSibling.style.maxHeight = null;
      });

      // Toggle this one
      item.classList.toggle('active');
      const answer = item.nextElementSibling;
      if (item.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = null;
      }
    });
  });