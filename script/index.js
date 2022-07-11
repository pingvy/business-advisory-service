const header = document.querySelector('.header');
const headerContainer = header.querySelector('.header__container');
const headerNavigationContainer = headerContainer.querySelector('.header__navigation-container');
const headerButton = headerNavigationContainer.querySelector('.header__button-nav');

const headerIntroContainer = headerContainer.querySelector('.header__intro-container');
const headerButtonContainer = headerIntroContainer.querySelector('.header__button-container');
const headerNeighborBtn = headerIntroContainer.querySelector('.neighbor-btn');

const overlay = document.querySelector('.overlay');
const popup = overlay.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');

function popupVisibility(overlayName) {
    overlayName.classList.toggle('overlay_active');
    overlayName.addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
          popupVisibility(overlayName);
      }
    });
  }

  //buttons handlers 
  headerButton.addEventListener('click', (event) => {
    popupVisibility(overlay);
  });

  headerNeighborBtn.addEventListener('click', (event) => {
    popupVisibility(overlay);
  });

  popupCloseButton.addEventListener('click', (event) => {
    popupVisibility(overlay);
  });