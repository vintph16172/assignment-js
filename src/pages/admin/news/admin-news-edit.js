
import AdminHeader from "../../../component/admin-header";
import axios from "axios";
import { get,update } from "../../../api/post";
import { getAllCatePost } from "../../../api/categoryNews"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import $ from 'jquery';
import validate from 'jquery-validation';

const AdminNewsEdit = {
    
    async render(id) {
        
        const { data } = await get(id);
        const data2 = await getAllCatePost();
        console.log(data);
        console.log(data2);

        return /*html*/`
        ${AdminHeader.render()}
        
        <div class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                Dashboard News Edit
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
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Tiêu Đề:</label>
                                                    <input type="text" name="post-title" id="post-title" autocomplete="given-name" class="h-8 mt-1 focus:ring-[#0066B3] focus:border-[#0066B3] block w-full shadow-sm sm:text-sm border-[#0066B3] rounded-md" value="${data.title}">
                                                </div>
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Ngày Đăng:</label>
                                                    <input type="text" name="post-createtime" id="post-createtime" autocomplete="given-name" class="h-8 mt-1 focus:ring-[#0066B3] focus:border-[#0066B3] block w-full shadow-sm sm:text-sm border-[#0066B3] rounded-md" value="${data.createdAt}">
                                                </div>
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Danh Mục:</label>
                                                    <select id="post-category" name="post-category" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] sm:text-sm">

                                                        ${data2.data.map((category) => {
                                                            return /*html*/`<option value="${category.id}" >${category.categoryName}</option>`



                                                        })}
                                                        
                                                        
                                                    
                                                    </select>
                                                </div>

                                                

                                                <div class="col-span-6 sm:col-span-6">
                                                    <label class="block text-sm font-medium text-gray-700">
                                                        Ảnh:
                                                    </label>
                                                    

                                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div class="space-y-1 text-center">
                                                            <img id="img-preview" src="${data.img}" alt="" class="mx-auto h-40 w-52 text-gray-400">
                                                            
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
                                               

                                
                                                <div class="col-span-6 sm:col-span-6">
                                                    <label for="about" class="block text-sm font-medium text-gray-700">
                                                        Nội Dung:
                                                    </label>
                                                    <div class="mt-1">
                                                        <textarea id="post-detail" name="post-detail" rows="3" class="h-32 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="..."  >${data.desc}</textarea>
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
        const formEdit = $("#form-update");
        const imgPost = document.querySelector('#file-upload');
        const imgValue = document.querySelector('#file-upload').value;
        

        const imgPreview = document.querySelector('#img-preview');

        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/vintph16172/image/upload"
        const CLOUDINARY_PRESET = "ypn4yccr";

        let imgLink = "";

        // preview image when upload
        imgPost.addEventListener('change', async (e) => {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEdit.validate({
            rules: {
                "post-title": {
                    required: true,
                    minlength: 5
                },
                "post-detail": {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                "post-title": {
                    required: "Không được để trống trường này!",
                    minlength: "Nhập ít nhất 5 ký tự!"
                },
                "post-detail": {
                    required: "Không được để trống trường này!",
                    minlength: "Nhập ít nhất 5 ký tự!"
                }
            },
            submitHandler: function () {
                async function updatePost() {
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
                        id,
                        title: document.querySelector('#post-title').value,
                        categoryPostId: document.querySelector('#post-category').value,
                        img: imgLink ? imgLink : "",
                        desc: document.querySelector('#post-detail').value
                    });
                    toastr.success('Update Thành Công!')
                }
                updatePost();
            }
        });

        // imgPost.addEventListener('change', async (e) => {
            
        //     const file = e.target.files[0];
        //     const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/vintph16172/image/upload"
      
        //     const formData = new FormData();
      
        //     formData.append('file', file);
        //     formData.append('upload_preset', "ypn4yccr");
      
        //     // call api cloudinary
          
        //     const response = await axios.post(CLOUDINARY_API, formData, {
        //       headers: {
        //         "Content-Type": "application/form-data"
        //       }
        //     });
        //     console.log(response.data.url);
            
        //     formEdit.addEventListener("submit",(b) =>{
        //         b.preventDefault();
                
        //         update({
        //             id: id,
        //             title: document.querySelector('#post-title').value,
        //             img: response.data.url,
                    
        //             desc:document.querySelector('#post-detail').value
        //         });
        //         toastr.success("Update Thành Công!")
                
        //     })
      
        // });
        // if(imgValue === ""){
        //     formEdit.addEventListener("submit",(b) =>{
        //         b.preventDefault();
                
        //         update({
        //             id: id,
        //             title: document.querySelector('#post-title').value,
        //             img: data.img,
                    
        //             desc:document.querySelector('#post-detail').value
        //         })
                

                
                
        //         toastr.success("Update Thành Công!")
        //     })
        // }
        
        
    }
    

}
export default AdminNewsEdit;