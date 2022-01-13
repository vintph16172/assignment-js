import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailNews";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
// -----FRONT-END-------
import AdminPage from "./pages/admin-dashbroad";
import AdminNews from "./pages/admin-news";
import AdminNewsAdd from "./pages/admin-news-add";
import AdminNewsEdit from "./pages/admin-news-edit";
// -----BACK-END-------

// **********************PAGE********************


import HeaderPage from "./component/header";
import FooterPage from "./component/footer";
import AdminHeader from "./component/admin-header";
// -----COMPONENT-------

const router = new Navigo("/" , {linksSelector: "a"});

const print = (content) =>{
    document.querySelector("#content").innerHTML = content;
    
}

const printHeader = (content) =>{
    document.querySelector("#header").innerHTML = content;
    
}

const printFooter = (content) =>{
    document.querySelector("#footer").innerHTML = content;
    
}

router.on({
    "/": () => {
        print(HomePage.render());
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/about": () => {
        print(AboutPage.render());
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        print(DetailNewsPage.render(value.data.id));
        printHeader(HeaderPage.render());
        printFooter(FooterPage.render());
    },
    "/signup": () => {
        print(SignUpPage.render());
        printHeader("");
        printFooter("");
    },
    "/signin": () => {
        print(SignInPage.render());
        printHeader("");
        printFooter("");
    },
    "/admin/dashbroad": () => {
        print(AdminPage.render());
        printHeader(AdminHeader.render());
        printFooter("");
    },
    "/admin/news": () => {
        print(AdminNews.render());
        printHeader(AdminHeader.render());
        printFooter("");
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd.render());
        printHeader(AdminHeader.render());
        printFooter("");
    },
    "/admin/news/:id/edit": (value) => {
        console.log(value.data.id);
        print(AdminNewsEdit.render(value.data.id));
        printHeader(AdminHeader.render());
        printFooter("");
    },

    
})
router.notFound( () => {print("Not Found Page")} );
router.resolve();