import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";

const ProfilePage = {
    render(){
        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2 border-x-2 border-b-2   ">
        <div class="flex flex-col  my-auto py-4 items-center w-full md:w-3/12 border-t-4  border-t-lab1-blue border-r-2  ">
          <img src="http://placeimg.com/256/256/technics" alt="" class="max-w-full w-20 h-20 rounded-full">

          <h2 class="mt-2 font-bold text-lg ">vinthph16172</h2>

          <ul class="mt-4">
            <li class="mt-4  text-center hover:text-lab1-orange2"><a href="">Thông Tin Tài Khoản</a></li>
            <li class="mt-4  text-center hover:text-lab1-orange2"><a href="">Thay Đổi Mật Khẩu</a></li>
            <li class="mt-4  text-center hover:text-lab1-orange2"><a href="">Trợ Giúp</a></li>
            <li class="mt-4  text-center hover:text-lab1-orange2"><a href="">Đăng Xuất</a></li>
            
          </ul>
        </div>

        <div class="w-full md:w-9/12  border-t-4 border-t-lab1-orange2">
          <div class="bg-white p-3 shadow-sm rounded-sm">
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <span clas="text-green-500">
                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              <span class="tracking-wide">Thông Tin</span>
            </div>

            <form action="">
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Tên Tài Khoản:</div>
                    <div class="px-4 py-2"><input id="account-username" type="text" value=""></div>
                  </div>
                  
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Giới Tính:</div>
                    <div class="px-4 py-2">
                      <select name="" id="">
                        <option value="0">Nam</option>
                        <option value="1">Nữ</option>
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Số Điện Thoại:</div>
                    <div class="px-4 py-2"><input type="number" value="11998001001"></div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Địa Chỉ:</div>
                    <div class="px-4 py-2"><input type="text" value="41 Ngõ 285 Đội Cấn,Ba Đình, Hà Nội" ></div>
                  </div>
                 
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email:</div>
                    <div class="px-4 py-2">
                      <a id="account-email" class="text-[#0066B3] hover:text-[#F26F1B]" href=""></a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Ngày Sinh:</div>
                    <div class="px-4 py-2"><input type="date" value="2002-09-01"></div>
                  </div>
                </div>
              </div>
            </form>

            <button class="block w-full text-[#0066B3] hover:text-[#F26F1B] hover:border-2 border-[#F26F1B] text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Sửa
            </button>
          </div>



        </div>

      </div>
    </div>




        ${FooterPage.render()}

        `;
    },
    afterRender(){
        const username = document.querySelector('#account-username');
        const email = document.querySelector('#account-email');
        
        username.value = JSON.parse(localStorage.getItem('user')).username;
        email.href = JSON.parse(localStorage.getItem('user')).email;
        email.innerHTML = JSON.parse(localStorage.getItem('user')).email;

        Cart.afterRender()
        HeaderPage.afterRender()
    }
}

export default ProfilePage;