const products = [
  {
    id: 1,
    name: "CORE LOGO TEE",
    price: 1680
  },
  {
    id: 2,
    name: "ESSENTIAL HOODIE",
    price: 2280
  },
  {
    id: 3,
    name: "UTILITY CARGO PANTS",
    price: 2480
  },
  {
    id: 4,
    name: "TECH WINDBREAKER",
    price: 2980
  }
];


let cart = [];


/* =========================
   金額格式
========================= */

function money(number) {

  return "NT$" + number.toLocaleString("zh-TW");

}


/* =========================
   顯示商品
========================= */

function renderProducts() {

  const productContainer =
    document.querySelector("#products");

  productContainer.innerHTML =
    products.map(function(product) {

      return `
        <article
          class="product-card"
          onclick="addToCart(${product.id})"
        >

          <div class="product-photo"></div>

          <div class="product-info">

            <div class="product-name">
              ${product.name}
            </div>

            <div class="product-price">
              ${money(product.price)}
            </div>

          </div>

        </article>
      `;

    }).join("");

}


/* =========================
   加入購物車
========================= */

function addToCart(id) {

  const product =
    products.find(function(item) {

      return item.id === id;

    });


  const existingItem =
    cart.find(function(item) {

      return item.id === id;

    });


  if (existingItem) {

    existingItem.qty++;

  } else {

    cart.push({

      id: product.id,

      name: product.name,

      price: product.price,

      qty: 1

    });

  }


  renderCart();

  openCart();

}


/* =========================
   顯示購物車
========================= */

function renderCart() {

  const cartCount =
    document.querySelector("#cart-count");


  const totalQuantity =
    cart.reduce(function(total, item) {

      return total + item.qty;

    }, 0);


  cartCount.textContent =
    totalQuantity;


  const cartItems =
    document.querySelector("#cart-items");


  if (cart.length === 0) {

    cartItems.innerHTML = `
      <p style="color:#777;padding:30px 0;">
        購物車目前是空的。
      </p>
    `;

  } else {

    cartItems.innerHTML =
      cart.map(function(item) {

        return `
          <div class="cart-item">

            <div>

              <strong>
                ${item.name}
              </strong>

              <br>

              <small>
                ${money(item.price)}
                × ${item.qty}
              </small>

            </div>

            <button
              onclick="removeItem(${item.id})"
              style="
                background:none;
                border:0;
                color:#aaa;
                cursor:pointer;
              "
            >
              移除
            </button>

          </div>
        `;

      }).join("");

  }


  const total =
    cart.reduce(function(total, item) {

      return total +
        item.price * item.qty;

    }, 0);


  document.querySelector("#cart-total")
    .textContent = money(total);

}


/* =========================
   移除商品
========================= */

function removeItem(id) {

  cart =
    cart.filter(function(item) {

      return item.id !== id;

    });


  renderCart();

}


/* =========================
   開啟購物車
========================= */

function openCart() {

  document
    .querySelector("#cart-panel")
    .classList
    .add("open");


  document
    .querySelector("#overlay")
    .classList
    .add("show");

}


/* =========================
   關閉購物車
========================= */

function closeCart() {

  document
    .querySelector("#cart-panel")
    .classList
    .remove("open");


  document
    .querySelector("#overlay")
    .classList
    .remove("show");

}


/* =========================
   手機選單
========================= */

function toggleMenu() {

  document
    .querySelector("#mobile-menu")
    .classList
    .toggle("open");

}


/* =========================
   結帳
========================= */

function checkout() {

  alert(
    "這是 MIGUEL 第一版 Demo。\n\n" +
    "下一階段會加入真正的結帳、" +
    "訂單與後台管理功能。"
  );

}


/* =========================
   Email 訂閱
========================= */

function subscribe(event) {

  event.preventDefault();

  alert(
    "訂閱功能 Demo。\n\n" +
    "之後可以接 Email 服務。"
  );

}


/* =========================
   啟動網站
========================= */

renderProducts();

renderCart();
