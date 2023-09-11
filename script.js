const search = () => {
    const searchbox = document.getElementById('search-bar').value.toUpperCase(); 
    const productItems = document.querySelectorAll('.item');

    productItems.forEach((product) => {
        const productName = product.querySelector('.item-label-food');
        
        if (productName) {
            let textValue = productName.textContent || productName.innerHTML;

            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product.style.display = ""; 
            } else {
                product.style.display = "none"; 
            }

        }
    });
    // Event listener for when the input loses focus
    searchInput.addEventListener('blur', () => {
    // Show all products when the input loses focus
    productItems.forEach((product) => {
        product.style.display = '';
    });
});
}


const searchInput = document.getElementById('search-bar');
const productItems = document.querySelectorAll('.item');

// Function to filter products based on search input
const filterProducts = () => {
    const searchbox = searchInput.value.toUpperCase();

    productItems.forEach((product) => {
        const productName = product.querySelector('.item-label');
        const description = product.getElementsByTagName('p');

        if (productName) {
            let textValue = productName.textContent || productName.innerHTML;

            if (textValue.toUpperCase().indexOf(searchbox) > -1) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        }
    });
};

// Event listener for the input element when the user presses a key
searchInput.addEventListener('keyup', filterProducts);

// Event listener for when the input loses focus
searchInput.addEventListener('blur', () => {
    // Show all products when the input loses focus
    productItems.forEach((product) => {
        product.style.display = '';
    });
});

const menu = document.querySelectorAll('.item-img img')
const changingImageDiv =  document.querySelector('.changing-image')
const changingImage = document.querySelector('.changing-image img')
const clickDiv = document.querySelectorAll('.click-link')

const changePhoto = () => {
menu.forEach(image =>{
    image.onclick =() => {
        changingImageDiv.style.display = 'block'; 
        changingImage.src = image.getAttribute('src');
    }
})} 

changePhoto(); 