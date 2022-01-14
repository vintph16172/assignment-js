import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailNews";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
// -----FRONT-END-------
import AdminPage from "./pages/admin/admin-dashbroad";
import AdminNews from "./pages/admin/news/admin-news";
import AdminNewsAdd from "./pages/admin/news/admin-news-add";
import AdminNewsEdit from "./pages/admin/news/admin-news-edit";
// -----BACK-END-------

// **********************PAGE********************



const router = new Navigo("/" , {linksSelector: "a"});

const print = (content) =>{
    document.querySelector("#content").innerHTML = content;
    
}


router.on({
    "/": () => {
        print(HomePage.render());
        
    },
    "/about": () => {
        print(AboutPage.render());
        
    },
    "/product": () => {
        print(ProductPage.render());
        
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
        
    },
    "/signup": () => {
        print(SignUpPage.render());
        
    },
    "/signin": () => {
        print(SignInPage.render());
        
    },
    "/admin/dashbroad": () => {
        print(AdminPage.render());
    },
    "/admin/news": () => {
        print(AdminNews.render());
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd.render());
    },
    "/admin/news/:id/edit": (value) => {
        print(AdminNewsEdit.render(value.data.id));
    },

    
})
router.notFound( () => {print("Not Found Page")} );
router.resolve();