// Инициализируем EmailJS
emailjs.init("W1t0lOkmOZsojBnb_");

// Отправляем данные формы на почту
var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm("service_mn2buuj", "template_bgcx0r9", this)
    .then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      // Показываем сообщение об успешной отправке формы
      alert("Ваше сообщение отправлено!");
      // Закрываем поп-ап
      popup.style.display = "none";
    }, function(error) {
      console.log("FAILED...", error);
      // Показываем сообщение об ошибке отправки формы
      alert("Ошибка отправки сообщения. Пожалуйста, попробуйте еще раз.");
    });
});