import data from "../data";
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";


const DetailNewsPage = {
    render(id){
        const result = data.find((post)=>post.id === id );
        return /*html*/`
        ${HeaderPage.render()}

        <h1>${result.title}</h1>
        <img src="${result.img}" />
        <div>${result.desc}</div>

        ${FooterPage.render()}

        `;
    }



}
export default DetailNewsPage;