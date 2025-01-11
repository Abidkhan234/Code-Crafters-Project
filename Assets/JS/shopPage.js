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
// cards start

function page_change_btn(e){
    let btn = e
    const btn1 = document.getElementById("p-1-btn")
    const btn2 = document.getElementById("p-2-btn")
    const btn3 = document.getElementById("p-3-btn")
    const btn4 = document.getElementById("p-4-btn")
    btn1.classList.remove("bg-color1")
    btn1.classList.remove("first")

    btn2.classList.remove("bg-color1")
    btn3.classList.remove("bg-color1")
    btn4.classList.remove("bg-color1")
    btn.classList.add("bg-color1")
}




// cards end
