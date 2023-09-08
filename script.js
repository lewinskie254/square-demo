const menu = document.querySelectorAll('.item-img img')
const changingImageDiv =  document.querySelector('.changing-image')
const changingImage = document.querySelector('.changing-image img')

const changePhoto = () => {
menu.forEach(image =>{
    image.onclick =() => {
        changingImageDiv.style.display = 'block'; 
        changingImage.src = image.getAttribute('src');
    }
})} 

changePhoto(); 