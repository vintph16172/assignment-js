
import Products from "../component/product"
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";
import { addToCart } from "../../utils/cart";
import { get, getAll, getAllWithCate } from "../api/product";
import { getAllCateProduct, getAllByID } from "../api/catagoryProducts";
import { reRender } from "../../utils/reRender"
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const CategoryProductsPage = {
  async render(id) {
    const { data } = await getAllByID(id);
    const data2 = await getAllCateProduct();
    const dataProduct = await getAllWithCate();
    console.log(dataProduct);
    console.log(data);
    console.log(data2);
    const arrPrice = [
      {min: 50000,max: 100000,price_quantity: 0},
      {min: 100000,max: 200000,price_quantity: 0},
      {min: 200000,max: 300000,price_quantity: 0},
      {min: 300000,max: 500000,price_quantity: 0},
      {min: 500000,max: 1000000,price_quantity: 0}
    ]

    const arrNewProduct = []
        for (let y = 1; y <= 3; y++) {
            arrNewProduct.push(dataProduct.data[dataProduct.data.length - y])
        }
        console.log(arrNewProduct)
        dataProduct.data.map((v)=>{
      arrPrice.map((i)=>{
          if((i.min < v.price) && (v.price <= i.max)){
              i.price_quantity = i.price_quantity + 1
          } 
      })
      
    })
    console.log(arrPrice);

    return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        

        <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2    ">

        <div class=" py-4  w-full md:w-3/12  ">

          <div class="category  drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Danh Mục</h2>
            <ul class="">
                
                    ${data2.data.map((category) =>/*html*/`
                        <li class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                            <a href="/categoryProducts/${category.id}">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                    ${category.categoryName}
                                </span>
                            
                            
                            </a>
                        </li>
                    `).join("")}
                
            </ul>
          </div>
          <div class="price  drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Giá</h2>
            <ul class="">
            ${arrPrice.map((price_sort)=>/*html*/`
              <a href="/products/sort/${price_sort.min}&${price_sort.max}">
                <li
                  class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    ${price_sort.min} - ${price_sort.max}
                  </span>
                  <span >${price_sort.price_quantity}</span>
                </li>
              </a>
            
            
            
            `).join("")}
              
              
              
              
              
            </ul>
          </div>

          <div class="post-new mt-4 drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Sản Phẩm Mới Nhất</h2>

            ${arrNewProduct.map((newProducts)=>/*html*/`
              <a href="">
                <div class="py-2">
                  <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="w-1/3 bg-cover" style="background-image: url('${newProducts.image}')">
                    </div> 
                    <div class="w-2/3 p-4">
                      <h1 class="text-gray-900 font-bold text-2xl">${newProducts.name}</h1>
                      
                      
                      <div class="flex item-center justify-between mt-3">
                        <h1 class="text-gray-700 font-bold text-xl">${newProducts.price} VNĐ</h1>
                      
                      </div>
                    </div>
                  </div>
                </div>
              
              
              
              </a>
            `).join("")}

            



          </div>

          <div class="img-ad mt-4 drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Quảng Cáo</h2>
            <img src="../../img/1200px-FPT-Polytechnic.png" alt="" class="w-fit h-64 p-4">


          </div>




        </div>

        <div class="w-full md:w-9/12 ">

          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="">

              
              <div class="relative m-3 grid grid-cols-4 mx-auto ">

                ${data.products.map((product) =>/*html*/`
                  
                      <div class=" relative max-w-sm  bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                      
                      <div class="overflow-x-hidden rounded-2xl relative">
                        <a href="/products/${product.id}" >
                          <img class="h-40 rounded-2xl w-full object-cover"
                          src="${product.image}">
                        </a>
                        <button  data-id="${product.id}" class="btnAddToCart absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-50 opacity-70"
                            fill="none" viewBox="0 0 24 24" stroke="black">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </button>
                      </div>

                    

                      <div class="mt-4 pl-2 mb-2">
                        <a href="/products/${product.id}" class="flex justify-between ">
                          <div>
                            <p class="text-lg font-semibold text-gray-900 mb-0">${product.name}</p>
                            <p class="text-md text-gray-800 mt-0">${product.price}VNĐ</p>
                          </div>
                          <div class="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-70" fill="none"
                              viewBox="0 0 24 24" stroke="gray">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                        </a>
                        
                      </div>
                      
                    </div>
                  
                
                `).join("")}

                

              </div>






              <div class="max-w-2xl mx-auto flex justify-center">

                <nav aria-label="Page navigation example">
                  <ul class="inline-flex -space-x-px">
                    <li>
                      <a href="#"
                        class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 ml-0 rounded-l-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    <li>
                      <a href="#"
                        class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                    </li>
                    <li>
                      <a href="#"
                        class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                    </li>
                    <li>
                      <a href="#" aria-current="page"
                        class="bg-blue-50 border border-gray-300 text-blue-600 hover:bg-blue-100 hover:text-blue-700  py-2 px-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                    </li>
                    <li>
                      <a href="#"
                        class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                    </li>
                    <li>
                      <a href="#"
                        class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                    </li>
                    <li>
                      <a href="#"
                        class="bg-white border border-gray-300 text-gray-500 hover:bg-gray-100 hover:text-gray-700 rounded-r-lg leading-tight py-2 px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                  </ul>
                </nav>


              </div>


            </div>



          </div>



        </div>
      </div>












    </div>
        
        ${FooterPage.render()}
        
        `;
  },
  afterRender() {
    Cart.afterRender()
    HeaderPage.afterRender()
    const btns = document.querySelectorAll(".btnAddToCart");
    btns.forEach((buttonElement) => {

      buttonElement.addEventListener("click", async () => {
        // const confirm = window.confirm("Bạn có muốn thêm hay không?");
        const id = buttonElement.dataset.id;
        console.log(id);
        const data55 = await get(id);
        const data10 = data55.data;
        console.log(data10);
        addToCart({ ...data10, quantity: 1 }, () => {
          toastr.success("Thêm thành công!");
          reRender(CategoryProductsPage, "#content")
        });

      });
    });

  }

}
export default CategoryProductsPage;