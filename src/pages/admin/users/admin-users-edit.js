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
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Tên Tài Khoản:</label>
                                                    <input type="text" name="first-name" id="post-title" autocomplete="given-name" class="h-8 mt-1 focus:ring-[#0066B3] focus:border-[#0066B3] block w-full shadow-sm sm:text-sm border-[#0066B3] rounded-md" value="${data.username}">
                                                </div>
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Email:</label>
                                                    <input type="text" name="first-name" id="post-createtime" autocomplete="given-name" class="h-8 mt-1 focus:ring-[#0066B3] focus:border-[#0066B3] block w-full shadow-sm sm:text-sm border-[#0066B3] rounded-md" value="${data.email}">
                                                </div>
                                
                                                

                                                

                                                <div class="col-span-6 sm:col-span-6">
                                                    <label class="block text-sm font-medium text-gray-700">
                                                        Ảnh Avatar:
                                                    </label>

                                                    

                                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div class="space-y-1 text-center">
                                                            <img src="${data.img}" alt="" class="mx-auto h-40 w-52 text-gray-400">
                                                            
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

                                
                                                    <div class="col-span-6 sm:col-span-6">
                                                        <label for="about" class="block text-sm font-medium text-gray-700">
                                                            Nội Dung:
                                                        </label>
                                                        <div class="mt-1">
                                                            <textarea id="post-detail" name="about" rows="3" class="h-32 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="..."  >${data.password}</textarea>
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
    afterRender(id) {
        AdminHeader.afterRender()
        const formEdit = document.querySelector("#form-update");
        formEdit.addEventListener("submit", (e) => {
          e.preventDefault();
          update({
            id: id,
            title: document.querySelector('#post-title').value,
            img: "http://placeimg.com/640/480/fashion",
            desc:document.querySelector('#post-detail').value
          });
          console.log('update success');
          
        });
        
    }
    

}


export default AdminUsersEdit