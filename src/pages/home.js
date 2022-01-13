import News from "../component/news";


const HomePage = {
    render(){
        return /*html*/`
        <div class="banner mt-4">
            <img src="../../img/banner lab1.png" alt="" class="w-full">
        </div>

        <div class="content">
            <div class="content1">
              ${News.render()}
            </div>

            

        </div>
        
        
        `;
    }
}
export default HomePage;