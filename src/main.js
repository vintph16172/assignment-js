import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailNews";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
import ProfilePage from "./pages/profile"
// -----FRONT-END-------
import AdminPage from "./pages/admin/admin-dashbroad";
import AdminNews from "./pages/admin/news/admin-news";
import AdminNewsAdd from "./pages/admin/news/admin-news-add";
import AdminNewsEdit from "./pages/admin/news/admin-news-edit";

// -----BACK-END-------

// **********************PAGE********************



const router = new Navigo("/" , {linksSelector: "a"});

const print = async (content, id = "") => {
    document.getElementById("content").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};




router.on({
    "/": () => {
        print(HomePage);
        
    },
    "/about": () => {
        print(AboutPage);
        
    },
    "/product": () => {
        print(ProductPage);
        
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        print(DetailNewsPage,value.data.id);
        
    },
    "/signup": () => {
        print(SignUpPage);
        
    },
    "/signin": () => {
        print(SignInPage);
        
    },
    "/profile": () => {
        print(ProfilePage);
        
    },
    "/admin/dashbroad": () => {
        print(AdminPage);
    },
    "/admin/news": () => {
        print(AdminNews);
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd);
    },
    "/admin/news/:id/edit": (value) => {
        print(AdminNewsEdit,value.data.id);
    },

    
})
router.notFound( () => {print("Not Found Page")} );
router.resolve();