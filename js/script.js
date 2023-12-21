const toggleBtn = document.querySelectorAll("button");

toggleBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const answer = event.currentTarget.parentElement.querySelector(".answer");
    answer.classList.toggle("show");

    const toggleImgMinus =
      event.currentTarget.parentElement.querySelector(".toggle__image-minus");
    const toggleImgPlus =
      event.currentTarget.parentElement.querySelector(".toggle__image-plus");

    if (toggleImgMinus.classList.contains("hidden")) {
      toggleImgMinus.classList.toggle("show");
      toggleImgPlus.classList.toggle("hidden");
    }
  });
});
