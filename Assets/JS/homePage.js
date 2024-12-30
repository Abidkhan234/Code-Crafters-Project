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

// For Cart Count

const itemCount = document.getElementById("item-count");

const additemBtn = document.querySelectorAll(".add-item");

let itemCounter = 0;

const incrementingCount = () => {
    itemCounter++;

    itemCount.innerText = itemCounter;
};

additemBtn.forEach((value) => {
    value.addEventListener("click", incrementingCount)
});

// For Cart Count

// For cart item remove

const cartListItem = document.querySelectorAll(".item");

const removingItem = () =>{

    cartListItem.forEach((value) => {
        const slectedItem = value.querySelector(".item-cancel i");
    
        slectedItem.addEventListener("click", (e) => {
            e.target.parentElement.parentElement.parentElement.remove();
        })
    })
    
};



// For cart item remove

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