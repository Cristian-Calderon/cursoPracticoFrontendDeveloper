const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// lista de productos
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside (){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}


// Vamos a crear una constante de una array
const productList = [];

// Vamos a crear 3 productos de ejemplo, con un push a la array(productList)
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg'
});

productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/2585916/pexels-photo-2585916.jpeg'
});

productList.push({
    name: 'Portatil',
    price: 620,
    image: 'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg'
});

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg'
});

productList.push({
    name: 'Monitor',
    price: 220,
    image: 'https://images.pexels.com/photos/2585916/pexels-photo-2585916.jpeg'
});

productList.push({
    name: 'Portatil',
    price: 620,
    image: 'https://images.pexels.com/photos/3693732/pexels-photo-3693732.jpeg'
});

function renderProducts(arr){

   // Vamos a crear un ciclo para que se creen las cards
for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // A esta imagen no tenemos que agregarle una clase tenemos que agregarle un 'src'
    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    // A esta constante no la agregamos una clase con add porque no tiene
    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);


    //Este tampoco tiene una clase 
    const productInfoFigure = document.createElement('figure');

    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');


    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard)
} 
}

renderProducts(productList);


