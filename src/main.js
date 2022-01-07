const menuList = ["menu 1","menu 2","menu 3"];

var menuElement = document.querySelector("#menu");

if(menuElement){
    for(let i = 0; i < menuList.length; i++){
        menuElement.innerHTML += `<li>${menuList[i]}</li>`;
    }
    
}



