const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  scrollbar: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 0,
  speed: 600,
  allowTouchMove: false,
  simulateTouch: false,
  grabCursor: false,

  autoHeight: true,
});

const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
const count = document.querySelector("#swiperCount");

let isBlocked = false;

function updateButtons() {
  const current = Number(count.textContent);
  prevBtn.disabled = current <= 1 || isBlocked;
  prevBtn.style.opacity = current <= 1 || isBlocked ? "0.5" : "1";
  nextBtn.disabled = current >= 4 || isBlocked;
  nextBtn.style.opacity = current >= 4 || isBlocked ? "0.5" : "1";
}

function handleClick(direction) {
  if (isBlocked) return;
  const current = Number(count.textContent);

  if (direction === "prev" && current <= 1) return;
  if (direction === "next" && current >= 4) return;

  isBlocked = true;
  updateButtons();

  if (direction === "prev") {
    swiper.slidePrev();
    count.textContent = current - 1;
  } else {
    swiper.slideNext();
    count.textContent = current + 1;
  }

  setTimeout(() => {
    isBlocked = false;
    updateButtons();
  }, 800);
}

prevBtn.onclick = () => handleClick("prev");
nextBtn.onclick = () => handleClick("next");

swiper.on("slideChange", function () {
  count.textContent = this.realIndex + 1;
  updateButtons();
});

updateButtons();
