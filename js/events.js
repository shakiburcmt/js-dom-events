console.log('hello');
// system 2 beshi use hobe
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// system 3 for adding event handler function call in button, function create in script tag
const makeBlueButton = document.getElementById('makeBlue');
// niche just function name dite hobe kintu call kora jabe na
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// system 3 another, use sometimes
const makePurpleButton = document.getElementById('makePurple');
makePurpleButton.onclick = function purple() {
    document.body.style.backgroundColor = 'purple';
}

// system 4
const aquaButton = document.getElementById('makeAqua');
aquaButton.addEventListener('click', makeAqua)

function makeAqua() {
    document.body.style.backgroundColor = 'aqua';
}

// system 4 another
const coralButton = document.getElementById('makeCoral');
coralButton.addEventListener('click', function makeCoral() {
    document.body.style.backgroundColor = 'coral';
})

// system 4 another which is mostly used
document.getElementById('makeGray').addEventListener('click', function () {
    document.body.style.backgroundColor = 'gray';
})
