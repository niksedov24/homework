export const reviewsCards = () => {
  const cards = document.querySelectorAll(".reviews__cards-article");
  cards.forEach((card) => {
    const cardReviewBtn = card.querySelector("#reviews__cards-btn");
    const cardReviewPhotos = card.querySelectorAll(
      ".reviews__cards-image--none",
    );

    if (!cardReviewBtn) {
      return;
    }

    cardReviewBtn.addEventListener("click", () => {
      cardReviewPhotos.forEach((photo) => {
        photo.classList.toggle("reviews__cards-image--more");
        cardReviewBtn.classList.add("hidden");
      });
    });
  });

  const reviewsScoreCards = document.querySelectorAll(
    ".reviews__cards-article--none",
  );
  const reviewsScoreBtn = document.querySelector("#reviewsBtn");

  reviewsScoreBtn.addEventListener("click", () => {
    reviewsScoreCards.forEach((card) => {
      card.classList.toggle("reviews__cards-article--more");
      reviewsScoreBtn.classList.add("hidden");
    });
  });
};
