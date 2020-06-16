'use strict';

//===global variables===
var productCollection = [];
var totalClicks = 0;
var maxClicks = 25;
//======constructor function=====
function Product(imageSource, imageName){
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

productImageSection.addEventListener('click',  clickHandler);

//======keeping track of images & tally of number of clicks====
function clickHandler(event){
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
  rerenderRandomImg();
}

//========rerendering images & changing images======= 

function rerenderRandomImg(){
  var firstRandom = pickRandom(0, productCollection.length);
  console.log('first new', productCollection[firstRandom]);

  var secondRandom = pickRandom(0, productCollection.length);

  var thirdRandom = pickRandom(0, productCollection.length);

  while(secondRandom === firstRandom){
    secondRandom = pickRandom(0, productCollection.length);
    console.log('second new (reroll)', productCollection[secondRandom]);

  }

    while(thirdRandom === firstRandom || thirdRandom === secondRandom){
      thirdRandom = pickRandom(0, productCollection.length);
      console.log('third new (reroll)', productCollection[thirdRandom]);
    
  }

console.log(firstRandom, secondRandom, thirdRandom);

var leftImage = document.getElementById('left-image');
var leftName = document.getElementById('left-name');

var middleImage = document.getElementById('middle-image');
var middleName = document.getElementById('middle-name');

var rightImage = document.getElementById('right-image');
var rightName = document.getElementById('right-name');

leftImage.src = productCollection[firstRandom].imgSrc;
leftName.textContent = productCollection[firstRandom].imgName;
productCollection[firstRandom].prodVote++;

var secondProduct = productCollection[secondRandom];
middleImage.src = secondProduct.imgSrc;
middleName.textContent = secondProduct.imgName;
secondProduct.prodVote++;

var thirdProduct = productCollection[thirdRandom];
rightImage.src = thirdProduct.imgSrc;
rightName.textContent = thirdProduct.imgName;
thirdProduct.prodVote++;

}

//====random math function====
function pickRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}