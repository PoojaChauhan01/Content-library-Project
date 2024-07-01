let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}
const showPopupBtn = document.querySelector(".user");
const hidePopupBtn = document.querySelector(".form_popup .close");
// show form popup
showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});
//hide form popup
hidePopupBtn.addEventListener("click", () => showPopupBtn.click());
