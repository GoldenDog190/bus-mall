'use strict';

//===global variables===
var productCollection = [];
var totalClicks = 0;
var maxClicks = 25;
//======constructor function=====
function Product(imageName, imageSource){
  this.imgName = imageName;
  this.imgSrc = imageSource;
  this.clicked = 0;
  this.prodVote = 0;

  productCollection.push(this);
}

new Product('images/bag.jpg', 'Star Wars Bag');
new Product('images/boots.jpg', 'Rain Boots');
new Product('images/pen.jpg', 'Multi-Task Pen');

//====Event listener====
var productImageSection = document.getElementById('product-images');

productImageSection.addEventListener('click', productImageSection);

function productImageSection(event){
  if(event.target.tagName === 'IMG'){
    totalClicks++;

    if(totalClicks === maxClicks){
      productImageSection.removeEventListener('click', productImageSection);
    }
    //https://stackoverflow.com/questions/14221231/find-relative-path-of-a-image-tag-javascript
    var targetSrc = event.target.getAttribute('src');
    for(var i = 0; i < productCollection.length; i++){
      if (productCollection[i].imgSrc === targetSrc){
        productCollection[i].clicked++;
      }
    } 
  }
}



