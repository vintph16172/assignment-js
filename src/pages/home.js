import News from "../component/news";
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";

const HomePage = {
    render(){
        return /*html*/`
        ${HeaderPage.render()}

        <div class="banner mt-4">
            <img src="/img/banner lab1.png" alt="" class="w-full">
        </div>

        <div class="content">
            <div class="content1">
              ${News.render()}
            </div>

            

        </div>
        
        ${FooterPage.render()}
        
        `;
    }
}
export default HomePage;