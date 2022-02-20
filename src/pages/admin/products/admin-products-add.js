
import AdminHeader from "../../../component/admin-header";
import axios from "axios";
import { add } from "../../../api/product";
import { getAllCateProduct } from "../../../api/catagoryProducts"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
import $ from 'jquery';
import validate from 'jquery-validation';

const AdminProductsAdd = {

    async render() {
        const data2 = await getAllCateProduct();
        console.log(data2);
        return /*html*/`
        ${AdminHeader.render()}
        
        <div class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">
                Sản Phẩm Add
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
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Tên:</label>
                                                    <input type="text" name="product-name" id="product-name" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300  focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" >
                                                </div>
                                               
                                
                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Danh Mục:</label>
                                                    <select id="product-category" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] sm:text-sm">

                                                        ${data2.data.map((category) => {
                                                            return /*html*/`<option value="${category.id}" >${category.categoryName}</option>`



                                                        })}
                                                        
                                                        
                                                    
                                                    </select>
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Giá:</label>
                                                    <input type="number" name="product-price" id="product-price" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300  focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" >
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Số Lượng:</label>
                                                    <input type="number" name="product-quantity" id="product-quantity" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300  focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" >
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Lượt Xem:</label>
                                                    <input type="number" name="product-view" id="product-view" autocomplete="given-name" class="h-10 mt-1 py-2 px-3 border border-gray-300  focus:ring-indigo-500 focus:border-[#0066B3] block w-full shadow-sm sm:text-sm  rounded-md" >
                                                </div>

                                                <div class="col-span-6 sm:col-span-3">
                                                    <label for="country" class="block text-sm font-medium text-gray-700">Trạng Thái:</label>
                                                    <select id="product-status" name="product-status" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-[#0066B3] sm:text-sm">
                                                        <option value="1" >Hoạt Động</option>
                                                        <option value="0">Ẩn</option>
                                                    
                                                    
                                                    </select>
                                                </div>
                                
                                                

                                                

                                                <div class="col-span-6 sm:col-span-6">
                                                    <label class="block text-sm font-medium text-gray-700">
                                                        Ảnh:
                                                    </label>
                                                    

                                                    <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div class="space-y-1 text-center">
                                                        <img class="mx-auto h-40 w-52 text-gray-400" src="http://2.bp.blogspot.com/-MowVHfLkoZU/VhgIRyPbIoI/AAAAAAAATtI/fHk-j_MYUBs/s640/placeholder-image.jpg" id="img-preview"/>
                                                            
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
                                                        <textarea id="product-detail" name="product-detail" rows="3" class="h-32 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="..."  ></textarea>
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
    afterRender() {
        AdminHeader.afterRender()
        const formEdit = $("#form-update");
        const imgPost = document.querySelector('#file-upload');
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
                "product-name": {
                    required: true,
                    minlength: 5
                },
                "product-price": {
                    required: true,
                    minlength: 4
                },
                "product-quantity": {
                    required: true,
                },
                "product-view": {
                    required: true,
                },
                "product-detail": {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                "product-name": {
                    required: "Không được để trống trường này!",
                    minlength: "Nhập ít nhất 5 ký tự!"
                },
                "product-price": {
                    required: "Không được để trống trường này!",
                    minlength: "Nhập ít nhất 4 ký tự!"
                },
                "product-quantity": {
                    required: "Không được để trống trường này!",
                },
                "product-view": {
                    required: "Không được để trống trường này!",
                },
                "product-detail": {
                    required: "Không được để trống trường này!",
                    minlength: "Nhập ít nhất 5 ký tự!"
                }
            },
            submitHandler: function () {
                async function addProduct() {
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
                    add({

                        categoryProductId: document.querySelector('#product-category').value,
                        name: document.querySelector('#product-name').value,
                        price: document.querySelector('#product-price').value,
                        quantity_amount: document.querySelector('#product-quantity').value,
                        view: document.querySelector('#product-view').value,
                        status: document.querySelector('#product-status').value,
                        image: imgLink ? imgLink : "",
                        desc: document.querySelector('#product-detail').value


                    });
                    toastr.success("Thêm Thành Công!")
                }
                addProduct();
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

        //         add({

        //             categoryProductId: document.querySelector('#product-category').value,
        //             name: document.querySelector('#product-name').value,
        //             price: document.querySelector('#product-price').value,
        //             quantity_amount: document.querySelector('#product-quantity').value,
        //             view: document.querySelector('#product-view').value,
        //             status: document.querySelector('#product-status').value,
        //             image: response.data.url,
        //             desc:document.querySelector('#product-detail').value


        //         });
        //         toastr.success("Update Thành Công!")

        //     })

        // });



    }


}
export default AdminProductsAdd;