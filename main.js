// make the timer
// grab the body of the website and replace it with our styled timer/etc
// some sort of cache to store timer/ time timer was started
// set body/display to null to hide the contents

// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);

// instead of changing the current website, we redirect to another website until the timer allows us to pass
// check if website is not in the list of "allowed" websites
// if it's not, redirect user to index file with timer
let currentLocation = window.location.href;
console.log(currentLocation);
// array of "allowed" websites
// alert the user of focus time remaining
const allowedSites = [
  'https://developer.mozilla.org/en-US/',
  'https://www.codesmith.io/',
  'https://www.w3schools.com/',
  'https://www.codecademy.com/',
];
if (!allowedSites.includes(currentLocation)) {
  window.location.href = 'https://www.codesmith.io/';
}
// declare function to create a timer based on amount of minutes passed in
class createTimer {
  //constructor
  constructor(minutes) {
    this.msLeft = minutes * 60;
    this.timer = null;
  }
  //methods
  start() {
    this.timer = setInterval(() => this.msLeft--, 1000);
  }
  end() {
    clearInterval(this.timer);
  }
}

const studyTimer = new createTimer(1);
// studyTimer.start();
// setTimeout(() => studyTimer.end(), 4000);

// set study parameters
// set total timer for total time
//
