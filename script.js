document.addEventListener("DOMContentLoaded", function () {
  var hoverImages = document.querySelectorAll(".hover-img");

  hoverImages.forEach(function (img) {
    var originalSrc = img.src;
    var hoverSrc = img.dataset.hover;

    img.addEventListener("mouseover", function () {
      img.src = hoverSrc;
    });

    img.addEventListener("mouseout", function () {
      img.src = originalSrc;
    });
  });
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
