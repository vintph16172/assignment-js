
import axios from "axios";
import {  getAll } from "../api/post"

const News = {
    async render() {
            const { data } = await getAll();
         return /* html */`
           
            <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >TIN TỨC HỌC TẬP</h1>

            <div class="md:grid grid-cols-3 gap-x-8">
                
                ${data.map((post)=>/*html*/`
                    <div class="border border-gray-300 pt-4 pb-8  mt-6">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-lab1-text_orange text-xl font-medium px-8 mt-2 " ><a href="/news/${post.id}">${post.title}</a></h4>
                        <p class="px-8 mt-4" >${post.desc}</p>
                    </div>
                ` ).join("")}
                
            </div>

            <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >HOẠT ĐỘNG SINH VIÊN</h1>

            <div class="md:grid grid-cols-3 gap-x-8">
                
                ${data.map((post)=>/*html*/`
                    <div class="border border-gray-300 pt-4 pb-8  mt-6">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-lab1-text_orange text-xl font-medium px-8 mt-2 " ><a href="/news/${post.id}">${post.title}</a></h4>
                        <p class="px-8 mt-4" >${post.desc}</p>
                    </div>
                ` ).join("")}
                
            </div>

            `;


            
    },
};
export default News;
