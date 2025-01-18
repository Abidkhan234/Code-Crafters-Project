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

cartOpenBtn.addEventListener("click", () => {
    cartList.classList.add("cart-list-open");
    removingItem();
})

cartCloseBtn.addEventListener("click", () => {
    cartList.classList.remove("cart-list-open");
})

// For cart open and close

// For add to cart functionality

// For pagination functionality

const products = [
    {
        title : "",
    }
];

const firstBtn = document.getElementById("1-btn");

const secondBtn = document.getElementById("2-btn");

const thirdBtn = document.getElementById("3-btn");

let firstValue = parseFloat(firstBtn.innerText);

let secondValue = parseFloat(secondBtn.innerText);

let thirdValue = parseFloat(thirdBtn.innerText);

const paginationFunction = (num) => {

    let totalItemPerPage = 8;

    const productContent = document.querySelector(".product-section-content");

    productContent.innerHTML = "";

    const creatingItem = (start, end) => {

        products.slice(start, end).forEach((item) => {

            const productCard = document.createElement("div");

            productCard.classList.add("product-card");

            productCard.innerHTML += `
            
               <div class="card-top">
                                    <img src="${item.image}" alt="...">
                                    <span class="bg-danger position-absolute text-white top-0 end-0 p-2">-30%</span>
                                </div>
                                <div class="card-bottom pt-0 d-flex gap-2 flex-column">
                                    <h5 class="fw-semibold">${item.title}</h5>
                                    <p class="text-black fw-medium m-0">${item.price}</p>
                                </div>
                                <div class="card-overlay-content text-center d-flex flex-column gap-3 align-items-center">
                                    <button class="add-item">Add to cart</button>
                                    <div class="urls d-flex">
                                        <i class="fas fa-share-nodes fs-6 text-white align-content-center"></i><a href="#"
                                            class="text-white text-decoration-none ms-1 me-3">Share</a>
                                        <i class="fas fa-arrow-right-arrow-left fs-6 text-white align-content-center"></i><a
                                            href="#" class="text-white text-decoration-none ms-1 me-3">Compare</a>
                                        <i class="fa-regular fa-heart fs-6 text-white align-content-center"></i><a href="#"
                                            class="text-white text-decoration-none ms-1">Like</a>
                                    </div>
                                </div>
                                <div class="card-overlay"></div>
    
            
            `;

            productContent.appendChild(productCard);
        });

    }

    let startIndex = (num - 1) * totalItemPerPage;

    let endIndex = num * totalItemPerPage;

    creatingItem(startIndex, endIndex);

}

firstBtn.addEventListener("click", () => paginationFunction(1));
secondBtn.addEventListener("click", () => paginationFunction(2));
thirdBtn.addEventListener("click", () => paginationFunction(3));


paginationFunction(1);

// For pagination functionality

// For active link functionnality

const paginationBtns = document.querySelectorAll(".pagination-btns button");

paginationBtns.forEach((button) => {
    button.addEventListener("click", (event) => {
        let checkedBtn = event.target;
        activeLink(checkedBtn);
    })
})

const activeLink = (btn) => {
    let btnChecked = btn.classList.contains("checked");

    if (btnChecked === false) {

        paginationBtns.forEach((button) => {
            button.classList.remove("checked");
        })

        btn.classList.add("checked");

    }
}

// For active link functionnality

// For add to cart functionality


