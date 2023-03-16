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
console.log(currentLocation)
// array of "allowed" websites
// alert the user of focus time remaining
const allowedSites = ["https://developer.mozilla.org/en-US/"]
if (!allowedSites.includes(currentLocation)) {
    window.location.href = "https://www.codesmith.io/"
}

// set study parameters
// set total timer for total time
// 