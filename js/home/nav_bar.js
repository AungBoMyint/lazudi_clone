const drawerBtn = document.getElementById("drawer");
const drawerContainer = document.querySelector(".drawer-container");
const drawerCloseBtn = document.querySelector("#drawer-close-btn");

drawerBtn.addEventListener("click",function(){
    drawerContainer.style.right = "0";
});
drawerCloseBtn.addEventListener("click",function(){
    drawerContainer.style.right = "-100%";
});