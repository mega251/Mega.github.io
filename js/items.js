const itemsContainer = document.getElementById("items");
let items = [];
const checkedFilters = [];

const getItems = () => {
  fetch("../mock-data/items.json")
    .then((res) => res.json())
    .then((data) => {
      items = data.items;
      if (items?.length > 0) {
        items.map((item) => {
          itemsContainer.innerHTML += `
        <div onClick="handleNavigate(${item.id})" class="item">
            <img src=${item.image} alt=${item.name} />
            <hr />
            <h1>${item.name}</h1>
            <h2>Price: ${item.price}</h2>
          </div>
        `;
        });
      }
    });
};

const handleNavigate = (id) => {
  localStorage.setItem("selectedItem", id);
  window.location = "itemDetail.html";
};

getItems();

const filterByCategory = () => {
  itemsContainer.innerHTML = ``;
  console.log(checkedFilters);
  if (checkedFilters.length === 0) {
    return getItems();
  }

  items = items.filter(
    (item) =>
      checkedFilters.includes(item.category.toLowerCase().trim()) ||
      checkedFilters.includes(item.brand.toLowerCase().trim())
  );
  items.map((item) => {
    itemsContainer.innerHTML += `
      <div class="item">
        <img src=${item.image} alt=${item.name} />
        <hr />
        <h1>${item.name}</h1>
        <h2>Price: ${item.price}</h2>
        <button>ADD TO CART</button>
      </div>
    `;
  });
};
const fetchItems = () => {
  fetch("../mock-data/items.json")
    .then((res) => res.json())
    .then((data) => {
      items = data.items;
    });
};
const checkbox = document.querySelectorAll("input[type=checkbox]");

checkbox.forEach((item) => {
  item.addEventListener("change", (e) => {
    if (e.target.checked) {
      checkedFilters.push(e.target["name"]);
    } else {
      checkedFilters.splice(checkedFilters.indexOf(e.target["name"]), 1);
    }

    filterByCategory();
  });
});

// checkbox.addEventListener("change", function () {
//   console.log(this);
//   if (this.checked) {
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//   }
// });

const searchInput = document.getElementById("search");
const handleSearch = () => {
  const value = searchInput.value.toLowerCase();
  if (value === "") return getItems();
  itemsContainer.innerHTML = ``;
  fetchItems();
  items = items.filter(
    (item) =>
      item.name.toLowerCase().includes(value) ||
      item.brand.toLowerCase().includes(value)
  );
  items.map((item) => {
    itemsContainer.innerHTML += `
      <div class="item">
        <img src=${item.image} alt=${item.name} />
        <hr />
        <h1>${item.name}</h1>
        <h2>Price: ${item.price}</h2>
        <button>ADD TO CART</button>
      </div>
    `;
  });
};
const priceRange = document.getElementById("priceRange");
const priceLabel = document.getElementById("priceLabel");

const onPriceChange = () => {
  itemsContainer.innerHTML = ``;
  priceLabel.innerHTML = "$" + priceRange.value;

  if (checkedFilters.length > 0) {
    fetchItems();
    items = items.filter(
      (item) =>
        +item.price <= priceRange.value &&
        (checkedFilters.includes(item.category.toLowerCase().trim()) ||
          checkedFilters.includes(item.brand.toLowerCase().trim()))
    );
  } else {
    fetchItems();
    items = items.filter((item) => +item.price <= priceRange.value);
  }

  items.map((item) => {
    itemsContainer.innerHTML += `
      <div class="item">
        <img src=${item.image} alt=${item.name} />
        <hr />
        <h1>${item.name}</h1>
        <h2>Price: ${item.price}</h2>
        <button>ADD TO CART</button>
      </div>
    `;
  });
};

const dateRange = document.getElementById("dateRange");
const dateLabel = document.getElementById("dateLabel");

const onDateChange = () => {
  itemsContainer.innerHTML = ``;
  dateLabel.innerHTML = dateRange.value;

  if (checkedFilters.length > 0) {
    fetchItems();
    items = items.filter(
      (item) =>
        item.date <= dateRange.value &&
        (checkedFilters.includes(item.category.toLowerCase().trim()) ||
          checkedFilters.includes(item.brand.toLowerCase().trim()))
    );
  } else {
    fetchItems();
    items = items.filter((item) => item.date <= dateRange.value);
  }

  items.map((item) => {
    itemsContainer.innerHTML += `
      <div class="item">
        <img src=${item.image} alt=${item.name} />
        <hr />
        <h1>${item.name}</h1>
        <h2>Price: ${item.price}</h2>
        <button>ADD TO CART</button>
      </div>
    `;
  });
};

