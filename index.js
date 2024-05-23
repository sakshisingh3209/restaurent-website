//  const themeSwitch = document.getElementById('theme-switch');
//  const body = document.body;
//  themeSwitch.addEventListener('change', function() {
//      body.classList.toggle('dark-mode');
//  });

//  //select all the images in the footer
//  const footerImage = document.querySelector('.footer .images img');

//  //select the image in the foodbar
//  const foodbarImage = document.querySelectorAll('.foodbar img');

//  //Add a click event listner to each footer image
//  footerImage.forEach(image => {
//      image.addEventListener('click', () => {
//          //update the source of the foodbar image
//          foodbarImage.src = image.src;
//      });
//  });







//  //remove animation

//  const itemImages = document.querySelectorAll('.item-img');
//  itemImages.forEach(img => {
//      //remove the animated class from all images
//      itemImages.forEach(img => img.classList.remove('animated'));

//      //add the animated class to the clicked image
//      img.classList.add('animated');
//  })


//  //add items in the cart

//  //selcet all add to cart button
//  const addToCartButtons = document.querySelectorAll('.images a');

//  //select the cart icon in the top navigation bar
//  const cartIcon = document.querySelector('.top-navbaer.icons a i');

//  let cartCount = 0; //Initialize a variable to keep track of the cart count

//  addToCartButtons.forEach(button => {
//      button.addEventListener('click', () => {
//          cartCount++;
//          cartIcon.textContent = cartCount;
//      });
//  });

const themeSwitch = document.getElementById('theme-switch');
const body = document.body;
themeSwitch.addEventListener('change', function() {
    body.classList.toggle('dark-mode');
});

// Select all the images in the footer
const footerImages = document.querySelectorAll('.footer .images img');

// Select the image in the foodbar
const foodbarImage = document.querySelector('.foodbar img');

// Add a click event listener to each footer image
footerImages.forEach(image => {
    image.addEventListener('click', () => {
        // Update the source of the foodbar image
        foodbarImage.src = image.src;
    });
});

// Remove animation
const itemImages = document.querySelectorAll('.item-img');
itemImages.forEach(img => {
    // Remove the animated class from all images
    itemImages.forEach(img => img.classList.remove('animated'));
});

// Add the animated class to the clicked image
img.classList.add('animated');

// Add items to the cart
// Select all add to cart buttons
const addToCartButtons = document.querySelectorAll('.images a');

// Select the cart icon in the top navigation bar
const cartIcon = document.querySelector('.top-navbar.icons a i');

let cartCount = 0; // Initialize a variable to keep track of the cart count

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartIcon.textContent = cartCount;
    });
});