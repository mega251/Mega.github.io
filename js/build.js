const buildTable = document.getElementById("buildTable");
const buildList = [
  "cpu",
  "gpu",
  "ram",
  "psu",
  "motherBoard",
  "case",
  "storage",
  "monitor",
];

let totalPrice;
const totalPriceEl = document.getElementById("totalPrice");

fetch("../mock-data/items.json")
  .then((res) => res.json())
  .then((data) => {
    if (data.items?.length > 0) {
      buildList.map((el) => {
        totalPrice += data.items.filter(
          (item) =>
            item.category.toLowerCase().trim() === el.toLowerCase().trim()
        )[0]?.price;
        buildTable.insertAdjacentHTML(
          "beforeend",
          `

        <tr>
          <td>${el.toUpperCase()}</td>
          <td>
            <select onChange="onChangeItem('${el}')" id='${el}Select'>
              ${data.items
                .filter(
                  (item) =>
                    item.category.toLowerCase().trim() ===
                    el.toLowerCase().trim()
                )
                .map((item, i) => {
                  return `<option ${i === 0 && "selected"} value='${
                    item.price
                  }'>${item.name}</option>`;
                })}
            </select>
          </td>
          <td id='${el}Price'>$${
            data.items.filter(
              (item) =>
                item.category.toLowerCase().trim() === el.toLowerCase().trim()
            )[0]?.price
              ? data.items.filter(
                  (item) =>
                    item.category.toLowerCase().trim() ===
                    el.toLowerCase().trim()
                )[0]?.price
              : "0"
          }</td>
        </tr>
        `
        );
      });
      checkPrices();
    }
  });

const onChangeItem = (item) => {
  const priceField = document.getElementById(`${item}Price`);
  const selectEl = document.getElementById(`${item}Select`);
  priceField.innerHTML = "$" + selectEl.value;
  checkPrices();
};

const checkPrices = () => {
  totalPrice = 0;
  totalPriceEl.innerHTML += "";
  buildList.map((el) => {
    const itemField = document.getElementById(`${el}Price`);
    totalPrice += +itemField.innerText.replace("$", "");
    totalPriceEl.innerHTML = "$" + totalPrice;
  });
};

const openModal = () => {
  const modal = document.getElementById("modal-one");
  modal.classList.add("open");
  const exits = modal.querySelectorAll(".modal-exit");
  exits.forEach(function (exit) {
    exit.addEventListener("click", function (event) {
      event.preventDefault();
      modal.classList.remove("open");
    });
  });
  const listEl = document.getElementById("list");
  let list = [];
  buildList.map((el) => {
    const priceField = document.getElementById(`${el}Price`);
    const itemField = document.getElementById(`${el}Select`);
    console.log(itemField.options[itemField.selectedIndex].text);

    const price = +priceField.innerText.replace("$", "");
    list.push({
      component: itemField.options[itemField.selectedIndex].text,
      price,
    });
  });
  list.map((el) => {
    listEl.innerHTML += `<span>$${el.price}: ${el.component} </span>`;
  });
};

const form = document.getElementById("form");
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
