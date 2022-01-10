import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";

const router = new Navigo("/" , {linksSelector: "a"});

const print = (content) =>{
    document.querySelector("#app").innerHTML = content;
    
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
})
router.notFound( () => {print("Not Found Page")} );
router.resolve();