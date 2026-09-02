import BurgerMenu from "./burger.js";
import { cardsMore, filtersChoose } from "./catalog.js";
import { reviewsCards } from "./reviews.js";
import { newsCardsMore } from "./news.js";
import "./swiper.js";
try {
  // const headerFixed = new HeaderFixed({
  //    HEADER: "header",
  //    HEADER_FIXED: "header--fixed",
  // });

  new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "header__menu",
    HEADER_MENU_OPEN: "header__menu--open",
    LABEL: {
      OPEN: "Открыть меню",
      CLOSE: "Закрыть меню",
    },
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    MENU_LINK: "header__nav-link",
    BREAKPOINT: 1200,
  });
} catch (error) {
  console.error(error);
}

document.addEventListener("DOMContentLoaded", () => {
  cardsMore();
  filtersChoose();

  reviewsCards();
  newsCardsMore();
});
