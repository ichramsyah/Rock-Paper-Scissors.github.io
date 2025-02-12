
document.addEventListener("DOMContentLoaded", function(){
    let heroImage = document.querySelector(".hero");

    setTimeout(() => {
        heroImage.style.opacity = "1";
    }, 2000);
    
    setTimeout(() => {
        heroImage.style.opacity = "0";
    }, 6000);
    
    setTimeout(() => {
        heroImage.remove();
    }, 7000);
    
})