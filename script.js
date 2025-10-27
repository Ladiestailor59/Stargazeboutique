
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.view-product').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      const id = e.currentTarget.dataset.id;
      window.location.href = 'product-detail.html?id='+id;
    });
  });
});
