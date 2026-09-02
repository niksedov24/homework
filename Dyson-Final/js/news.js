export const newsCardsMore = () => {
  const newsBtnMore = document.querySelector("#newsBtn");
  const newsWrapper = document.querySelector(".news-wrapper--none");

  newsBtnMore.addEventListener("click", () => {
    newsWrapper.classList.toggle("news-wrapper--more");
    newsBtn.classList.add("hidden");
  });
};
