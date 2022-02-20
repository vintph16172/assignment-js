import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import NewsPage from "./pages/news";
import DetailNewsPage from "./pages/detailNews";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
import ProfilePage from "./pages/profile"
import DetailProductsPage from "./pages/detailProducts";
import ProductSortPage from "./pages/product-sort";
import CategoryProductsPage from "./pages/categoryProducts";
import CartPage from "./pages/cart"

// -----FRONT-END-------
import AdminPage from "./pages/admin/admin-dashbroad";
import AdminNews from "./pages/admin/news/admin-news";
import AdminNewsAdd from "./pages/admin/news/admin-news-add";
import AdminNewsEdit from "./pages/admin/news/admin-news-edit";
import AdminUsers from "./pages/admin/users/admin-users"
import AdminUsersEdit from "./pages/admin/users/admin-users-edit"
import AdminProducts from "./pages/admin/products/admin-products"
import AdminProductsEdit from "./pages/admin/products/admin-products-edit"
import AdminProductsAdd from "./pages/admin/products/admin-products-add"

// -----BACK-END-------

// **********************PAGE********************



const router = new Navigo("/" , {linksSelector: "a", hash: true});

const print = async (content, id = "") => {
    document.getElementById("content").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before(done, match) {
      // do something
        if(localStorage.getItem('user')){
            const userId = JSON.parse(localStorage.getItem('user')).permission;
            
            if(userId == 1){
                done();     
            } else {
                document.location.href="/";
            }
        } else{
          document.location.href="/";
        }
      
    }
})


router.on({
    "/": () => {
        print(HomePage);
        
    },
    "/about": () => {
        print(AboutPage);
        
    },
    "/cart": () => {
        print(CartPage);
        
    },
    "/products": () => {
        print(ProductPage);
        
    },
    "/products/sort/:min&:max": (value) => {
        console.log(value.data);
        
        print(ProductSortPage,value.data);
        
    },
    "/products/:id": (value) =>{
        console.log(value.data.id);
        print(DetailProductsPage,value.data.id);
        
    },
    "/categoryProducts/:id": (value) =>{
        console.log(value.data.id);
        print(CategoryProductsPage,value.data.id);
        
    },
    "/news": () =>{
        print(NewsPage);
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
    "/admin/products": () => {
        print(AdminProducts);
    },
    "/admin/products/add": () => {
        print(AdminProductsAdd);
    },
    "/admin/products/:id/edit": (value) => {
        print(AdminProductsEdit,value.data.id);
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
    "/admin/users": () => {
        print(AdminUsers);
    },
    "/admin/users/:id/edit": (value) => {
        print(AdminUsersEdit,value.data.id);
    },

    
})
router.notFound( () => {print("Not Found Page")} );
router.resolve();