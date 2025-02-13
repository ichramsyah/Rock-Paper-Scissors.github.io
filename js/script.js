
 document.addEventListener("DOMContentLoaded", function(){
     let heroImage = document.querySelector(".hero");

     setTimeout(() => {
         heroImage.style.opacity = "1";
     }, 1500);
    
     setTimeout(() => {
         heroImage.style.opacity = "0";
     }, 4000);
    
     setTimeout(() => {
         heroImage.remove();
     }, 4500);
    
 })

 document.addEventListener("DOMContentLoaded", function(){
     let computer = document.querySelector('.computer');  
     setTimeout(() => {
         computer.style.display = 'flex';
     }, 4700);

     setTimeout(() => {
         computer.style.opacity = '1';
         computer.style.transform = "translateY(0)";
     }, 5000);
 })
 
  document.addEventListener("DOMContentLoaded", function(){
      let info = document.querySelector('.info');
 
      setTimeout(() => {
          info.style.display = 'block';
      }, 4900);

      setTimeout(() => {
          info.style.opacity = '1';
          info.style.transform = 'translateY(0)';
      }, 5300);
  })

 document.addEventListener("DOMContentLoaded", function (){
     let card = document.querySelector('.area-player');

     setTimeout(() => {
         card.style.display = 'flex';
     }, 4900);

     setTimeout(() => {
         card.style.opacity = '1';
         card.style.transform = 'translateY(0)';
     }, 5500);
 })
