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

new Product('https://github.com/codefellows/seattle-201d64/blob/master/class-11/lab/assets/bag.jpg?raw=true', 'Star Wars Bag');
new Product('https://github.com/codefellows/seattle-201d64/blob/master/class-11/lab/assets/boots.jpg?raw=true', 'Rain Boots');
new Product('https://github.com/codefellows/seattle-201d64/blob/master/class-11/lab/assets/pen.jpg?raw=true', 'Multi-Task Pen');

//====Event listener====
var productImageSection = document.getElementById('product-images');

productImageSection.addEventListener('click', handleClickProduct);

function productImageSection(event){
  if(event.target.tagName === 'IMG'){
    totalClicks++;

    if(totalClicks === maxClicks){
      productImageSection.removeEventListener('click', handleClickProduct);
    }
    //https://stackoverflow.com/questions/14221231/find-relative-path-of-a-image-tag-javascript
    var targetSrcn = event.target.getAttribute('src');
    for(var i = 0; i < productCollection.length; i++){
      if (productCollection[i])
    } 
  }
}
