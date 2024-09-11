const toggle = document.querySelector(".toggle");
const elTogglebtn = document.querySelector(".togglebtn");
const elgetByRoot = document.querySelector(".getByRoot");
const elProductRoot = document.querySelector(".newProductRoot");
const elgetByactive = document.getElementsByClassName("getByactive");
const elrecomendedData = document.querySelector(".recomended");
elTogglebtn.addEventListener("click", () => {
  toggle.classList.toggle("hidden");
});

import { getBydata, newProductData, recomendedProductsData } from "./data.js";
async function renderGetByRoot() {
  const data = await getBydata();
  console.log(data);
  elgetByRoot.innerHTML = data
    .map((item) => {
      return `<div class="card overflow-hidden hover:transform hover:scale-110 hover:p-4 hover:text-xs  hover:font-semibold bg-white hover:z-50 flex flex-col gap-2 relative p-2 h-auto hover:getByactive rounded-md ">
   <p class="absolute to-2 right-3 border-2 border-red  rounded-full  px-1 text-[10px]">-25%</p> 
   <img src="${item.img}" alt="">
    <div>
    <div class="flex justify-between ">
        <h1 class="text-xl text-red-500 font-semibold">${item.sale}</h1>
        <h1 class="text-xs line-through">${item.price}</h1>
    </div>
    <div class="extra-info hidden justify-start items-center w-full "> <!-- Yangi qo'shimcha ma'lumot -->
  <p>${item.rewiew} <span class="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent"><i class="fa-solid fa-star"></i></span> 14 отзывов </p>
    </div>
    <p>${item.info}</p>
    </div>
    <div class="extra-info hidden justify-center items-center w-full "> <!-- Yangi qo'shimcha ma'lumot -->
<button class="w-full py-1 bg-gradient-to-r from-red-500 text-white font-semibold to-blue-500">Button</button>
    </div>
    </div>
        
    `;
    })
    .join("");
}

renderGetByRoot();

async function renderNewProduct() {
  const data = await newProductData();
  console.log(data);
  elProductRoot.innerHTML = data
    .map((item) => {
      return `
    <div class="w-full flex flex-col gap-3 bg-white p-3">
    <img src="${item.img}" alt="">
    <p class="font-bold text-xl">${item.price} ₽</p>
    <p>${item.info}</p>
    </div>
    `;
    })
    .join("");
}
renderNewProduct();

// recomendedProductsData

async function renderRecomendedProducts() {
  const data = await recomendedProductsData();
  console.log(data);
  elrecomendedData.innerHTML = data
    .map((item) => {
      return `
      <div class="w-full flex flex-col gap-3 bg-white p-3">
      <img src="${item.img}" alt="">
      <p class="font-bold text-xl">${item.price} ₽</p>
      <p>${item.info}</p>
      </div>
      `;
    })
    .join("");
}
renderRecomendedProducts();
