const catalogBtnMore = document.getElementById("catalogBtn");
const catalogListItems = document.querySelectorAll(
  ".catalog__filters__item-none",
);

catalogBtnMore.addEventListener("click", () => {
  catalogListItems.forEach((item) => {
    item.classList.toggle("catalog__filters__item--more");
  });
});

export const cardsMore = () => {
  const cards = document.querySelectorAll(".catalog__products-article");
  cards.forEach((card) => {
    const minus = card.querySelector("#minus");
    const plus = card.querySelector("#plus");
    const text = card.querySelector(".catalog__incremental-text");

    let count = 1;
    minus.addEventListener("click", () => {
      if (count === 1) {
        return;
      }
      count = count - 1;
      text.textContent = count;
    });
    plus.addEventListener("click", () => {
      if (count === 9) {
        return;
      }
      count = count + 1;
      text.textContent = count;
    });
  });
};

export const filtersChoose = () => {
  const filterDiv = document.querySelector(".catalog__filters-div");
  const filterDivText = document.querySelector(".catalog__filters-text");
  const filterOpen = document.querySelector(".catalog__filters-select");
  filterDiv.addEventListener("click", () => {
    filterOpen.classList.toggle("catalog__filters-select--more");
  });

  const filterOptions = document.querySelectorAll(".catalog__filters-option");

  filterOptions.forEach((option) => {
    const filterCompletedIcon = option.querySelector(
      ".catalog__filters-completed--none",
    );
    option.addEventListener("click", () => {
      filterOptions.forEach((otherOption) => {
        if ("completed" in otherOption.dataset) {
          delete otherOption.dataset.completed;
        }
      });
      option.dataset.completed = "true";
      filterCompletedIcon.classList.add("catalog__filters-completed--more");
      const newText = option.textContent;
      filterDivText.textContent = newText;
    });
  });
};
const cardsContainer = document.querySelector(".catalog__products");
const filterOptions = document.querySelectorAll(".catalog__filters-option");
const getCardsArray = () => {
  return Array.from(cardsContainer.children);
};
let originalCards = [];
const saveOriginalOrder = () => {
  originalCards = Array.from(cardsContainer.children);
};

saveOriginalOrder();

export const updateCards = (filterValue) => {
  let sortedCards;

  if (filterValue === "popular") {
    sortedCards = [...originalCards];
  } else {
    const cards = getCardsArray();
    sortedCards = [...cards];
  }
  switch (filterValue) {
    case "popular":
      break;
    case "expensive":
      sortedCards.sort((a, b) => {
        return parseInt(b.dataset.price) - parseInt(a.dataset.price);
      });
      break;
    case "cheap":
      sortedCards.sort((a, b) => {
        return parseInt(a.dataset.price) - parseInt(b.dataset.price);
      });
      break;
    case "new":
      sortedCards.sort((a, b) => {
        return (
          (b.dataset.new === "true" ? 1 : 0) -
          (a.dataset.new === "true" ? 1 : 0)
        );
      });
      break;
    case "rating":
      sortedCards.sort((a, b) => {
        return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
      });
      break;
  }

  cardsContainer.innerHTML = "";

  sortedCards.forEach((card) => {
    cardsContainer.appendChild(card);
  });
};

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    updateCards(option.dataset.value);
    console.log(option.dataset.value);
  });
});

updateCards("popular");
