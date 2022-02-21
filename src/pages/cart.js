import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import { addToCart } from "../../utils/cart";
import { decreaseQty, increaseQty, removeItemInCart } from "../../utils/cart";
import { getAll } from "../api/coupons"
import { reRender } from "../../utils/reRender"
import { $ } from "../../utils/selector";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const CartPage = {
    async render() {
        const { data } = await getAll();
        let cart = [];
        let totalProduct = 0
        let totalCart = 0
        let shipping = 0
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            cart.forEach((product) => {
                totalProduct += product.price * product.quantity
            })
            shipping = 30000
            totalCart = totalProduct + (totalProduct*0.05) +  shipping
            if(localStorage.getItem('coupon')){
                totalCart = (totalProduct + (totalProduct*0.05) +  shipping)*(localStorage.getItem('coupon')/100)
            }
        }
        
        console.log(data);
        console.log(totalProduct);
        console.log(totalCart);
        

        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>
        
        <div class="flex justify-center my-6">
        <div class="flex flex-col w-full p-8 border border-lab1-blue text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
        <div class="flex justify-center mb-4 pb-4 border-b border-lab1-blue">
            <h2 class="font-bold text-4xl ">Giỏ Hàng</h2>
        </div>
        <div class="flex-1">
          <table class="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr class="h-12 uppercase">
                <th class="text-left">STT</th>
                <th class="text-left">Sản Phẩm</th>
                <th class="lg:text-center text-left pl-5 lg:pl-0">
                  <span class="lg:hidden" title="Quantity">Qtd</span>
                  <span class="hidden lg:inline">Số Lượng</span>
                </th>
                <th class="hidden text-center md:table-cell">Giá</th>
                <th class="text-center">Tổng Giá</th>
                <th class="text-center">Thao Tác</th>
              </tr>
            </thead>
            <tbody>
                ${cart.length > 0 ? cart.map(item => /*html*/`
                    <tr>
                        <td class="hidden pb-4 md:table-cell">
                            <span >
                                
                            </span>
                        </td>
                        <td class="">
                            <a href="#" class="flex ">
                                <img src="${item.image}"
                                class="w-20 rounded" alt="Thumbnail">
                                <div>
                                    <p class="mb-2 md:ml-4">${item.name}</p>
                                    <span class="mb-2 md:ml-4">${item.categoryProduct.categoryName}</span>
                                
                                </div>
                            </a>
                        </td>
                        <td class="justify-center md:justify-center md:flex mt-6">
                          <div class="w-20 h-10">
                                    
                            <div class="relative flex flex-row w-full h-8">
                                <svg data-id="${item.id}" class="btn2 btn-decrease2 fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path
                                    d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                                <input type="number" value="${item.quantity}"
                                class="mx-2 w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
                                <svg data-id="${item.id}" class="btn2 btn-increase2 fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                                    <path
                                    d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            
                            </div>
                          </div>
                        </td>
                        <td class="hidden text-center md:table-cell">
                        <span class="text-sm lg:text-base font-medium">
                            ${item.price}
                        </span>
                        </td>
                        <td class="text-center">
                        <span class="text-sm lg:text-base font-medium">
                            ${item.price * item.quantity}
                        </span>
                        </td>
                        <td class="text-center">
                        <button data-id="${item.id}"
                            class="btn2 btn-remove2 rounded-md inline-block p-3 bg-red-500 hover:bg-blue-500 text-white">Xóa</button>
                        </td>

                    </tr>        


                `).join("") : `
                    <tr class="flex justify-center">
                        <td class="text-center" colspan="6">Không Có Sản Phẩm Nào!</td>
                    </tr>
                `}
                

            </tbody>
          </table>
          <hr class="pb-6 mt-6">
          <div class="my-4 mt-6 -mx-2 lg:flex">
            <div class="lg:px-2 lg:w-1/2">
              <div class="p-4 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Code Giảm Giá</h1>
              </div>
              <div class="p-4">
                <p class="mb-4 italic">Nhập Code để giảm giá tổng hóa đơn</p>
                <div class="justify-center md:flex">
                  <form id="form-coupon" action=""  >
                    <div class="flex items-center w-full h-13 pl-3 bg-white  border rounded-full">
                      <input type="coupon" name="code" id="coupon"  placeholder="..."
                        class="w-full bg-white outline-none appearance-none focus:outline-none active:outline-none" />
                      <button type="submit"
                        class="text-sm flex items-center px-3 py-1 text-white bg-lab1-blue rounded-full outline-none md:px-4 hover:bg-lab1-orange2 focus:outline-none active:outline-none">
                        <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="w-8"
                          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z" />
                        </svg>
                        <span class="font-medium">Áp Dụng</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="p-4 mt-6 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Ghi Chú</h1>
              </div>
              <div class="p-4">
                <p class="mb-4 italic">Thông tin địa chỉ giao hàng
                </p>
                <textarea class="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
              </div>
            </div>
            <div class="lg:px-2 lg:w-1/2">
              <div class="p-4 bg-gray-100 rounded-full">
                <h1 class="ml-2 font-bold uppercase">Chi Tiết Hóa Đơn</h1>
              </div>
              <div class="p-4">
                <p class="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered
                </p>
                <div class="flex justify-between border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Tổng giá sản phẩm
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    ${totalProduct} VNĐ
                  </div>
                </div>
                
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Thuế
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  ${totalProduct == 0 ? "0" : totalProduct * 0.05} VNĐ
                  </div>
                </div>
                ${localStorage.getItem("coupon") ?/*html*/`<div class="flex justify-between pt-4 border-b">
                <div class="flex lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-gray-800">
                  
                  <button id="remove-coupon" type="button" class="mr-2 mt-1 lg:mt-2">
                    <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt"
                      class="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512">
                      <path fill="currentColor"
                        d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z" />
                    </svg>
                  </button>
                  Code Giảm Giá
                </div>
                <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-green-700">
                  ${localStorage.getItem("coupon")}%
                </div>
                </div>` :""}
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Phí Shipping
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    ${shipping} VNĐ
                  </div>
                </div>
                <div class="flex justify-between pt-4 border-b">
                  <div class="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                    Tổng Hóa Đơn
                  </div>
                  <div class="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                    ${totalCart} VNĐ
                  </div>
                </div>
                <a href="#">
                  <button id="payment"
                    class="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-lab1-blue rounded-full shadow item-center hover:bg-lab1-orange2 focus:shadow-outline focus:outline-none">
                    <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="w-8"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" />
                    </svg>
                    <span class="ml-2 mt-5px">Thanh Toán</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        
    

        ${FooterPage.render()}

        `;
    },
    afterRender() {
        Cart.afterRender()
        HeaderPage.afterRender()
        $("#payment").addEventListener("click",(a)=>{
            a.preventDefault();
            toastr.success("Thanh Toán Thành Công!")
            localStorage.removeItem("cart")
            localStorage.removeItem("coupon")
            window.location.assign("/")
        })
        $("#form-coupon").addEventListener("submit", async (e)=>{
            e.preventDefault();
            const { data } = await getAll();
            const input = $("#coupon").value
            console.log(input);
            const code = data.filter((coupon)=>coupon.code == input)
            console.log(code);
            if(code.length <= 0){
                toastr.error("Bạn Nhập Sai Code Giảm Giá!")
            }else{
                toastr.success("Giảm Giá Thành Công!")
                localStorage.setItem('coupon',code[0].sale)
                reRender(CartPage, "#content");
            }
        })
        if(document.querySelector("#remove-coupon")){
          $("#remove-coupon").addEventListener("click",(b)=>{
            b.preventDefault();
            localStorage.removeItem("coupon")
            toastr.success("Xóa Code Giảm Giá Thành Công!")
            reRender(CartPage, "#content");

          })
        }


        $(".btn2").forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function () {
                console.log(id);
                if (btn.classList.contains('btn-increase2')) {
                    increaseQty(id, () => reRender(CartPage, "#content"));
                } else if (btn.classList.contains('btn-decrease2')) {
                    decreaseQty(id, () => reRender(CartPage, "#content"));
                } else if (btn.classList.contains('btn-remove2')) {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#content");
                        toastr.success("Bạn đã xóa thành công")
                    })
                }
            })
        })

    }




}
export default CartPage;