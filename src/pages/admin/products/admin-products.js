import AdminHeader from "../../../component/admin-header";
import { getAll, remove, update } from "../../../api/product"
import { getAllCateProduct } from "../../../api/catagoryProducts"
import { reRender } from "../../../../utils/reRender"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const AdminProducts = {
    async render() {
        const { data } = await getAll();
        const data2 = await getAllCateProduct();
        console.log(data);
        console.log(data2);


        return /*html*/`
        ${AdminHeader.render()}
        
        <div class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold text-gray-900">
                    Sản Phẩm
                </h1>
            </div>
        </div>
        <div class="min-h-full">
                

                
            <main>
                <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    



                    <div class="px-4 py-6 sm:px-0">
                        <div class="border-4 border-dashed border-gray-200 rounded-lg ">
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <button type="submit" class="my-4 ml-4 group relative w-40 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0066B3] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            <a href="/admin/products/add">Thêm Sản Phẩm</a>
                                        </button>
                                            


                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead class="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        ID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Ảnh
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Tên 
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Danh Mục
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Số Lượng
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Lượt Xem
                                                        </th>
                                                        <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Trạng Thái
                                                        </th>
                                                        
                                                        
                                                        <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Thao Tác
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                    ${data.map((products) =>/*html*/`
                                                        <tr>
                                                            </td>
                                                                <td class="px-4 py-4 whitespace-nowrap text-sm">
                                                                ${products.id}
                                                            </td>
                                                            <td class="px-4 py-4 whitespace-nowrap">
                                                                <div class=" h-24 w-28">
                                                                    <img class="h-24 w-28 " src="${products.image}" alt="">
                                                                </div>
                                                            </td>
                                                                <td class="px-4 py-4 whitespace-normal">
                                                                <span class="text-sm text-gray-900">${products.name}</span>
                                                            </td>
                                                            </td>
                                                                <td class="px-4 py-4 whitespace-normal">
                                                                <span class="text-sm text-gray-900">${data2.data.map((category) => { if (category.id == products.categoryProductId) return category.categoryName })}</span>
                                                            </td>
                                                            </td>
                                                                <td class="px-4 py-4 whitespace-normal">
                                                                <span class="text-sm text-gray-900">${products.quantity_amount}</span>
                                                            </td>
                                                            </td>
                                                                <td class="px-4 py-4 whitespace-normal">
                                                                <span class="text-sm text-gray-900">${products.view}</span>
                                                            </td>
                                                            </td>
                                                                <td class="px-4 py-4 whitespace-normal">
                                                                <span class="text-sm text-gray-900">${products.status == 1 ? "Hoạt Động" : "Ẩn"}</span>
                                                            </td>
                                                            
                                                            
                                                               
                                                            
                                                            
                                                            <td class="px-4 py-4 whitespace-nowrap text-center text-sm font-medium">
                                                                
                                                                

                                                                ${products.status == 1 ? /*html*/`<button type="submit" data-id="${products.id}" class="btn-permission-up bg-blue-600 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg></button>` : /*html*/`<button type="submit" data-id="${products.id}" class="btn-permission-down bg-blue-600 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" ><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></button>`}
                                                                
                                                                
                                                                
                                                                <a href="/admin/products/${products.id}/edit" >
                                                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#04B24A] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </button>
                                                                
                                                                </a>

                                                                <button type="submit" data-id="${products.id}" class="btn-delete inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" >
                                                                    
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                                                    </svg>
                                                                </button>


                                                            </td>
                                                        </tr>
                                                    
                                                    
                                                    `).join("")}
                                    
                                                <!-- More people... -->
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        
                        
                        </div>
                    </div>
                <!-- /End replace -->
                </div>
            </main>
        </div>
        
        
        `;


    },
    async afterRender() {
        AdminHeader.afterRender()
        // const { dataAll } = await getAll();
        const { data } = await getAll();
        console.log(data);


        const btns = document.querySelectorAll(".btn-delete");
        const btns_permisson_up = document.querySelectorAll(".btn-permission-up");
        const btns_permisson_down = document.querySelectorAll(".btn-permission-down");

        btns.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa hay không?");
                if (confirm) {
                    remove(id)
                        .then(() => toastr.success('Bạn đã xóa thành công'))
                        .then(() => { reRender(AdminProducts, "#content") })

                }

            });
        });

        btns_permisson_up.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;


            buttonElement.addEventListener("click", () => {
                const data10 = data.filter((product) => product.id == id)
                console.log(data10);

                console.log(id);
                const confirm = window.confirm("Bạn Kích Hoạt Sản Phẩm hay không?");
                if (confirm) {
                    update({
                        id: id,
                        categoryProductId: data10[0].categoryProductId,
                        name: data10[0].name,
                        image: data10[0].image,
                        price: data10[0].price,
                        quantity_amount: data10[0].quantity_amount,
                        desc: data10[0].desc,
                        view: data10[0].view,
                        status: "1"
                    })
                        .then(() => toastr.success('Bạn đã Kích Hoạt Sản Phẩm thành công'))
                        .then(() => { reRender(AdminProducts, "#content") })

                }

            });
        });

        btns_permisson_down.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;


            buttonElement.addEventListener("click", () => {
                const data10 = data.filter((product) => product.id == id)
                console.log(data10);

                console.log(id);
                const confirm = window.confirm("Bạn có muốn Ẩn Sản Phẩm hay không?");
                if (confirm) {
                    update({
                        id: id,
                        categoryProductId: data10[0].categoryProductId,
                        name: data10[0].name,
                        image: data10[0].image,
                        price: data10[0].price,
                        quantity_amount: data10[0].quantity_amount,
                        desc: data10[0].desc,
                        view: data10[0].view,
                        status: "0"
                    })
                        .then(() => toastr.success('Bạn đã Ẩn Sản Phẩm thành công'))
                        .then(() => { reRender(AdminProducts, "#content") })

                }

            });
        });



    },

}

export default AdminProducts;