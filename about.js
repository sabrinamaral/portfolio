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
  // Select the card-back content
  const cardBack = card.querySelector(".card-back");
  if (cardBack) {
    modalBody.innerHTML = `<h2>${title}</h2>${cardBack.innerHTML}`;
    modal.style.display = "block";
  }
  // Set the image src to the overlay (enlarged image)
  function enlargeImg() {
    overlay.classList.remove("hidden");
    overlayImg.src = this.firstElementChild.getAttribute("src");
  }
  // Add event listeners
  modalBody.querySelectorAll(".img-thumb").forEach(function (thumb) {
    thumb.addEventListener("click", enlargeImg);
  });
}
// Remove event listeners after use it
modalBody.querySelectorAll(".img-thumb").forEach(function (thumb) {
  thumb.removeEventListener("click", enlargeImg);
});

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
