// For pre-loader

const preLoader = document.querySelector(".page-loader");

window.addEventListener("load", () => {
    preLoader.style.display = "none";
    DirectingFunc()
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

// For re-Directing func
const fromEle = document.getElementById("from");

const toEle = document.getElementById("to");

const DirectingFunc = () => {
    const reference = document.referrer;

    if (reference.includes("index.html")) {
        fromEle.innerText = "Home";
    } else if (reference.includes("shopPage.html")) {
        fromEle.innerText = "Shop";
    } else if (reference.includes("blogPage.html")) {
        fromEle.innerText = "Blog";
    } else if (reference.includes("checkoutpage.html")) {
        fromEle.innerText = "Checkout";
    }

}

// For re-Directing func

// Geting Data from local stroage

const storageData = JSON.parse(sessionStorage.getItem("productContentObj"));

const tableBody = document.querySelector("#table-body");

const gettingDataFunc = () => {

    storageData.forEach((v) => {

        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>
                            <img src="${v.imageSrc}" alt="">
                        </td>
                        <td>
                            <span class="cl">${v.title}</span>
                        </td>
                        <td class="cl item-price">${v.price}</td>
                        <td><input type="number" value="1" min="1" class="item-quantity" style="width: 50px;"></td>
                        <td class="text-black item-sub-total"></td>
                        <td><button class="remove-item border-0 bg-transparent"><img src="../Assets/Images/cart/cart-section/ant-design_delete-filled.png" alt=""
                                    class="delete"></button></td>
    `;

        tableBody.appendChild(tr);
    });

    // For item-remove Func

    const removeItemElelment = document.querySelectorAll(".remove-item");

    removeItemElelment.forEach((v) => {
        v.addEventListener("click", (event) => {
            let parentElement = event.target.closest("tr");

            parentElement.remove();
        })
    })

    // For item-remove Func


    // For quantity change price
    const QuantityEle = tableBody.querySelectorAll(".item-quantity");

    QuantityEle.forEach((v) => {
        v.addEventListener("change", () => totalPriceUpdate(tableBody));
    })

    // For quantity change price

    // For total price
    totalPriceUpdate(tableBody);
    // For total price

}

window.addEventListener("load", () => gettingDataFunc());

// Geting Data from local stroage

// For total Price update

const totalPriceUpdate = (TB) => {

    const totalItem = TB.querySelectorAll("tr");

    let total = 0;

    totalItem.forEach((item) => {

        const totalPriceElement = item.querySelector(".item-sub-total");

        const itemPriceEle = item.querySelector(".item-price");

        const itemQuantityEle = item.querySelector(".item-quantity");

        let itemPrice = parseFloat(itemPriceEle.innerText.replace("$", ""));

        let itemQuantity = parseFloat(itemQuantityEle.value);

        total += itemPrice * itemQuantity;

        totalPriceElement.innerText = `$ ${total}`;

        total = 0;
    })

}

// For total Price update