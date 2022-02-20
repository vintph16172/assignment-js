
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import {  get,getAll } from "../api/post"
import { getAllCatePost } from "../api/categoryNews";

const DetailNewsPage = {
    async render(id){
        const { data } = await getAll() ;
        const dataCate = await getAllCatePost();
        const data2 = data.filter((post) => post.id == id)
        const data3 = data.filter((postRelate) => postRelate.categoryPostId == data2[0].categoryPostId)
        const data4 = []
        for(let i = 1; i <=3;i++){
          data4.push(data3[data3.length-i])
        }    
        const arrNewsPost = []
        for (let y = 1; y <= 3; y++) {
            arrNewsPost.push(data[data.length - y])
        }
        console.log(data);
        console.log(dataCate);
        console.log(data2);
        console.log(data3);
        console.log(data4);
        console.log(arrNewsPost)
        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2    ">


        <div class="w-full md:w-9/12 ">

            <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class=" flex justify-start items-center">

                    <div class="flex items-center py-2 overflow-y-auto whitespace-nowrap">
                        <a href="/#/" class="text-gray-600 dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                            d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        </a>

                        <span class=" text-gray-500 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                        </span>

                        <a href="/#/news" class="text-gray-600 dark:text-gray-200 hover:underline"> Tin Tức </a>

                        <span class=" text-gray-500 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                        </span>

                        <a href="/#/categoryPosts/${data2[0].categoryPost.id}" class="text-gray-600 dark:text-gray-200 hover:underline"> ${data2[0].categoryPost.categoryName} </a>

                        <span class=" text-gray-500 dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                        </svg>
                        </span>

                        <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline"> Chi Tiết Bài Viết </a>


                    </div>

                </div>

                <div class="post-content">
                <h1 class=" font-semibold text-3xl mb-2">${data2[0].title}</h1>
                <span class="font-normal  text-gray-400 ">Người Đăng: ${data2[0].author} </span>
                <img src="${data2[0].img}" alt="" class="w-fit my-4 ">
                <p>${data2[0].desc}</p>
                </div>

                <div class="btn-save-div flex justify-end my-4">
                ${localStorage.getItem("user") ?/*html*/`
                  <button class="border-2 py-2 px-4 border-lab1-blue hover:border-lab1-orange2  ">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline text-lab1-blue " fill="none"
                      viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span class="inline">Lưu</span>
                  </button>
                
                
                ` : "" }

                </div>


                <h2 class="font-bold text-2xl  border-b-2  border-lab1-blue pb-2">Các Bài Viết Liên Quan</h2>
                <div class="post-relate md:grid grid-cols-3 gap-4 my-4">
                  ${data4.map((postRelate)=>/*html*/`
                    <div class="">
                      <a href="/#/news/${postRelate.id}" class="group ">
                        <img src="${postRelate.img}" alt="" class="w-full">
                        <h2 class="font-semibold text-lg  truncate group-hover:text-lab1-orange2 ">${postRelate.title}</h2>
                        <span class="font-normal text-gray-800 text-sm mb-2 text-clip ">${postRelate.author} - ${postRelate.categoryPost.categoryName}</span>
                        <span class="font-normal text-gray-500 text-sm mb-2 text-clip block">${postRelate.desc}</span>


                      </a>
                    </div>
                  
                  
                  
                  `).join("")}
                


            </div>


          </div>



        </div>

        <div class=" py-4  w-full md:w-3/12  ">

          <div class="category  drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Danh Mục</h2>
            <ul class="">
                
                    ${dataCate.data.map((category) =>/*html*/`
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
        

        ${FooterPage.render()}

        `;
    },
    afterRender(){
        Cart.afterRender()
        HeaderPage.afterRender()
    }
    



}
export default DetailNewsPage;