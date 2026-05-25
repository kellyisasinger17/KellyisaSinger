document.querySelectorAll(".gallery-card").forEach((card) => {
  const carousel = card.querySelector(".scroll-carousel");
  if (!carousel) {
    return;
  }

  const frame = document.createElement("div");
  frame.className = "gallery-frame";
  carousel.parentNode.insertBefore(frame, carousel);
  frame.appendChild(carousel);

  const makeButton = (direction, label, text) => {
    const button = document.createElement("button");
    button.className = `gallery-arrow ${direction}`;
    button.type = "button";
    button.setAttribute("aria-label", label);
    button.textContent = text;
    button.addEventListener("click", () => {
      carousel.scrollBy({
        left: direction === "prev" ? -carousel.clientWidth : carousel.clientWidth,
        behavior: "smooth",
      });
    });
    frame.appendChild(button);
  };

  makeButton("prev", "Previous image", "‹");
  makeButton("next", "Next image", "›");
});
