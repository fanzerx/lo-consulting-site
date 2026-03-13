document.addEventListener("DOMContentLoaded", function () {
  /* =========================
  SLIDER
  ========================= */
  const slides = document.querySelectorAll(".slide");
  const dotsContainer = document.querySelector(".slider-dots");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");
  const hero = document.querySelector(".hero");

  let index = 0;
  let interval = null;
  const sliderDelay = 4000;

  if (slides.length > 0 && dotsContainer) {
    slides.forEach((slide, i) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");

      if (i === 0) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        showSlide(i);
        restartSlider();
      });

      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showSlide(i) {
      slides[index].classList.remove("active");
      dots[index].classList.remove("active");

      index = i;

      slides[index].classList.add("active");
      dots[index].classList.add("active");
    }

    function nextSlide() {
      const newIndex = (index + 1) % slides.length;
      showSlide(newIndex);
    }

    function prevSlide() {
      const newIndex = (index - 1 + slides.length) % slides.length;
      showSlide(newIndex);
    }

    function startSlider() {
      stopSlider();
      interval = setInterval(nextSlide, sliderDelay);
    }

    function stopSlider() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }

    function restartSlider() {
      startSlider();
    }

    if (next) {
      next.addEventListener("click", function () {
        nextSlide();
        restartSlider();
      });
    }

    if (prev) {
      prev.addEventListener("click", function () {
        prevSlide();
        restartSlider();
      });
    }

    if (hero) {
      hero.addEventListener("mouseenter", stopSlider);
      hero.addEventListener("mouseleave", startSlider);
    }

    startSlider();
  }

/*certificados*/

const certificados = document.querySelectorAll(".certificado-float");

certificados.forEach(img => {

img.addEventListener("click", function(){

modal.style.display = "flex";
modalImg.src = this.src;

});

});


  /* =========================
  IMAGE MODAL
  ========================= */
  const projectImages = document.querySelectorAll(".project-card img, .gallery img, .service-gallery img, .crc-imagem img");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const close = document.querySelector(".close");

  if (projectImages.length > 0 && modal && modalImg) {
    projectImages.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        modalImg.alt = this.alt || "Imagem ampliada";
      });
    });

    if (close) {
      close.addEventListener("click", function () {
        modal.style.display = "none";
      });
    }

    modal.onclick = function(e){
    if(e.target === modal){
    modal.style.display = "none";
    }
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
      }
    });
  }

  /* =========================
  REVEAL SECTION
  ========================= */
  function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealSections);
  revealSections();

  /* =========================
  HEADER SCROLL
  ========================= */
  const header = document.querySelector(".header");

  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* =========================
  COUNTERS
  ========================= */
  const counters = document.querySelectorAll(".counter");
  let countersStarted = false;

  function startCounters() {
    if (countersStarted) return;

    const sobreSection = document.querySelector(".sobre-numeros");
    if (!sobreSection) return;

    const sectionTop = sobreSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 80) {
      counters.forEach((counter) => {
        counter.innerText = "0";

        const target = +counter.getAttribute("data-target");
        const duration = 1800;
        const stepTime = 20;
        const totalSteps = Math.max(1, Math.floor(duration / stepTime));
        const increment = target / totalSteps;

        function updateCounter() {
          const current = +counter.innerText;

          if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, stepTime);
          } else {
            counter.innerText = `${target}+`;
          }
        }

        updateCounter();
      });

      countersStarted = true;
    }
  }

  window.addEventListener("scroll", startCounters);
  startCounters();

  /* =========================
  MENU MOBILE
  ========================= */
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const menuLinks = document.querySelectorAll(".menu a");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
    });

    menuLinks.forEach((link) => {
      link.addEventListener("click", function () {
        menu.classList.remove("active");
      });
    });

    document.addEventListener("click", function (e) {
      const clickedInsideMenu = menu.contains(e.target);
      const clickedToggle = toggle.contains(e.target);

      if (!clickedInsideMenu && !clickedToggle) {
        menu.classList.remove("active");
      }
    });
  }

  /* =========================
  SCROLL SUAVE MENU
  ========================= */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetSelector = this.getAttribute("href");

      if (!targetSelector || targetSelector === "#") return;

      const targetElement = document.querySelector(targetSelector);

      if (targetElement) {
        e.preventDefault();

        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });
});
