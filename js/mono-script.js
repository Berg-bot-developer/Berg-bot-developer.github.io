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