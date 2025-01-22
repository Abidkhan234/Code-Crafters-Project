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
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },



    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },


    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "150",
        cutPrice: "$ 180",
        title: "Syltherine",
        subTitle: "Stylish cafe chair",
        dis: "-30%"
    },
    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "180",
        cutPrice: "",
        title: "Leviosa",
        subTitle: "Stylish cafe Table",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

    {
        image: "../Assets/Images/shop/card-section/image1.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image2.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },
    {
        image: "../Assets/Images/shop/card-section/image3.png",
        price: "200",
        cutPrice: "$ 400",
        title: "Lolito",
        subTitle: "Luxury big sofa",
        dis: "-50%"
    },
    {
        image: "../Assets/Images/shop/card-section/image4.png",
        price: "400",
        cutPrice: "",
        title: "Respira",
        subTitle: "Outdoor bar table and stool",
        dis: "0%"
    },

];

const firstBtn = document.getElementById("1-btn");

const secondBtn = document.getElementById("2-btn");

const thirdBtn = document.getElementById("3-btn");

let firstValue = parseFloat(firstBtn.innerText);

let secondValue = parseFloat(secondBtn.innerText);

let thirdValue = parseFloat(thirdBtn.innerText);

const paginationFunction = (num) => {

    let totalItemPerPage = 16;

    let startIndex = (num - 1) * totalItemPerPage;

    let endIndex = num * totalItemPerPage;

    const productContent = document.querySelector(".product-section-content");

    productContent.innerHTML = "";

    products.slice(startIndex, endIndex).forEach((item) => {
        const prodectCard = document.createElement("div");
        prodectCard.classList.add("product-card");

        prodectCard.innerHTML = `
        <div class="card-top">
                <img src="${item.image}" alt="...">
                <span class="bg-danger position-absolute text-white top-0 end-0 p-2">${item.dis}</span>
              </div>
              <div class="card-bottom ps-3 pt-0 d-flex gap-2 flex-column">
                <h5 class="fw-semibold">${item.title}</h5>
                <p>${item.subTitle}</p>
                <div class="d-flex gap-3">
                  <p style="font-size: large; font-weight: 600;" class="text-black fw-medium m-0">$ ${item.price}</p>
                  <s style="font-size: large; font-weight: 500;">${item.cutPrice}</s>
                </div>
              </div>
              <div class="card-overlay-content text-center d-flex flex-column gap-3 align-items-center">
                <button class="add-item">Add to cart</button>
                <div class="urls d-flex">
                  <i class="fas fa-share-nodes fs-6 text-white align-content-center"></i><a href="#"
                    class="text-white text-decoration-none ms-1 me-3">Share</a>
                  <i class="fas fa-arrow-right-arrow-left fs-6 text-white align-content-center"></i><a href="#"
                    class="text-white text-decoration-none ms-1 me-3">Compare</a>
                  <i class="fa-regular fa-heart fs-6 text-white align-content-center"></i><a href="#"
                    class="text-white text-decoration-none ms-1">Like</a>
                </div>
              </div>
              <div class="card-overlay"></div>
            </div>

        
        `;

        productContent.appendChild(prodectCard);

    });

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


