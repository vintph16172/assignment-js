import { decreaseQty, increaseQty, removeItemInCart } from "../../utils/cart";
import HeaderPage from "../component/header";
import { reRender } from "../../utils/rerender";
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const Cart = {
    render() {
        let cart = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            console.log(cart);
        }
        return /*html*/`

        
        <!-- Modal  -->
        

        <div id="modal" class="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4">
            <div class="relative top-40 mx-auto shadow-lg rounded-md bg-white max-w-2xl">

                <!-- Modal header -->
                <div class="flex justify-between items-center bg-[#0066B3] text-white text-xl rounded-t-md px-4 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3>Giỏ Hàng</h3>
                <button id="modal-close">x</button>
                </div>

                <!-- Modal body -->
                <div id="cart" class="max-h-48 overflow-y-scroll p-4">
                    <div class="flex flex-col">
                        <div class="-my-2  sm:-mx-6 lg:-mx-8">
                        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name
                                        </th>
                                        <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title
                                        </th>
                                        <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status
                                        </th>
                                        <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role
                                        </th>
                                        <th scope="col" class="relative px-6 py-3">
                                        <span class="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody class="bg-white divide-y divide-gray-200">
                                    

                                    ${cart.length > 0 ? cart.map(item => /*html*/`
                                    <tr>
                                        <td class="px-6 py-4 whitespace-normal">
                                            <div class="flex items-center">
                                                <div class="flex-shrink-0 h-10 w-10">
                                                <img class="h-10 w-10 rounded-full"
                                                    src="${item.image}"
                                                    alt="">
                                                </div>
                                                <div class="ml-4">
                                                <div class="text-sm font-medium text-gray-900">${item.name}</div>
                                                <div class="text-sm text-gray-500"></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-sm text-gray-900">${item.categoryProductId}</div>
                                            <div class="text-sm text-gray-500"></div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-normal">
                                            <span
                                                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                ${item.status === 1 ?"Còn Hàng" : "Hết Hàng"} </span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-normal text-sm text-gray-500">
                                           
                                            <input type="number" value="${item.quantity}" class="border border-gray-400 p-3" />
                                            <button data-id="${item.id}" class="btn btn-increase inline-block p-3 bg-green-500 text-white">Tăng</button>
                                            <button data-id="${item.id}" class="btn btn-decrease inline-block p-3 bg-orange-500 text-white">Giảm</button>
                                        </td>
                                        <td class="px-6 py-4 whitespace-normal text-right text-sm font-medium">
                                            <button data-id="${item.id}" class="btn btn-remove inline-block p-3 bg-red-500 text-white">Xóa</button>
                                        </td>
                                    </tr>
                                    `).join("") : `
                                        <tr>
                                            <td colspan="4">No record</td>
                                        </tr>
                                    `}

                                    <!-- More people... -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
           
            <a href="/cart"> <button class="bg-[#0066B3] text-white px-4 py-2 rounded-md hover:bg-[#F26F1B] transition">Thanh Toán</button></a>
            <button id="modal-close2"
                class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-[#F26F1B] transition">Đóng</button>
            </div>
        </div>
    </div>
        `
    },
    afterRender() {

        const modalSwitch = document.getElementById('modal-switch');
        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modal-close');
        const modalClose2 = document.getElementById('modal-close2');
        modalSwitch.addEventListener("click", function () {

            modal.classList.remove('hidden')

        });
        modalClose.addEventListener("click", function () {

            modal.classList.add('hidden')

        });
        modalClose2.addEventListener("click", function () {

            modal.classList.add('hidden')

        });

        $(".btn").forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                console.log(id);
                if(btn.classList.contains('btn-increase')){
                    increaseQty(id, () => reRender(Cart, "#cart"));
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQty(id, () => reRender(Cart, "#cart"));
                } else if(btn.classList.contains('btn-decrease')) {
                    removeItemInCart(id, () => {
                        reRender(Cart, "#cart");
                        toastr.success("Bạn đã xóa thành công")
                    })
                }
            })
        }) 


    }

}

export default Cart;