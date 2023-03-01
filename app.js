const btn_toggle = document.querySelector(".nav-toggle");
const show_links = document.querySelector(".links");
btn_toggle.addEventListener("click", function(){
    if (show_links.className == "links") {
        show_links.className = "show-link";
    } 
    else {
        show_links.className = "links";
}
});


