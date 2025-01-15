// For pre-loader

const preLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
    preLoader.style.display = "none";
})

// For pre-loader

// For Navbar

const sideMenu = document.getElementById("side-nav-menu");

const navBar = document.getElementById("nav-bar");

const navCross = document.getElementById("nav-cross");

navBar.addEventListener("click", () => {
    sideMenu.classList.add("side-nav-menu-open");
});

navCross.addEventListener("click", () => {
    sideMenu.classList.remove("side-nav-menu-open");
});

// For Navbar

// For cart open and close

const cartOpenBtn = document.getElementById("cart-open-btn");

const cartCloseBtn = document.getElementById("cart-close-btn");

const cartList = document.querySelector(".cart-list");

const cartListOverlay = document.querySelector(".cart-list-overlay");

cartOpenBtn.addEventListener("click", () => {
    cartList.classList.add("cart-list-open");
    cartListOverlay.classList.add("cart-list-overlay-show");
})

cartCloseBtn.addEventListener("click", () => {
    cartList.classList.remove("cart-list-open");
    cartListOverlay.classList.remove("cart-list-overlay-show");
})

// For cart open and close

// For Add to cart function

const addToCartBtns = document.querySelectorAll(".add-item");

addToCartBtns.forEach((buttton) => {
    buttton.addEventListener("click", (event) => {
        let productCard = event.target.closest(".product-card")
        addToCart(productCard);
    })
})

const addToCart = (event) => {

    const productTitle = event.querySelector(".card-bottom h5").innerText;
    const productPrice = event.querySelector(".card-bottom p").innerText;
    const productImage = event.querySelector(".card-top img").src;

    const cartContent = document.querySelector(".cart-content");

    const cartItem = document.createElement("div");

    cartItem.classList.add("item");

    // For Duplicate Item Checking 

    const cartItemTitle = cartContent.querySelectorAll(".item-title");

    for (const itemTitle of cartItemTitle) {
        if (itemTitle.innerText === productTitle) {
            alert("This item already exist in cart.");
            return;
        }
    }

    // For Duplicate Item Checking 

    cartItem.innerHTML = `

                <div class="container-fluid overflow-hidden">
                    <div class="row">
                        <div class="col-sm-4 mb-3">
                            <div class="item-image">
                                <img src="${productImage}" alt="">
                            </div>
                        </div>

                        <div class="col-sm-8">

                            <div class="item-info d-flex gap-4 align-items-center h-100">

                                <div class="d-flex flex-column gap-3">
                                    <h4 class="item-title m-0 fw-semibold">${productTitle}</h4>
                                    <div class="item-quantity-info d-flex justify-content-between align-items-center">
                                        <input type="number" class="item-quantity" value="1">
                                        <p class="item-price m-0 fs-6 fw-medium">${productPrice}</p>
                                    </div>
                                </div>

                                <div>
                                    <i class="fas fa-xmark" onclick = "removeItem(event)"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

    `;

    cartContent.appendChild(cartItem);

    // For quantity change Total price

    cartItem.querySelector(".item-quantity").addEventListener("change", (event) => {
        let quantity = event.target;

        if (isNaN(quantity.value) || quantity.value <= 0) {
            quantity.value = 1;
        }

        totalPriceUpdate();
    })

    // For quantity change Total price


    totalPriceUpdate();

}

// For Add to cart function

// For item remove 

const removeItem = (item) => {

    let clickedItem = item.target.closest(".item");

    clickedItem.remove();

    cartTotalItemCount();

    totalPriceUpdate();


}

// For item remove 

// For total Price update

const totalPriceUpdate = () => {

    const totalItem = document.querySelectorAll(".item");

    const totalPriceElement = document.getElementById("totalPrice");

    let total = 0;

    totalItem.forEach((item) => {
        const priceElement = item.querySelector(".item-price");
        const quantityElement = item.querySelector(".item-quantity");
        const price = parseFloat(priceElement.innerText.replace("$ ", ""));
        const quantity = quantityElement.value;

        total += price * quantity;
    })

    totalPriceElement.innerText = `$ ${total}`;

}


// For total Price update

// For cart item count

const addItemBtn = document.querySelectorAll(".add-item");
let totalItem = 0;

addItemBtn.forEach((button) => {
    button.addEventListener("click", () => {
        cartTotalItemCount();
    })
});

const cartTotalItemCount = () => {

    const cartItemCountElement = document.getElementById("cart-item-count");

    const cartContent = document.querySelector(".cart-content");

    totalItem = cartContent.children.length;

    cartItemCountElement.innerText = totalItem;

}

// For cart item count

// For Product Section

const productsRowTwo = document.querySelector(".product-section-content-row-2");

const productBtn = document.getElementById("showMoreProductBtn");

productBtn.addEventListener("click", () => {
    if (productsRowTwo.classList.contains("product-section-content-row-2-open")) {
        productsRowTwo.classList.remove("product-section-content-row-2-open");
        productBtn.innerText = "Show More";
    } else {
        productsRowTwo.classList.add("product-section-content-row-2-open");
        productBtn.innerText = "Show Less";
    }
});

// For Product Section

// For Insperation-section 

// Ins-section-slider

const insImage = document.getElementById("ins-image");

const insNext = document.getElementById("ins-next");

const insPre = document.getElementById("ins-pre");

let images = [
    "Assets/Images/home/insperation-section/image-1.png",
    "Assets/Images/home/insperation-section/image-2.png",
    "Assets/Images/home/insperation-section/image-3.png"
];

let imageCounter = 0;

insNext.addEventListener("click", () => {
    imageCounter++;


    if (imageCounter >= images.length) {
        imageCounter = 0;
    }


    insImage.src = images[imageCounter];
});


insPre.addEventListener("click", () => {

    if (imageCounter <= 0) {
        imageCounter = images.length;
    }

    imageCounter--;


    insImage.src = images[imageCounter];
});

// Ins-section-slider

// For Insperation-section 