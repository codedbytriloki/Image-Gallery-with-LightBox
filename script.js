const images = document.querySelectorAll('.gallery img');
const lightboxImage = document.getElementById("lightboxImage");
const lightbox = document.getElementById("lightbox");
const closeBtn = document.getElementById("closeBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const caption = document.getElementById("caption");
const downloadLink = document.getElementById("downloadLink");
// Initialize current index

let currentIndex = 0;

images.forEach((image,index) => {
  image.addEventListener('click', () => {
    currentIndex = index;
    lightboxImage.src = image.src;
    caption.textContent = image.dataset.caption || image.alt;
    downloadLink.href = image.src;
    downloadLink.download = image.alt || `image-${index + 1}`;
    lightbox.classList.add('show');
  })
})

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) %  images.length;
  lightboxImage.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].dataset.caption;
  downloadLink.href = images[currentIndex].src;
  downloadLink.download = images[currentIndex].alt || `image-${currentIndex + 1}`;
  lightbox.classList.add('show');
})

prevBtn.addEventListener('click' , () => {
  currentIndex = (currentIndex -1 + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].dataset.caption;
  downloadLink.href = images[currentIndex].src;
  downloadLink.download = images[currentIndex].alt || `image-${currentIndex + 1}`;
  lightbox.classList.add('show');
})

document.addEventListener('keydown', (e) => {
  if(!lightbox.classList.contains('show')) return;

  if(e.key === 'ArrowRight') {
    nextBtn.click();
  }
  else if(e.key === 'ArrowLeft') {
    prevBtn.click();
  }
  else if(e.key === 'Escape') {
    closeBtn.click();
  }
})

closeBtn.addEventListener('click' , () => {
  // lightboxImage.src = '';
  lightbox.classList.remove('show');
})

lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox){
    lightbox.classList.remove('show');
  }
})

