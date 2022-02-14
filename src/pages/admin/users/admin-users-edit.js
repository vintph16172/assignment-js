import AdminHeader from "../../../component/admin-header";
import { get,update } from "../../../api/user"


const AdminUsersEdit = {
    
    async render(id) {
        
        const { data } = await get(id);
       
        return /*html*/`
        ${AdminHeader.render()}
        
        <div class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                Tải Khoản Update
            </h1>
            </div>
        </div>

        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <!-- Replace with your content -->
            <div class="px-4 py-6 sm:px-0">
                <div class="border-4 border-dashed border-gray-200 rounded-lg ">
                    <div class="mt-10 sm:mt-0">
                        <div class="md:grid md:grid-cols-2 md:gap-6">
                            <div class="mt-5 md:mt-0 md:col-span-2">
                                <form action="#" id="form-update">
                                    <div class="shadow overflow-hidden sm:rounded-md">
                                        <div class="px-4 py-5 bg-white sm:p-6">
                                            <div class="grid grid-cols-6 gap-6">
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="user-name" class="block text-sm font-medium text-gray-700">Tên Tài Khoản:</label>
                                                    <input type="text" name="user-name" id="user-name" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300  focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" value="${data.username}">
                                                </div>
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="user-email" class="block text-sm font-medium text-gray-700">Email:</label>
                                                    <input type="text" name="user-email" id="user-email" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" value="${data.email}">
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="user-borndate" class="block text-sm font-medium text-gray-700">Ngày Sinh:</label>
                                                    <input type="date" name="user-borndate" id="user-borndate" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" value="${data.borndate}">
                                                </div>

                                                 
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="country" class="block text-sm font-medium text-gray-700">Giới Tính:</label>
                                                    <select id="user-gender" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] sm:text-sm">
                                                    
                                                    ${data.gender === 1 ? '<option value="1" >Nam</option><option value="0">Nữ</option>' : '<option value="0">Nữ</option><option value="1">Nam</option>'}
                                                    
                                                    </select>
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="user-phonenumber" class="block text-sm font-medium text-gray-700">Số Điện Thoại:</label>
                                                    <input type="number" name="user-phonenumber" id="user-phonenumber" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" value="${data.phonenumber}">
                                                </div>

                                                 
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="country" class="block text-sm font-medium text-gray-700">Quyền Hạn:</label>
                                                    <select id="user-permission" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] sm:text-sm">
                                                    
                                                    ${data.permission === 1 ? '<option value="1" >Admin</option><option value="0">Người Dùng</option>' : '<option value="0">Người Dùng</option><option value="1">Admin</option>'}
                                                    
                                                    </select>
                                                </div>

                                                <div class="col-span-6 sm:col-span-6">
                                                    <label for="user-address" class="block text-sm font-medium text-gray-700">Địa Chỉ:</label>
                                                    <input type="text" name="user-address" id="user-address" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300 focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" value="${data.address}">
                                                </div>

                                                

                                                

                                                <div class="col-span-6 sm:col-span-6">
                                                    <label class="block text-sm font-medium text-gray-700">
                                                        Ảnh Avatar:
                                                    </label>

                                                    

                                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div class="space-y-1 text-center">
                                                            <img src="${data.avatar}" alt="" class="mx-auto h-40 w-52 text-gray-400">
                                                            
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
                                            </div>
                                        </div>
                                        <div class="px-0 py-3 bg-gray-50 text-right sm:px-0">
                                            <button type="submit" class="inline-flex justify-center py-2 px-10 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#0066B3] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]">
                                                Sửa
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /End replace -->
        </div>
        
        
        `;
        
    },
    async afterRender(id) {
        AdminHeader.afterRender()
        const { data } = await get(id);
        const formEdit = document.querySelector("#form-update");
        const imgPost = document.querySelector('#file-upload');
        const imgValue = document.querySelector('#file-upload').value;
        

        imgPost.addEventListener('change', async (e) => {
            
            const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/vintph16172/image/upload"
      
            const formData = new FormData();
      
            formData.append('file', file);
            formData.append('upload_preset', "ypn4yccr");
      
            // call api cloudinary
          
            const response = await axios.post(CLOUDINARY_API, formData, {
              headers: {
                "Content-Type": "application/form-data"
              }
            });
            console.log(response.data.url);
            
            formEdit.addEventListener("submit",(b) =>{
                b.preventDefault();
                
                update({
                    id: id,
                    username: document.querySelector('#user-name').value,
                    email: document.querySelector('#user-email').value,
                    borndate: document.querySelector('#user-borndate').value,
                    gender: document.querySelector('#user-gender').value,
                    phonenumber: document.querySelector('#user-phonenumber').value,
                    permission: document.querySelector('#user-permission').value,
                    address: document.querySelector('#user-address').value,
                    avatar: response.data.url
                    
                })
                 
                alert("Update Thành Công!")
                
            })
      
        });
        if(imgValue === ""){
            formEdit.addEventListener("submit",(b) =>{
                b.preventDefault();
                
                update({
                    id: id,
                    username: document.querySelector('#user-name').value,
                    email: document.querySelector('#user-email').value,
                    borndate: document.querySelector('#user-borndate').value,
                    gender: document.querySelector('#user-gender').value,
                    phonenumber: document.querySelector('#user-phonenumber').value,
                    permission: document.querySelector('#user-permission').value,
                    address: document.querySelector('#user-address').value,
                    avatar: data.avatar,
                    password: "1234"
                })
              
                const a = {
                    id: id,
                    username: document.querySelector('#user-name').value,
                    email: document.querySelector('#user-email').value,
                    borndate: document.querySelector('#user-borndate').value,
                    gender: document.querySelector('#user-gender').value,
                    phonenumber: document.querySelector('#user-phonenumber').value,
                    permission: document.querySelector('#user-permission').value,
                    address: document.querySelector('#user-address').value,
                    avatar: data.avatar,
                    password: data.password
                }
                
                console.log(a);
                
                alert("Update Thành Công!")
            })
        }
        
        
    }
    

}


export default AdminUsersEdit