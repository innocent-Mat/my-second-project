const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");
const title = document.getElementById("blazer");

//change product

const product = [
    {   id:1,
        title:"AIR FORCE",
        price: 199,
        colors:[
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "blue",
                img: "./img/air2.png",
            }
        ]
    },
    {   id:2,
        title: "Air Jordan",
        price: 199,
        colors:[
            {   code: "lightgray",
                img: "./img/jordan.png",
                
            },
            {    
                code: "green",
                img: "./img/jordan2.png",
            }
        ]
    },
    {   id:3,
        title: "Blazer",
        price: 109,
        colors:[
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            }
        ]
    },
    {   id:4,
        title:"Crater",
        price: 99,
        colors:[
           {
                code: "blue",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ]
    },
    {   id:5,
        title:"Hippop",
        price: 199,
        colors:[
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ]
    },

]

let choosenProduct = product[0];
const currentProductImg =document.querySelector(".productimg");
const currentProductTitle =document.querySelector(".title");
const currentProductPrice =document.querySelector(".price");
const currentProductColors =document.querySelectorAll(".color");
const currentProductSizes =document.querySelectorAll(".sizes");


// nav bar
const OpenMenues = document.querySelector(".fa-bars");
const ClosedMenu = document.querySelector(".fa-close");
const NavBottom = document.querySelector(".nav_bottom")

menuItems.forEach((item, index) =>{
    item.addEventListener("click", ()=>{
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    title.style.color= "white";
    title.style.right= `1rem`;
    // change product
    choosenProduct = product[index];
    currentProductTitle.textContent = choosenProduct.title;
    currentProductImg.src = choosenProduct.colors[0].img;
    currentProductPrice.textContent = "$ " + choosenProduct.price;

    //change the product image 
    currentProductColors.forEach((color, index)=>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
    })
    });

});
//when you click on color let change 
currentProductColors.forEach((color, index)=>{
    color.addEventListener("click", ()=>
    {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})
OpenMenues.addEventListener('click', ()=>{
    NavBottom.classList.add('active');
    OpenMenues.style.display = 'none';
    ClosedMenu.style.display = 'block';

} )
ClosedMenu.addEventListener('click', ()=>{
    NavBottom.classList.remove('active');
    ClosedMenu.style.display = 'none';
    OpenMenues.style.display = 'block';

} )

/* payment part */
const OpenPay = document.querySelector(".pay");
const payment = document.querySelector(".payment");
const closePayment= document.querySelector(".close");

OpenPay.addEventListener('click', ()=>{
  payment.style.display= "flex";
} );
closePayment.addEventListener('click', () => {
  payment.style.display = "none";
});

