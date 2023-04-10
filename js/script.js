function getVisualViewportHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--visual-viewport-height', `${window.visualViewport.height}px`);
  }

  getVisualViewportHeight();

  const nav = document.querySelector('#nav');
  const navBtn = document.querySelector('#nav-btn');
  const navBtnImg = document.querySelector('#nav-btn-img');

  navBtn.onclick = () => {
      if (nav.classList.toggle('open')) {
          navBtnImg.src="Img/NAVCLOSE.svg"
          navBtn.classList.toggle('_click')
      } else {
          navBtnImg.src="Img/menunav.png"
          navBtn.classList.remove('_click')
      }
  }

  var popupButton = document.getElementById("popup-button");
var popup = document.getElementById("popup");
var closeButton = popup.querySelector(".close-button");

// Показываем поп-ап при нажатии на кнопку
popupButton.addEventListener("click", function() {
  popup.style.display = "block";
});

// Закрываем поп-ап при нажатии на кнопку "Close"
closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

// Закрываем поп-ап при нажатии вне его области
window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});


