const tabItems = document.getElementsByClassName("tab-item");

var defaultIndex = 0;

for (let index = 0; index < tabItems.length; index++) {
    let tabItem = tabItems[index];
    tabItem.addEventListener("click",function(e){
        var target = e.target;
        target.style.borderBottom = "3px solid var(--color-primary)";
        var children = target.parentElement.children;
        if(index == 0){
            children[1].style.borderBottom = "none";
        }else{
            children[0].style.borderBottom = "none";
        }
    });
}