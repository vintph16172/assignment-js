
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import {  get } from "../api/post"

const DetailNewsPage = {
    async render(id){
        const { data } = await get(id) ;
        return /*html*/`
        ${HeaderPage.render()}

        <h1>${data.title}</h1>
        <img src="${data.img}" />
        <div>${data.desc}</div>

        ${FooterPage.render()}

        `;
    },
    afterRender(){
        Cart.afterRender()
    }
    



}
export default DetailNewsPage;