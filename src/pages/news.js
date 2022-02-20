
import Products from "../component/product"
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";
import { addToCart } from "../../utils/cart";
import { get, getAll } from "../api/post";
import { getAllCatePost } from "../api/categoryNews";
import { reRender } from "../../utils/reRender"
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const NewsPage = {
  async render() {
    const { data } = await getAll();
    const data2 = await getAllCatePost();
    console.log(data);
    console.log(data2);
    

    const arrNewsPost = []
        for (let y = 1; y <= 3; y++) {
            arrNewsPost.push(data[data.length - y])
        }
        console.log(arrNewsPost)
   
    

    return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        

        <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2    ">

        

        <div class="w-full md:w-9/12 ">

          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="">

              
              <div class="relative m-3 grid grid-cols-3 mx-auto ">

                ${data.map((post) =>/*html*/`
                  
                      <div class=" relative max-w-sm  bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
                      
                      <div class="overflow-x-hidden rounded-2xl relative">
                        <a href="/news/${post.id}" >
                          <img class="h-40 rounded-2xl w-full object-cover"
                          src="${post.img}">
                        </a>
                        <button  data-id="${post.id}" class=" absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                          
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                        </button>
                      </div>

                    

                      <div class="mt-4 pl-2 mb-2">
                        <a href="/news/${post.id}" class="flex  ">
                          <div>
                            <p class="text-lg font-semibold text-gray-900 mb-0">${post.title}</p>
                            <p class="text-md text-gray-800 mt-0">${post.categoryPost.categoryName} - ${post.author}</p>
                        
                            <p class="text-sm text-gray-500 mt-0">${post.desc}</p>
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
          

          <div class="post-new mt-4 drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Sản Phẩm Mới Nhất</h2>

            ${arrNewsPost.map((newPost)=>/*html*/`
              <a href="">
                <div class="py-2">
                  <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="w-1/3 bg-cover" style="background-image: url('${newPost.img}')">
                    </div> 
                    <div class="w-2/3 p-4">
                      <h1 class="text-gray-900 font-bold text-2xl">${newPost.title}</h1>
                      
                      
                      <div class="flex item-center justify-between mt-3">
                        <h1 class="text-gray-700 font-bold text-xl">${newPost.categoryPost.categoryName}</h1>
                      
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

      </div>












    </div>
        
        ${FooterPage.render()}
        
        `;
  },
  afterRender() {
    Cart.afterRender()
    HeaderPage.afterRender()
    

  }

}
export default NewsPage;