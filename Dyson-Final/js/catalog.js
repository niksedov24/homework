const catalogBtnMore = document.getElementById("catalogBtn");
const catalogListItems = document.querySelectorAll(
  ".catalog__filters__item-none",
);

catalogBtnMore.addEventListener("click", () => {
  catalogListItems.forEach((item) => {
    item.classList.toggle("catalog__filters__item--more");
    catalogBtnMore.classList.add("hidden");
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
  const filterContainer = document.querySelector(".catalog__filters-btns");

  const closeMenu = () => {
    filterOpen.classList.remove("catalog__filters-select--more");
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    filterOpen.classList.toggle("catalog__filters-select--more");
  };

  filterDiv.addEventListener("click", toggleMenu);

  document.addEventListener("click", (e) => {
    const isClickInside =
      filterOpen.contains(e.target) || filterDiv.contains(e.target);

    if (!isClickInside) {
      closeMenu();
    }
  });

  const filterOptions = document.querySelectorAll(".catalog__filters-option");

  filterOptions.forEach((option) => {
    const filterCompletedIcon = option.querySelector(
      ".catalog__filters-completed--none",
    );

    option.addEventListener("click", (e) => {
      e.stopPropagation();

      filterOptions.forEach((otherOption) => {
        if ("completed" in otherOption.dataset) {
          delete otherOption.dataset.completed;
        }

        const otherIcon = otherOption.querySelector(
          ".catalog__filters-completed--none",
        );
        if (otherIcon) {
          otherIcon.classList.remove("catalog__filters-completed--more");
        }
      });

      option.dataset.completed = "true";
      if (filterCompletedIcon) {
        filterCompletedIcon.classList.add("catalog__filters-completed--more");
      }

      const newText = option.textContent.trim();
      filterDivText.textContent = newText;

      closeMenu();
    });
  });
};
const getAllProductsContainers = () => {
  return document.querySelectorAll(".catalog__products");
};

const getCardsFromContainer = (container) => {
  return Array.from(container.children);
};

let originalCardsMap = new Map();

const saveOriginalOrderForAll = () => {
  const containers = getAllProductsContainers();
  containers.forEach((container, index) => {
    originalCardsMap.set(index, Array.from(container.children));
  });
};

saveOriginalOrderForAll();

const sortContainerCards = (container, filterValue, originalCards) => {
  let sortedCards = [...originalCards];

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
  container.innerHTML = "";
  sortedCards.forEach((card) => {
    container.appendChild(card);
  });
};

export const updateCards = (filterValue) => {
  const containers = getAllProductsContainers();

  containers.forEach((container, index) => {
    const originalCards =
      originalCardsMap.get(index) || Array.from(container.children);
    sortContainerCards(container, filterValue, originalCards);
  });
};

const filterOptionsForSort = document.querySelectorAll(
  ".catalog__filters-option",
);

filterOptionsForSort.forEach((option) => {
  option.addEventListener("click", () => {
    const filterValue = option.dataset.value;
    updateCards(filterValue);
    console.log("Фильтр применен:", filterValue);
  });
});

updateCards("popular");
