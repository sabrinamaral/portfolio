// ABOUT PAGE

// MODAL
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const modalBody = document.getElementById("modal-body");

// CERTIFICATES AND BOOKS ENLARGEMENT
const overlay = document.querySelector(".enlarged-thumb-overlay");
const overlayImg = overlay.querySelector("img");
const closeEnlargedImgBtn = overlay.querySelector(".close-enlarged-thumb");

// OPEN MODAL
function openModal(title, card) {
  const cardBack = card.querySelector(".card-back"); // Select the card-back content
  if (cardBack) {
    modalBody.innerHTML = `<h2>${title}</h2>${cardBack.innerHTML}`;
    modal.style.display = "block";
  }
  // ENLARGE IMG | add event listeners to .img-thumb elements
  modalBody.querySelectorAll(".img-thumb").forEach(function (thumb) {
    thumb.addEventListener("click", function () {
      overlay.classList.remove("hidden");
      overlayImg.src = this.firstElementChild.getAttribute("src");
    });
  });
}
// CLOSE MODAL
closeBtn.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// CLOSE ENLARGED IMG
closeEnlargedImgBtn.onclick = function () {
  overlay.classList.add("hidden");
  overlayImg.src = "";
};

// CONTACT PAGE
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
