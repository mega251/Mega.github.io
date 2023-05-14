const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const noteEl = document.getElementById("note");

  console.log("name " + nameEl.value);
  console.log("email " + emailEl.value);
  console.log("note " + noteEl.value);
  axios
    .post("/user", {
      name: nameEl.value,
      email: emailEl.value,
      note: noteEl.value,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  Toastify({
    text: "بە سەرکەوتوویی نێردرا !",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
      color: "white",
      direction: "rtl",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  e.preventDefault();
});
