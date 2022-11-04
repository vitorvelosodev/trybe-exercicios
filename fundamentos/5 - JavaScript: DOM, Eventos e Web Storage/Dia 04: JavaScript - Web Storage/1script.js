const bodyPage = document.querySelector('body'); // Capturing body of HTML

function darkOrLightMode() {
  const btnDarkMode = document.querySelector('#bg-dark-mode');
  btnDarkMode.addEventListener('click', () => {
    bodyPage.classList.add('dark-mode');
    bodyPage.classList.remove('light-mode');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-medium-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-black');
    store();
  });

  const btnLightMode = document.querySelector('#bg-light-mode');
  btnLightMode.addEventListener('click', () => {
    bodyPage.classList.add('light-mode');
    bodyPage.classList.remove('dark-mode');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-medium-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-black');
    store();
  });
}

function textColor() {
  const tcLightGray = document.querySelector('#tc-light-gray'); // light gray button
  const tcMediumGray = document.querySelector('#tc-medium-gray'); // medium gray button
  const tcDarkerGray = document.querySelector('#tc-darker-gray'); // darker gray button
  const tcBlack = document.querySelector('#tc-black'); // black button
  
  tcLightGray.addEventListener('click', () => {
    bodyPage.classList.add('tc-light-gray');
    bodyPage.classList.remove('tc-medium-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-black');
    store();
  });
  tcMediumGray.addEventListener('click', () => {
    bodyPage.classList.add('tc-medium-gray');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-black');
    store();
  });
  tcDarkerGray.addEventListener('click', () => {
    bodyPage.classList.add('tc-darker-gray');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-medium-gray');
    bodyPage.classList.remove('tc-black');
    store();
  });
  tcBlack.addEventListener('click', () => {
    bodyPage.classList.add('tc-black');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-medium-gray');
    store();
  });
}

function fontSize () {
  const fontSmall = document.querySelector('#fs-small'); // Button Small
  const fontMedium = document.querySelector('#fs-medium'); // Button Medium
  const fontBig = document.querySelector('#fs-big'); // Button Big
  const fontBigger = document.querySelector('#fs-bigger'); // Button Bigger

  fontSmall.addEventListener('click', () => {
    bodyPage.classList.add('fs-small');
    bodyPage.classList.remove('fs-medium');
    bodyPage.classList.remove('fs-big');
    bodyPage.classList.remove('fs-bigger');
    store();
  });
  fontMedium.addEventListener('click', () => {
    bodyPage.classList.add('fs-medium');
    bodyPage.classList.remove('fs-small');
    bodyPage.classList.remove('fs-big');
    bodyPage.classList.remove('fs-bigger');
    store();
  });
  fontBig.addEventListener('click', () => {
    bodyPage.classList.add('fs-big');
    bodyPage.classList.remove('fs-medium');
    bodyPage.classList.remove('fs-small');
    bodyPage.classList.remove('fs-bigger');
    store();
  });
  fontBigger.addEventListener('click', () => {
    bodyPage.classList.add('fs-bigger');
    bodyPage.classList.remove('fs-medium');
    bodyPage.classList.remove('fs-big');
    bodyPage.classList.remove('fs-small');
    store();
  });
}

function lineSpacing() {
  const lsNone = document.querySelector('#ls-none'); // Button None
  const lsSmall = document.querySelector('#ls-small'); // Button Small
  const lsMedium = document.querySelector('#ls-medium'); // Button None
  const lsHigh = document.querySelector('#ls-high'); // Button None

  lsNone.addEventListener('click', () => {
    bodyPage.classList.add('ls-none');
    bodyPage.classList.remove('ls-small');
    bodyPage.classList.remove('ls-medium');
    bodyPage.classList.remove('ls-high');
    store();
  });
  lsSmall.addEventListener('click', () => {
    bodyPage.classList.add('ls-small');
    bodyPage.classList.remove('ls-none');
    bodyPage.classList.remove('ls-medium');
    bodyPage.classList.remove('ls-high');
    store();
  });
  lsMedium.addEventListener('click', () => {
    bodyPage.classList.add('ls-medium');
    bodyPage.classList.remove('ls-small');
    bodyPage.classList.remove('ls-none');
    bodyPage.classList.remove('ls-high');
    store();
  });
  lsHigh.addEventListener('click', () => {
    bodyPage.classList.add('ls-high');
    bodyPage.classList.remove('ls-small');
    bodyPage.classList.remove('ls-medium');
    bodyPage.classList.remove('ls-none');
    store();
  });
}

function fontFamily() {
  const ffRoboto = document.querySelector('#ff-roboto');
  const ffBreeSerif = document.querySelector('#ff-bree-serif');
  const ffNotoSans = document.querySelector('#ff-noto-sans');
  const ffHelvetica = document.querySelector('#ff-helvetica');

  ffRoboto.addEventListener('click', () => {
    bodyPage.classList.add('ff-roboto');
    bodyPage.classList.remove('ff-bree-serif');
    bodyPage.classList.remove('ff-noto-sans');
    bodyPage.classList.remove('ff-helvetica');
    store();
  });
  ffBreeSerif.addEventListener('click', () => {
    bodyPage.classList.add('ff-bree-serif');
    bodyPage.classList.remove('ff-roboto');
    bodyPage.classList.remove('ff-noto-sans');
    bodyPage.classList.remove('ff-helvetica');
    store();
  });
  ffNotoSans.addEventListener('click', () => {
    bodyPage.classList.add('ff-noto-sans');
    bodyPage.classList.remove('ff-roboto');
    bodyPage.classList.remove('ff-bree-serif');
    bodyPage.classList.remove('ff-helvetica');
    store();
  });
  ffHelvetica.addEventListener('click', () => {
    bodyPage.classList.add('ff-helvetica');
    bodyPage.classList.remove('ff-roboto');
    bodyPage.classList.remove('ff-noto-sans');
    bodyPage.classList.remove('ff-bree-serif');
    store();
  });
}

// Local Storage setup

function store() {
  localStorage.clear();
  let saveClass = document.querySelector('body').classList.value;
  localStorage.setItem('classes', saveClass);
  // console.log(saveClass); // FOR DEBUGGING
}

function setStored() {
  if (localStorage.length > 0) {
    bodyPage.className = localStorage.getItem('classes');
  }
}

// Reset
function reset() {
  const reset = document.querySelector('#reset');
  reset.addEventListener('click', () => {
    bodyPage.className = '';
    localStorage.clear();
    bodyPage.className = 'light-mode ff-roboto';
  });
}

window.onload = setStored();
fontFamily();
lineSpacing();
fontSize();
darkOrLightMode();
textColor();
reset();