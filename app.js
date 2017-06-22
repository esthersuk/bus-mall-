'use strict';

var randomIndex1;
var randomIndex2;
var randomIndex3;
var surveyLength = 0;

var imgArray = [];
var imgNameArray = [];
var pathArray = [];
var arrayOfThree = [];

var createButtomEl = document.createElement('button');
var subBanners = document.getElementById('subBanners');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function imgMaker(name,path) {
  this.path = path;
  this.name = name;
  this.timesAppeared = 0;
  this.timesClicked = 0;
  imgArray.push(this);
  imgNameArray.push(this.name);
};

for( var i = 0; i < imgArray.length; i++) {
  imageNameArray.push(imageArray[i].name);
}
function createCatalog () {
  new imgMaker('bag', 'img/bag.jpg');
  new imgMaker('banana', 'img/banana.jpg');
  new imgMaker('bathroom', 'img/bathroom.jpg');
  new imgMaker('boots', 'img/boots.jpg');
  new imgMaker('breakfast', 'img/breakfast.jpg');
  new imgMaker('bubblegum', 'img/bubblegum.jpg');
  new imgMaker('chair', 'img/chair.jpg');
  new imgMaker('cthulhu', 'img/cthulhu.jpg');
  new imgMaker('dog-duck', 'img/dog-duck.jpg');
  new imgMaker('dragon', 'img/dragon.jpg');
  new imgMaker('pen', 'img/pen.jpg');
  new imgMaker('pet-sweep', 'img/pet-sweep.jpg');
  new imgMaker('scissors', 'img/scissors.jpg');
  new imgMaker('shark', 'img/shark.jpg');
  new imgMaker('sweep', 'img/sweep.png');
  new imgMaker('tauntaun', 'img/tauntaun.jpg');
  new imgMaker('unicorn', 'img/unicorn.jpg');
  new imgMaker('usb', 'img/usb.gif');
  new imgMaker('water-can', 'img/water-can.jpg');
  new imgMaker('wine-glass', 'img/wine-glass.jpg');
}

function randomIndex() {
  randomIndex1 = Math.floor(Math.random() * imgArray.length);
  randomIndex2 = Math.floor(Math.random() * imgArray.length);
  randomIndex3 = Math.floor(Math.random() * imgArray.length);
}
function surveyEnd() {
  createButtonEl.textContent = 'View results';
  subBanners.appendChild(createButtonEl);
  subBanners.removeEventListener('click', handleClick);
}

function randomPic() {
  if (surveyLength > 24 ) {
    surveyEnd();
  }
  var lastIndex = [];
  lastIndex.push(randomIndex1);
  lastIndex.push(randomIndex2);
  lastIndex.push(randomIndex3);
  randomIndex();
  while (randomIndex1 === lastIndex[0] || randomIndex1 === lastIndex[1] || randomIndex1 === lastIndex[2] || randomIndex2 === lastIndex[0] || randomIndex2 === lastIndex[1] || randomIndex2 === lastIndex[2] || randomIndex3 === lastIndex[0] || randomIndex3 === lastIndex[1] || randomIndex3 === lastIndex[2] || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
    randomIndex();
  }
  img1.src = imgArray[randomIndex1].path;
  img2.src = imgArray[randomIndex2].path;
  img3.src = imgArray[randomIndex3].path;
  imgArray[randomIndex1].timesAppeared += 1;
  imgArray[randomIndex2].timesAppeared += 1;
  imgArray[randomIndex3].timesAppeared += 1;
}
function handleClick(e) {
  e.preventDefault();

  if (e.target.id === 'img1') {
    imgArray[randomIndex1].timesClicked += 1;
    //push
  }
  else if (e.target.id === 'img2') {
    imgArray[randomIndex2].timesClicked += 1;
    //push
  }
  else if (e.target.id === 'img3') {
    imgArray[randomIndex3].timesClicked += 1;
    //push
  }
  else {
    alert('Pick a product!');
    return;
  }
  surveyLength += 1;
  randomPic();
}

createCatalog();
randomIndex();
randomPic();
drawChart();

subBanners.addEventListener('click', handleClick);

//Charts rendered using Chart JS v.2.6.0
function drawChart(){
  var chartLabel = [];
  var chartData = [];
  for (var i = 0; i < imgArray.length; i ++) {
    chartData.push(imgArray[i].timesClicked);
    chartLabel.push(imgArray[i].name);

  }

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
  </script>

}
