// make the timer
// grab the body of the website and replace it with our styled timer/etc
// some sort of cache to store timer/ time timer was started
// set body/display to null to hide the contents

// const contents = document.getElementById('contents');
// contents.parentNode.removeChild(contents);

// instead of changing the current website, we redirect to another website until the timer allows us to pass
// check if website is not in the list of "allowed" websites
// if it's not, redirect user to index file with timer
let currentLocation = window.location.hostname
// array of "allowed" websites
// alert the user of focus time remaining
const allowedSites = [
  'developer.mozilla.org',
  'www.codesmith.io',
  'www.w3schools.com',
  'www.codecademy.com',
];

const allowedSitesLinks = [
    'https://www.codesmith.io/',
    'https://developer.mozilla.org/en-US/',
    'https://www.w3schools.com/default.asp',
    'https://www.codecademy.com/learn'
]

if (!allowedSites.includes(currentLocation)) {
  // find a random number between 0 and 3
  let randomNum = Math.floor(Math.random() * 3)
  window.location.href = allowedSitesLinks[randomNum];
  // alert the user that they're supposed to be studying
  alert('This site is junk. Let\'s get back to coding!')
  // maybe add an alert that tells you how much time you have left?
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
