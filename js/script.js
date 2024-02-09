// Toogle kelas active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toogle search
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

//klik diluar elemen
const hamburger = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-btn");
const sc = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//modal box
const itemDetail = document.querySelector("#item-detail");
const itemDetailBtn = document.querySelectorAll(".item-detail-btn");

itemDetailBtn.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetail.style.display = "flex";
    e.preventDefault();
  };
});

//tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetail.style.display = "none";
  e.preventDefault();
};

//keluar modal
const modal = document.querySelector(".modal");

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
