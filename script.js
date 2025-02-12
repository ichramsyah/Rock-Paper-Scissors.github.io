
document.addEventListener("DOMContentLoaded", function(){
    let heroImage = document.querySelector(".hero");

    setTimeout(() => {
        heroImage.style.opacity = "1";
    }, 1000);
    
    setTimeout(() => {
        heroImage.style.opacity = "0";
    }, 5000);
    
    setTimeout(() => {
        heroImage.remove();
    }, 6000);
    
})