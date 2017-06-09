var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_1797.JPG') {
      myImage.setAttribute ('src','images/IMG_3320.JPG');
    } else {
      myImage.setAttribute ('src','images/IMG_1797.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
myButton.onclick = function() {
  setUserName();
}
