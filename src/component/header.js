import Cart from "./cart";
import { reRender } from "../../utils/reRender"
const HeaderPage = {
    render(){
        
        return /*html*/`
        
        <div id="header" class="container-fluid  mx-auto">
            <div class="header-top flex flex-wrap justify-between items-center  bg-lab1-blue px-8">
                <div class="md:w-3/5">
                    <img src="../../img/logo lab1.png" alt="" class="py-6 max-w-full ">
                </div>
                <div class="flex flex-wrap gap-2 md:w-2/5 sm:w-full pr-8 place-content-end">
                <img src="http://placeimg.com/256/256/technics" alt=""  class="max-w-full w-8 h-8 rounded-full">
                <a id="account" href="/signin" class="text-white hover:text-lab1-orange">Đăng Nhập</a>
                
                <div id="div-logout">
                    
                </div>
                    ${localStorage.getItem('user') ? '<svg id="logout" xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6 text-white hover:text-lab1-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>' : ""}
                    
                    
                    <a href="/#/admin/dashbroad">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-lab1-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </a>
                    

                    <div class="flex h-6 items-center  rounded-lg focus:outline-none hover:shadow-inner">
                        <div slot="icon" class="relative">
                            <div class="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">
                                ${localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length  :""}
                            </div>
                            
                            <svg id="modal-switch" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-lab1-orange"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                    </div>

            </div>
                
            </div>
            <div class="header-main md:flex flex-wrap bg-lab1-orange ">
                <div class="menu md:w-8/12">
                    <ul class="md:ml-4">
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/#/">Trang Chủ</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/#/about">Thông Tin</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/#/products">Sản Phẩm</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/#/news">Tin Tức</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/#/admin/dashbroad">Dashbroad</a></li>
                    
                    </ul>
                </div>
                <div class="search  md:w-4/12 sm:w-full  ">
                    <form action="" class="pt-3 sm:mx-4 md:mx-0">
                    <input type="text" class="h-8 md:w-60 sm:w-full ">
                    <button type="submit" class="text-white hover:text-lab1-orange border bg-lab1-blue border-white h-8 md:px-6 md:ml-4  sm:block md:inline-block sm:text-center " >TÌM KIẾM</button>
                    </form>

                </div>
            </div>
            
            

            <div id="cart">
                ${Cart.render()}
            </div>
        </div>
        
        `
    },
    afterRender(){
        const account = document.querySelector("#account");
        const divLogout = document.querySelector("#div-logout");

        if(localStorage.getItem("user")){
            account.innerHTML= JSON.parse(localStorage.getItem("user")).username;
            account.href = "/#/profile";
            const btnLogout = document.querySelector("#logout");
            btnLogout.addEventListener('click', function(){
                localStorage.removeItem('user');
                reRender(HeaderPage , "#header")
            })
            
        }
        

        



    }
    

}
export default HeaderPage;