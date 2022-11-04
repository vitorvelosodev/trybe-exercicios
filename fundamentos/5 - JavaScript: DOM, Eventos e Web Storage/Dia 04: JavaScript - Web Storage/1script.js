const bodyPage = document.querySelector('body'); // Capturing body of HTML

function darkOrLightMode() {
  const btnDarkMode = document.querySelector('#bg-dark-mode');
  btnDarkMode.addEventListener('click', () => {
    bodyPage.classList.add('dark-mode');
    bodyPage.classList.remove('light-mode');
  });

  const btnLightMode = document.querySelector('#bg-light-mode');
  btnLightMode.addEventListener('click', () => {
    bodyPage.classList.add('light-mode');
    bodyPage.classList.remove('dark-mode');
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
  });
  tcMediumGray.addEventListener('click', () => {
    bodyPage.classList.add('tc-medium-gray');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-black');
  });
  tcDarkerGray.addEventListener('click', () => {
    bodyPage.classList.add('tc-darker-gray');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-medium-gray');
    bodyPage.classList.remove('tc-black');
  });
  tcBlack.addEventListener('click', () => {
    bodyPage.classList.add('tc-black');
    bodyPage.classList.remove('tc-light-gray');
    bodyPage.classList.remove('tc-darker-gray');
    bodyPage.classList.remove('tc-medium-gray');
  });
}



darkOrLightMode();
textColor();