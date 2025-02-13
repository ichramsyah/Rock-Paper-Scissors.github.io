
document.addEventListener("DOMContentLoaded", function(){
    let heroImage = document.querySelector(".hero");

    setTimeout(() => {
        heroImage.style.opacity = "1";
    }, 1500);
    
    setTimeout(() => {
        heroImage.style.opacity = "0";
    }, 6000);
    
    setTimeout(() => {
        heroImage.remove();
    }, 7000);
    
})

document.addEventListener("DOMContentLoaded", function(){
    let computer = document.querySelector('.computer');
    
    setTimeout(() => {
        computer.style.opacity = '1';
        computer.style.transform = "translateY(0)";
    }, 8000);
})