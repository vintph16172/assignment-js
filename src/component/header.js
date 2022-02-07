import Cart from "./cart";

const HeaderPage = {
    render(){
        // return /*html*/`
        // <div class="header-top flex flex-wrap justify-left bg-lab1-blue pl-8">
        //     <div class="">
        //         <img src="../../img/logo lab1.png" alt="" class="py-6 max-w-full">
        //     </div>
            
        // </div>
        // <div class="header-main md:flex flex-wrap bg-lab1-orange ">
        //     <div class="menu md:w-8/12">
        //         <ul class="md:ml-4">
        //             <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/">Trang Chủ</a></li>
        //             <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/about">Tuyển Sinh</a></li>
        //             <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/product">Chương Trình Đào Tạo</a></li>
        //             <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/signin">Đăng Nhập</a></li>
        //             <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/admin/dashbroad">Dashbroad</a></li>
                    
        //         </ul>
        //     </div>
        //     <div class="search  md:w-4/12 sm:w-full  ">
        //         <form action="" class="pt-3 sm:mx-4 md:mx-0">
        //         <input type="text" class="h-8 md:w-60 sm:w-full ">
        //         <button type="submit" class="text-white hover:text-lab1-orange border bg-lab1-blue border-white h-8 md:px-6 md:ml-4  sm:block md:inline-block sm:text-center " >TÌM KIẾM</button>
        //         </form>

        //     </div>
        // </div>
        
        
        // `;
        return /*html*/`
        <div class="container-fluid  mx-auto">
            <div class="header-top flex flex-wrap items-center  bg-lab1-blue px-8">
                <div class="md:w-9/12">
                    <img src="../../img/logo lab1.png" alt="" class="py-6 max-w-full ">
                </div>
                <div class="flex flex-wrap gap-2 md:w-3/12 sm:w-full  ">
                <img src="http://placeimg.com/256/256/technics" alt=""  class="max-w-full w-8 h-8 rounded-full">
                <a href="/signin" class="text-white hover:text-lab1-orange">Đăng Nhập</a>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-lab1-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <svg id="modal-switch" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white hover:text-lab1-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>

            </div>
                
            </div>
            <div class="header-main md:flex flex-wrap bg-lab1-orange ">
                <div class="menu md:w-8/12">
                    <ul class="md:ml-4">
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/">Trang Chủ</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/about">Tuyển Sinh</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/product">Chương Trình Đào Tạo</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/signin">Đăng Nhập</a></li>
                    <li class="md:inline-block text-center py-4 px-4 text-white hover:text-lab1-blue"><a href="/admin/dashbroad">Dashbroad</a></li>
                    
                    </ul>
                </div>
                <div class="search  md:w-4/12 sm:w-full  ">
                    <form action="" class="pt-3 sm:mx-4 md:mx-0">
                    <input type="text" class="h-8 md:w-60 sm:w-full ">
                    <button type="submit" class="text-white hover:text-lab1-orange border bg-lab1-blue border-white h-8 md:px-6 md:ml-4  sm:block md:inline-block sm:text-center " >TÌM KIẾM</button>
                    </form>

                </div>
            </div>
            ${Cart.render()}
            

        
        </div>
        
        `




    }


}
export default HeaderPage;