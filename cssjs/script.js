// Navbar hide/show on scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}, false);

  // Intersection animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  const slideElements = document.querySelectorAll('.slideleft, .slideright, .slidebottom');
  slideElements.forEach(el => observer.observe(el));

  // Hamburger menu toggle
  const menuBtn = document.getElementById("menuBtn");
  const menu = document.getElementById("menu");

  if (menuBtn && menu) {
    menuBtn.addEventListener("click", () => {
      menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    document.querySelectorAll('.menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          menu.style.display = 'none';
        }
      });
    });
  }

  // GSAP scroll animation
  gsap.registerPlugin(ScrollTrigger);
  const scrollSection = document.querySelector(".scroll-section");

  if (scrollSection) {
    gsap.to(scrollSection, {
      x: () => -(scrollSection.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-wrapper",
        start: "top top",
        end: () => "+=" + scrollSection.scrollWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1
      }
    });
  }