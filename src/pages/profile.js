import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";
import { get } from "../api/user"
import $ from 'jquery';
import validate from 'jquery-validation';

const ProfilePage = {
  render() {
    return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        <div class="container mx-auto my-5 p-5">
      <div class="md:flex no-wrap md:-mx-2 border-x-2 border-b-2   ">
        <div class="flex flex-col  py-4 items-center w-full md:w-3/12 border-t-4  border-t-lab1-blue border-r-2  ">
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

            <form action="" id="form-update">
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Tên Tài Khoản:</div>
                    <div class="px-4 py-2"><input id="account-username" name="account-username" type="text" value="${JSON.parse(localStorage.getItem('user')).username}"></div>
                  </div>
                  
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Giới Tính:</div>
                    <div class="px-4 py-2">
                      <select name="" id="account-gender" name="account-gender">
                        ${JSON.parse(localStorage.getItem('user')).gender == 1 ? /*html*/`<option value="1">Nam</option><option value="0">Nữ</option>` :/*html*/`<option value="0">Nữ</option><option value="1">Nam</option>`}
                      </select>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Số Điện Thoại:</div>
                    <div class="px-4 py-2"><input id="account-phonenumber" name="account-phonenumber" type="number" value="${JSON.parse(localStorage.getItem('user')).phonenumber}"></div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Địa Chỉ:</div>
                    <div class="px-4 py-2"><input id="account-address" name="account-address" type="text" value="${JSON.parse(localStorage.getItem('user')).address}" ></div>
                  </div>
                 
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Email:</div>
                    <div class="px-4 py-2">
                      <a id="account-email" class="text-[#0066B3] hover:text-[#F26F1B]" href="${JSON.parse(localStorage.getItem('user')).email}">${JSON.parse(localStorage.getItem('user')).email}</a>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Ngày Sinh:</div>
                    <div class="px-4 py-2"><input id="account-borndate" name="account-borndate" type="date" value="${JSON.parse(localStorage.getItem('user')).borndate}"></div>
                  </div>

                  <div class="grid ">
                    <div class="col-span-6 sm:col-span-6">
                      <label class="block text-sm font-medium text-gray-700">
                          Ảnh Avatar:
                      </label>

                      

                      <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <img id="img-preview" src="${JSON.parse(localStorage.getItem('user')).avatar}" alt="" class="mx-auto h-40 w-52 text-gray-400">
                            
                            <div class="flex text-sm text-gray-600">
                                <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                </label>
                                <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Xác Nhận Mật Khẩu:</div>
                    <div class="px-4 py-2"><input id="account-password" name="account-password" type="password" placeholder="......"></div>
                  </div>
                  <div class=" hidden">
                    <div class="px-4 py-2 font-semibold">Xác Nhận Mật Khẩu:</div>
                    <div class="px-4 py-2"><input id="user-password" name="user-password" type="password" placeholder="......"></div>
                  </div>
                
                </div>

                </div>
              </div>
            </form>

            <button type="submit" class="block w-full text-[#0066B3] hover:text-[#F26F1B] hover:border-2 border-[#F26F1B] text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
              Sửa
            </button>
          </div>



        </div>

      </div>
    </div>




        ${FooterPage.render()}

        `;
  },
  async afterRender() {
    Cart.afterRender()
    HeaderPage.afterRender()
    const { data } = await get(JSON.parse(localStorage.getItem('user')).id);
    console.log(data);
    const user_password = document.querySelector('#user-password');
    user_password.value = data.password
    const formEdit = $("#form-update");
    const imgPost = document.querySelector('#file-upload');
    const imgValue = document.querySelector('#file-upload').value;
    const imgPreview = document.querySelector('#img-preview');

    let imgLink = "";

    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/vintph16172/image/upload"
    const CLOUDINARY_PRESET = "ypn4yccr";

    // preview image when upload
    imgPost.addEventListener('change', async (e) => {
      imgPreview.src = URL.createObjectURL(e.target.files[0]);
    });

    formEdit.validate({
      rules: {
        "account-name": {
          required: true,
          minlength: 5
        },
        "account-email": {
          required: true,
          email: true
        },
        "account-borndate": {
          required: true
        },
        "account-gender": {
          required: true
        },
        "account-phonenumber": {
          required: true,
          minlength: 5
        },
        "account-permission": {
          required: true
        },
        "account-address": {
          required: true,
          minlength: 5
        },
        "account-password": {
          required: true,
          equalTo: data.password
        }
      },
      messages: {
        "account-name": {
          required: "Không được để trống trường này!",
          minlength: "Nhập ít nhất 5 ký tự!"
        },
        "account-email": {
          required: "Không được để trống trường này!",
          email: "Nhập Đúng địa chỉ Email!"
        },
        "account-borndate": {
          required: "Không được để trống trường này!",
        },
        "account-gender": {
          required: "Không được để trống trường này!",
        },
        "account-phonenumber": {
          required: "Không được để trống trường này!",
          minlength: "Nhập ít nhất 5 ký tự!"
        },
        "account-permission": {
          required: "Không được để trống trường này!"
        },
        "account-address": {
          required: "Không được để trống trường này!",
          minlength: "Nhập ít nhất 5 ký tự!"
        },
        "account-password": {
          required: "Không được để trống trường này!",
          equalTo: "Bạn Nhập Sai Mật Khẩu!"
        }
      },
      submitHandler: function () {
        async function updateUser() {
          const file = imgPost.files[0];
          if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', CLOUDINARY_PRESET);

            // call api cloudinary

            const { data } = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                "Content-Type": "application/form-data"
              }
            });
            imgLink = data.url;
          }
          update({
            id: id,
            username: document.querySelector('#account-name').value,
            email: document.querySelector('#account-email').value,
            borndate: document.querySelector('#account-borndate').value,
            gender: document.querySelector('#account-gender').value,
            phonenumber: document.querySelector('#account-phonenumber').value,
            permission: document.querySelector('#account-permission').value,
            address: document.querySelector('#account-address').value,
            avatar: imgLink ? imgLink : imgPreview.src,
            password: document.querySelector('#account-password').value

          })
          toastr.success("Update Thành Công!")
        }
        updateUser();
      }
    });



  }
}

export default ProfilePage;