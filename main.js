
console.log('Website Loaded');
window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.video-thumbs');
    const thumbs = ['videos/video1_thumb.png', 'videos/video2_thumb.png', 'videos/video3_thumb.png'];
    if(container){
        thumbs.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.style.cursor = 'pointer';
            img.style.margin = '5px';
            img.width = 150;
            img.onclick = () => window.open(src.replace('_thumb',''), '_blank');
            container.appendChild(img);
        });
    }
});
