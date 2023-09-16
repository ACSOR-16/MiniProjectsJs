const modal = document.querySelector(".modal");
const legoImages = document.querySelectorAll(".superImage");
const btnClose = document.querySelector(".modal-container__close");
// ".hidden"

console.log(legoImages);
legoImages.forEach( lego => {
  lego.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("visible");
  });
});

btnClose.addEventListener("click", () => {
  console.log("here");
  modal.classList.add("hidden");
  modal.classList.remove("visible")
});

