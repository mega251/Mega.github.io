const itemContainer = document.getElementById("itemContainer");

fetch("../mock-data/items.json")
  .then((res) => res.json())
  .then((data) => {
    const selectedItem = localStorage.getItem("selectedItem");
    if (data.items?.length > 0) {
      const item = data.items.filter((el) => el.id === selectedItem)[0];

      itemContainer.innerHTML += `
            <div dir="rtl" class="item_parent" >
            <div class="item_img_parent">
                <img class="item_img" src="${item.image}" />
                <span class="item_price">$${item.price}
                </span>
                </div>
                <div class="item_title_parent">
                <h1 class="item_title">${item.name} </h1>
                <span class="item_tag">${item.category} </span>
                <span class="item_tag">${item.brand} </span>

                 </div>
                <p class="item_description">${item.description}</p>

                <button onClick="sendRequest()" class="item_button">داوای بکە ! </button>

            </div>
        
        `;
    }
  });

// itemContainer.innerHTML += `
//   <div class="container">
//   <a data-modal="modal-one">Open Modal</a>
// </div>

// <div class="modal" id="modal-one">
//   <div class="modal-bg modal-exit"></div>
//   <div class="modal-container">
//     <h1>Amazing Modal</h1>
//     <h2>Pure Vanilla JavaScript</h2>
//     <button class="modal-close modal-exit">X</button>
//   </div>
// </div>`;
const sendRequest = () => {
  const modals = document.querySelectorAll("[data-modal]");
  const modal = document.getElementById("modal-one");
  modal.classList.add("open");
  const exits = modal.querySelectorAll(".modal-exit");
  exits.forEach(function (exit) {
    exit.addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.remove("open");
    });
  });
};

const modals = document.querySelectorAll("[data-modal]");
console.log(modals);

modals.forEach(function (trigger) {
  trigger.addEventListener("click", function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add("open");
    const exits = modal.querySelectorAll(".modal-exit");
    exits.forEach(function (exit) {
      exit.addEventListener("click", function (event) {
        event.preventDefault();
        modal.classList.remove("open");
      });
    });
  });
});

const form = document.getElementById("form");
console.log(form);
const modal = document.getElementById("modal-one");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const phoneNo = document.getElementById("phoneNumber").value;
  const address = document.getElementById("address")?.value;
  const note = document.getElementById("note")?.value;

  axios
    .post("/user", {
      phoneNo: phoneNo,
      address: address,
      note: note,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  modal.classList.remove("open");
  Toastify({
    text: "داواکاریەکەت بە سەرکەوتوویی وەرگیرا !",
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
});
