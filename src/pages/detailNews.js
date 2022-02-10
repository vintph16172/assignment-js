
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import {  get } from "../api/post"

const DetailNewsPage = {
    async render(id){
        const { data } = await get(id) ;
        return /*html*/`
        ${HeaderPage.render()}
        <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2    ">


        <div class="w-full md:w-9/12 ">

            <div class="bg-white p-3 shadow-sm rounded-sm">
                <div class=" flex justify-start items-center">

                    <div class="flex items-center py-2 overflow-y-auto whitespace-nowrap">
                        <a href="/" class="text-gray-600 dark:text-gray-200">
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

                        <a href="#" class="text-gray-600 dark:text-gray-200 hover:underline"> Tin Tức </a>

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
                <h1 class=" font-semibold text-3xl mb-2">${data.title}</h1>
                <span class="font-normal  text-gray-400 ">Người Đăng: vintph16172 -10/02/2022 </span>
                <img src="${data.img}" alt="" class="w-fit my-4 ">
                <p>${data.desc}</p>
                </div>

                <div class="btn-save-div flex justify-end my-4">
                <button class="border-2 py-2 px-4 border-lab1-blue hover:border-lab1-orange2  ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline text-lab1-blue " fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                    <span class="inline">Lưu</span>
                </button>

                </div>


                <h2 class="font-bold text-2xl  border-b-2  border-lab1-blue pb-2">Các Bài Viết Liên Quan</h2>
                <div class="post-relate md:grid grid-cols-3 gap-4 my-4">
                <div class="">
                    <a href="" class="group ">
                    <img src="http://placeimg.com/300/200/fashion" alt="" class="w-full">
                    <h2 class="font-semibold text-lg mb-2 truncate group-hover:text-lab1-orange2 ">Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Velit beatae impedit fugit similique, quis officia consequatur
                        consectetur distinctio voluptatum tempore.</h2>
                    <span class="font-normal text-gray-500 text-sm mb-2 text-clip ">Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Consequuntur amet, odio velit error optio quis officia distinctio
                        voluptatum cumque tenetur.</span>


                    </a>
                </div>
                <div class="">
                    <a href="" class="group ">
                    <img src="http://placeimg.com/300/200/fashion" alt="" class="w-full">
                    <h2 class="font-semibold text-lg mb-2 truncate group-hover:text-lab1-orange2 ">Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Velit beatae impedit fugit similique, quis officia consequatur
                        consectetur distinctio voluptatum tempore.</h2>
                    <span class="font-normal text-gray-500 text-sm mb-2 text-clip ">Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Consequuntur amet, odio velit error optio quis officia distinctio
                        voluptatum cumque tenetur.</span>


                    </a>
                </div>
                <div class="">
                    <a href="" class="group ">
                    <img src="http://placeimg.com/300/200/fashion" alt="" class="w-full">
                    <h2 class="font-semibold text-lg mb-2 truncate group-hover:text-lab1-orange2 ">Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Velit beatae impedit fugit similique, quis officia consequatur
                        consectetur distinctio voluptatum tempore.</h2>
                    <span class="font-normal text-gray-500 text-sm mb-2 text-clip ">Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Consequuntur amet, odio velit error optio quis officia distinctio
                        voluptatum cumque tenetur.</span>


                    </a>
                </div>


            </div>


          </div>



        </div>

        <div class=" py-4  w-full md:w-3/12  ">

          <div class="category  drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Thể Loại</h2>
            <ul class="">
              <a href="">
                <li
                  class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Thông Tin
                  </span>
                  <span class>12</span>
                </li>
              </a>
              <a href="">
                <li
                  class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Tuyển Sinh
                  </span>
                  <span class>12</span>
                </li>
              </a>
              <a href="">
                <li
                  class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Giáo Dục
                  </span>
                  <span class>12</span>
                </li>
              </a>
              <a href="">
                <li
                  class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Hoạt Động Sinh Viên
                  </span>
                  <span class>12</span>
                </li>
              </a>
              <a href="">
                <li
                  class="flex justify-between font-semibold text-normal text-gray-900  p-4 border-gray-200  border-b-2 hover:text-lab1-orange2">

                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline " fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Tuyển Dụng
                  </span>
                  <span class>12</span>
                </li>
              </a>
            </ul>
          </div>

          <div class="post-new mt-4 drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Tin Mới Nhất</h2>
            
            <div class="my-4">
              <a href="" class="group grid grid-cols-2 gap-2">
                <img src="http://placeimg.com/1100/480/fashion" alt="" class="w-fit h-28">
                <h2 class=" group-hover:text-lab1-orange2   " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</h2>
              </a>
            </div>

            <div class="my-4">
              <a href="" class="group grid grid-cols-2 gap-2">
                <img src="http://placeimg.com/1100/480/fashion" alt="" class="w-fit h-28">
                <h2 class=" group-hover:text-lab1-orange2   " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</h2>
              </a>
            </div>

            <div class="my-4">
              <a href="" class="group grid grid-cols-2 gap-2">
                <img src="http://placeimg.com/1100/480/fashion" alt="" class="w-fit h-28">
                <h2 class=" group-hover:text-lab1-orange2   " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</h2>
              </a>
            </div>

          </div>

          <div class="img-ad mt-4 drop-shadow-lg">
            <h2 class="font-bold text-2xl text-gray-900 border-lab1-blue border-b-2 pb-2 pl-4">Quảng Cáo</h2>
            <img src="http://placeimg.com/1100/480/fashion" alt="" class="w-fit h-64 p-4">
            

          </div>
          



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