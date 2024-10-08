//toggle
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};
navSlide();

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

function sendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_ll8p1cp";
  const templateID = "template_f7lnqlz";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Pesan anda terkirim");
    })
    .catch((err) => console.log(err));
}
document.getElementById("email").value = "";
document.getElementById("message").value = "";
document
  .getElementById("form-submit-email")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
