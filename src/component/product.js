
import axios from "axios";
import {  getAllWithCate } from "../api/product"
import { getAllCateProduct } from "../api/catagoryProducts";

const productsNew = {
    async render() {
            const { data } = await getAllWithCate();
            const  data2  = await getAllCateProduct();
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
            <div class="md:grid  grid-cols-4 gap-x-8 px-6 ">
                
                ${arrProductNew.map((productsNew)=>/*html*/`
                   
                        <div class="transform transition duration-500 hover:scale-105 group border rounded-md border-lab1-blue hover:border-lab1-orange2 pt-4 pb-8  mt-6 ">
                            <a href="/products/${productsNew.id}" >
                                <img src="${productsNew.image}" alt="" class="w-full h-56 px-8 ">

                                <div class="grid grid-rows-1 items-center px-8">
                                    <h4 class="text-lab1-text_orange text-center text-xl font-medium px-8 mt-2 " ><a href="/products/${productsNew.id}">${productsNew.name}</a></h4>
                                    <span class="text-gray-700 text-center text-md font-small px-8  " >${productsNew.categoryProduct.categoryName}</span>
                                    <button class="border rounded-md p-4 border-lab1-orange2 bg-lab1-blue group-hover:bg-lab1-orange2 text-white  ">${productsNew.price} VNĐ</button>
                                
                                </div>
                            </a>
                            
                            
                        </div>
                    
                    
                    
                ` ).join("")}
                
            </div>

            
            <div class="grid  place-items-center">
                <h1 class="text-lab1-blue text-2xl  font-bold mt-6" >Sản Phẩm Hot Nhất</h1>
            </div>
            <div class="md:grid grid-cols-4 gap-x-8 px-6">
                
                ${arrProductHot.map((productsHot)=>/*html*/`
                    
                    <div class="transform transition duration-500 hover:scale-105 group border rounded-md border-lab1-blue hover:border-lab1-orange2 pt-4 pb-8  mt-6 ">
                            <a href="/products/${productsHot.id}">
                                <img src="${productsHot.image}" alt="" class="w-full h-56 px-8">

                                <div class="grid grid-rows-1 items-center px-8">
                                    <h4 class="text-lab1-text_orange text-center text-xl font-medium px-8 mt-2 " ><a href="/products/${productsHot.id}">${productsHot.name}</a></h4>
                                    <span class="text-gray-700 text-center text-md font-small px-8  " >${productsHot.categoryProduct.categoryName}</span>
                                    <button class="border rounded-md p-4 border-lab1-orange2 bg-lab1-blue group-hover:bg-lab1-orange2 text-white  ">${productsHot.price} VNĐ</button>
                                
                                </div>
                            </a>
                            
                            
                        </div>
                ` ).join("")}
                
            </div>

            `;


            
    },
};
export default productsNew;
