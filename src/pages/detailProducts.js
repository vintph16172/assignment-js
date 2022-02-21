
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import { addToCart} from "../../utils/cart";
import { get, getAllWithCate } from "../api/product"
import { getAllCateProduct, getAllByID } from "../api/catagoryProducts";
import { reRender } from "../../utils/reRender"
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const DetailProductsPage = {
  async render(id) {
    console.log(id);
    const { data } = await getAllWithCate();
    console.log(data);
    const data2 = data.filter((product) => product.id == id)
    console.log(data2);
    const data3 = data.filter((productRelate) => productRelate.categoryProductId == data2[0].categoryProductId)
    console.log(data3);
    const data4 = []
    for(let i = 1; i <=4;i++){
      data4.push(data3[data3.length-i])
    }    
    console.log(data);
    console.log(data2);
    console.log(data3);
    console.log(data4);
    return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        <div class="py-6">
        <!-- Breadcrumbs -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="/" class="hover:underline hover:text-gray-600">Trang Chủ</a>
            <span>
              <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <a href="/products" class="hover:underline hover:text-gray-600">Sản Phẩm</a>
            <span>
              <svg class="h-5 w-5 leading-none text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span>Chi Tiết Sản Phẩm</span>
          </div>
        </div>
        <!-- ./ Breadcrumbs -->
  
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div x-show="image === 1"
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <img src="${data2[0].image}" alt="" class="h-64 md:h-80 w-full">
                  </div>
  
                  <div x-show="image === 2"
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <img src="${data2[0].image}" alt="" class="h-64 md:h-80 w-full">
                  </div>
  
                  <div x-show="image === 3"
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <img src="${data2[0].image}" alt="" class="h-64 md:h-80 w-full">
                  </div>
  
                  <div x-show="image === 4"
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <img src="${data2[0].image}" alt="" class="h-64 md:h-80 w-full">
                  </div>
                </div>
  
                <div class="flex -mx-2 mb-4">
                  <template x-for="i in 4">
                    <div class="flex-1 px-2">
                      <button x-on:click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }"
                        class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                        
                        <img x-text="i" src="${data2[0].image}" alt="" class="w-full p-2">
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
            <div class="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0">
            <h3 class="text-gray-700 uppercase text-lg">${data2[0].name}</h3>
            <span class="text-gray-500 mt-3">Danh Mục: ${data2[0].categoryProduct.categoryName}</span>
            
            <hr class="my-3">
            <div class="mt-2">
              <label class="text-gray-700 text-sm" for="count">Số Lượng:</label>
              <div class="flex items-center mt-1">
              
                <button data-id="${data2[0].id}" class="btn2 btn-increase2 text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>

                <input type="number" id="inputQty" class="border border-gray-400 p-3" value="1" />

                <button data-id="${data2[0].id}" class="btn2 btn-decrease2 text-gray-500 focus:outline-none focus:text-gray-600">
                  <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="mt-3">
              <label class="text-gray-700 text-sm" for="count">Mô Tả:</label>
              <div class="flex items-center mt-1">
                <span class="text-gray-500 ">${data2[0].desc}</span>
              </div>
            </div>
            
            <div class="flex items-center mt-6">
              <button
              id="btnAddToCart" class="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Đặt Hàng</button>
              <button class="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 mx-16">
            <h3 class="text-gray-600 text-2xl font-medium">Sản Phẩm Liên Quan</h3>
            <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

              ${data4.map((product2)=>/*html*/`
              <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                <a href="/products/${product2.id}">
                  <div class="flex items-end justify-end h-56 w-full bg-cover"
                  style="background-image: url('${product2.image}')">
                  <button
                    class="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                      </path>
                    </svg>
                  </button>
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">${product2.name}</h3>
                    <span class="text-gray-500 mt-2">${product2.price} VNĐ</span>
                  </div>
                </a>
                
              </div>
              
              
              `).join("")}

              
            </div>
          </div>
        
    
        

        ${FooterPage.render()}

        `;
  },
  afterRender(id) {
    Cart.afterRender()
    HeaderPage.afterRender()
    $('#btnAddToCart').addEventListener('click', async function () {
      const { data } = await get(id);
      addToCart({ ...data, quantity: +$("#inputQty").value }, () => {
        toastr.success("Thêm thành công!");
      });
    })
    $(".btn2").forEach(btn => {
      const id = btn.dataset.id;
      btn.addEventListener('click', function () {
          console.log(id);
          if (btn.classList.contains('btn-increase2')) {
            $("#inputQty").value++
          } else if (btn.classList.contains('btn-decrease2')) {
            $("#inputQty").value--
          } 
      })
  })
    


  }




}
export default DetailProductsPage;