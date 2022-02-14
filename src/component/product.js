
import axios from "axios";
import {  getAll } from "../api/product"
import { getAll2 } from "../api/catagoryProducts";

const productsNew = {
    async render() {
            const { data } = await getAll();
            const { data2 } = await getAll2();
            console.log(data);
            console.log(data2);
            const arrProductNew = [];
            const arrProductHot = [];
            
            if(data.length < 8){
                data.map((p)=>{
                    arrProductNew.push(p)
                })
            }else{
                for(let i = 1;i<=8;i++){
                    arrProductNew.push(data[data.length-i])
                }
                const sort = data.sort((a,b)=>{
                    return a.view -b.view;
                })
                for(let i = 1;i<=8;i++){
                    
                    arrProductHot.push(sort[sort.length-i])
                }
                
            }
            console.log(arrProductNew);
         return /* html */`
           
            
            <div class="grid  place-items-center">
                <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >Sản Phẩm Mới Nhất</h1>
            </div>
            <div class="md:grid  grid-cols-4 gap-x-8 ">
                
                ${arrProductNew.map((productsNew)=>/*html*/`
                    <div class="border border-gray-300 pt-4 pb-8  mt-6">
                        <a href="/products/${productsNew.id}">
                            <img src="${productsNew.image}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-lab1-text_orange text-center text-xl font-medium px-8 mt-2 " ><a href="/products/${productsNew.id}">${productsNew.name}</a></h4>
                        <p class="px-8 mt-4 text-center" >${productsNew.desc}</p>
                    </div>
                ` ).join("")}
                
            </div>

            <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >HOẠT ĐỘNG SINH VIÊN</h1>

            <div class="md:grid grid-cols-4 gap-x-8">
                
                ${arrProductHot.map((productsHot)=>/*html*/`
                    <div class="border border-gray-300 pt-4 pb-8  mt-6">
                        <a href="/news/${productsHot.id}">
                            <img src="${productsHot.img}" alt="" class="w-full h-56 px-8">
                        </a>
                        
                        <h4 class="text-lab1-text_orange text-xl font-medium px-8 mt-2 " ><a href="/news/${productsHot.id}">${productsHot.id}</a></h4>
                        <p class="px-8 mt-4" >${productsHot.desc}</p>
                    </div>
                ` ).join("")}
                
            </div>

            `;


            
    },
};
export default productsNew;
