// Basic JS: nothing heavy, placeholder for future features
document.addEventListener('DOMContentLoaded', function(){
  // Scroll to collection when clicking shop button
  var shopBtn = document.querySelector('.hero .btn');
  if(shopBtn){
    shopBtn.addEventListener('click', function(e){
      e.preventDefault();
      document.getElementById('collection').scrollIntoView({behavior:'smooth'});
    });
  }
});
