'use strict';

//===global variables===
//var Product.collection = [];
var totalClicks = 0;
var maxClicks = 25;

//======constructor function=====
function Product(imageSource, imageName){
  this.imgName = imageName;
  this.imgSrc = imageSource;
  this.clicked = 0;
  this.prodVote = 0;
  this.percent = 0;

  Product.collection.push(this);
}

Product.collection = [];

new Product('images/bag.jpg', 'Star Wars Bag');
new Product('images/boots.jpg', 'Rain Boots');
new Product('images/pen.jpg', 'Multi-Task Pen');
new Product('images/banana.jpg', 'Banana Slicer');
new Product('images/breakfast.jpg', 'Multi-Breakfast');
new Product('images/chair.jpg', 'Red Chair');
new Product('images/dog-duck.jpg', 'Dog Duck Face Mask');
new Product('images/pet-sweep.jpg', 'Pet Sweep');
new Product('images/scissors.jpg', 'Pizza Scissors');
new Product('images/bathroom.jpg', 'Special Toliet Paper Holder');
new Product('images/bubblegum.jpg', 'Bubble Gum');
new Product('images/cthulhu.jpg', 'Cthulhu');
new Product('images/dragon.jpg', 'Canned Dragon Meat');
new Product('images/shark.jpg', 'Shark Sleeping Bag');
new Product('images/sweep.png', 'Baby Sweep');
new Product('images/tauntaun.jpg', 'Tautaun');
new Product('images/unicorn.jpg', 'Unicorn');
new Product('images/usb.gif', 'Octopus USB');
new Product('images/water-can.jpg', 'Water Can');
new Product('images/wine-glass.jpg', 'Wine Glass');

//====Event listener====
var productImageSection = document.getElementById('product-images');

productImageSection.addEventListener('click',  clickHandler);

//======keeping track of images & tally of number of clicks====
function clickHandler(event){
  if(event.target.tagName === 'IMG'){
    totalClicks++;

    if(totalClicks === maxClicks){
      productImageSection.removeEventListener('click', productImageSection);
      renderTheChart();
    }
    //https://stackoverflow.com/questions/14221231/find-relative-path-of-a-image-tag-javascript
    var targetSrc = event.target.getAttribute('src');
    for(var i = 0; i < Product.collection.length; i++){
      if (Product.collection[i].imgSrc === targetSrc){
        Product.collection[i].clicked++;
      }
    } 
  }
  rerenderRandomImg();
  
}

//======percentage of times item was clicked======

Product.prototype.calculatePercent = function(){
  if(this.prodVote !== 0){
  var calculation = parseFloat(this.clicked/this.prodVote);
  var percentCaculate = Math.round(calculation*100);
  this.percent = percentCaculate;
};
}
for(var i = 0; i < Product.collection.length; i++){
  Product.collection[i].calculatePercent();

}
//========rerendering images & changing images======= 
var randomImagesIndexes = [];
function rerenderRandomImg(){

  var firstRandom = pickRandom(0, Product.collection.length);

  var secondRandom = pickRandom(0, Product.collection.length);

  var thirdRandom = pickRandom(0, Product.collection.length);

  while(firstRandom === randomImagesIndexes[0] ||
     firstRandom === randomImagesIndexes[1] || 
     firstRandom === randomImagesIndexes[2]){
    firstRandom = pickRandom(0, Product.collection.length);
     }
  while(secondRandom === randomImagesIndexes[0] ||
     secondRandom === randomImagesIndexes[1] || 
     secondRandom === randomImagesIndexes[2] ||
     secondRandom === firstRandom){
  secondRandom = pickRandom(0, Product.collection.length);
     }
  while(thirdRandom === randomImagesIndexes[0] || 
    thirdRandom === randomImagesIndexes[1] || 
    thirdRandom === randomImagesIndexes[2] ||
    thirdRandom === secondRandom ||
    thirdRandom === firstRandom){
  thirdRandom = pickRandom(0, Product.collection.length);
  
  }

  randomImagesIndexes = [firstRandom, secondRandom, thirdRandom];


var leftImage = document.getElementById('left-image');
var leftName = document.getElementById('left-name');

var middleImage = document.getElementById('middle-image');
var middleName = document.getElementById('middle-name');

var rightImage = document.getElementById('right-image');
var rightName = document.getElementById('right-name');

leftImage.src = Product.collection[firstRandom].imgSrc;
leftName.textContent = Product.collection[firstRandom].imgName;
Product.collection[firstRandom].prodVote++;

var secondProduct = Product.collection[secondRandom];
middleImage.src = secondProduct.imgSrc;
middleName.textContent = secondProduct.imgName;
secondProduct.prodVote++;

var thirdProduct = Product.collection[thirdRandom];
rightImage.src = thirdProduct.imgSrc;
rightName.textContent = thirdProduct.imgName;
thirdProduct.prodVote++;

}

//====random math function====
function pickRandom(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

//===Chart====

//===rendering chart===
var imageLabels = [];
var imageClick = [];
var imagePercent = [];
function renderTheChart(){
console.log('render chart');

//==replace labels====
for(i = 0; i < Product.collection.length; i++){
  imageLabels.push(Product.collection[i].imgName);
}

// //===replace data of number of clicks===
for(i = 0; i < Product.collection.length; i++){
  imageClick.push(Product.collection[i].clicked);
}
//====replace data of percenatge of clicks
for(i = 0; i < Product.collection.length; i++){
  Product.collection[i].calculatePercent();
    imagePercent.push(Product.collection[i].percent);
  }
  
  //======chart=========
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: imageLabels,
      datasets: [{
        label: '# of Clicks',
        data: imageClick,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }, 
    {
      label: 'Line Dataset',
            data: imagePercent,
            type: 'line'
    }]
    }, 
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}