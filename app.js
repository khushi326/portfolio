// 📌 Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh
    alert("Thank you! Your message has been sent.");
    this.reset(); // clear form
  });
  
  // 📌 Animate sections on scroll
  const sections = document.querySelectorAll(".about-me, .my-project, .contact-me");
  
  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100; // 100px before viewport bottom
  
      if (sectionTop < triggerPoint) {
        section.classList.add("visible");
      }
    });
  });
  
  // 📌 Animate skill bars when About section visible
  const skillBars = document.querySelectorAll(".progress-line span");
  let skillsAnimated = false;
  
  window.addEventListener("scroll", () => {
    const aboutSection = document.querySelector(".about-me");
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
  
    if (sectionTop < triggerPoint && !skillsAnimated) {
      skillBars.forEach((bar) => {
        const width = bar.getAttribute("style").match(/width:\s*(\d+)%/)[1];
        bar.style.width = "0"; // reset
        setTimeout(() => {
          bar.style.width = width + "%"; // animate
        }, 200);
      });
      skillsAnimated = true;
    }
  });
  