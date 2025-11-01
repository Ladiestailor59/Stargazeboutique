
// lightweight gallery placeholders (no external deps)
document.addEventListener('click', function(e){
  if(e.target.tagName === 'IMG' && e.target.closest('.gallery-grid')){
    const src = e.target.src;
    const w = window.open('','_blank');
    w.document.write('<img src="'+src+'" style="width:100%;height:auto">');
  }
});
