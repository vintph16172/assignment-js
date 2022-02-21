
import axios from "axios";
import {  getAll } from "../api/post"
import {  getAllByID } from "../api/categoryNews"

const News = {
    async render() {
            const { data } = await getAllByID(1);
            const  data10  = await getAllByID(4);
            console.log(data);
            console.log(data10);
            const data2 = [];
            const data3 = [];
            if(data.posts.length < 4){
                data.posts.map((p)=>{
                    data2.push(p)
                })
            }else{
                for(let i = 1;i<=4;i++){
                    data2.push(data.posts[data.posts.length-i])
                }
            }
            if(data10.data.posts.length < 4){
                data10.data.posts.map((p)=>{
                    data3.push(p)
                })
            }else{
                for(let i = 1;i<=4;i++){
                    data3.push(data10.data.posts[data10.data.posts.length-i])
                }
            }
            console.log(data2);
            console.log(data3);
         return /* html */`
           
            
            <div class="grid  place-items-center">
                <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >TIN TỨC HỌC TẬP</h1>
            </div>
            <div class="md:grid grid-cols-4 gap-x-8 px-6" >
                
                ${data2.map((post)=>/*html*/`
                    <div class="border rounded-md border-lab1-blue hover:border-lab1-orange2 pt-4 pb-8  mt-6">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-lab1-text_orange text-xl font-medium px-8 mt-2 " ><a href="/news/${post.id}">${post.title}</a></h4>
                        <p class="px-8" >${data.categoryName} - ${post.author}</p>
                        <p class="px-8 mt-2 text-gray-500" >${post.desc}</p>
                    </div>
                ` ).join("")}
                
            </div>


            <div class="grid  place-items-center">
                <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >HOẠT ĐỘNG SINH VIÊN</h1>
            </div>
            <div class="md:grid grid-cols-4 gap-x-8 px-6">
                
                ${data3.map((post)=>/*html*/`
                    <div class="border rounded-md border-lab1-blue hover:border-lab1-orange2 pt-4 pb-8  mt-6">
                        <a href="/news/${post.id}">
                            <img src="${post.img}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-lab1-text_orange text-xl font-medium px-8 mt-2 " ><a href="/news/${post.id}">${post.title}</a></h4>
                        <p class="px-8" >${data10.data.categoryName} - ${post.author}</p>
                        <p class="px-8 mt-2 text-gray-500" >${post.desc}</p>
                    </div>
                ` ).join("")}
                
            </div>

            `;


            
    },
};
export default News;
