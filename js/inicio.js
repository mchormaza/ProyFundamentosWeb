document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track");
  const prevButton = document.getElementById("button-prev");
  const nextButton = document.getElementById("button-next");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = items[0].getBoundingClientRect().width;

  let index = 0;

  nextButton.addEventListener("click", () => {
    if (index < items.length - 1) {
      index++;
    } else {
      index = 0;
    }
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  });

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = items.length - 1;
    }
    track.style.transform = `translateX(-${index * itemWidth}px)`;
  });
});
