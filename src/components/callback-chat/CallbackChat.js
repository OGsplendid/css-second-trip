import './style.css';

export default class CallbackChat {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get html() {
    return `
    <div class="container2">
  <div class="popup hidden"></div>
  <div class="button-container">
    <button class="button2"></button>
  </div>
</div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML += CallbackChat.html;

    this.container = document.querySelector('.container2');
    this.button = document.querySelector('.button2');
    this.popup = document.querySelector('.popup');

    this.openPopup = this.openPopup.bind(this);
    this.closePopup = this.closePopup.bind(this);

    this.button.addEventListener('click', this.openPopup);
    this.popup.addEventListener('click', this.closePopup);
  }

  openPopup() {
    if (this.button.classList.contains('button-appear')) {
      this.popup.classList.toggle('popup-disappear');
      this.button.classList.toggle('button-appear');
    }
    this.button.classList.toggle('button-disappear');
    this.popup.classList.toggle('popup-appear');
    setTimeout(() => {
      this.button.classList.toggle('hidden');
      this.popup.classList.toggle('hidden');
    }, 500);
  }

  closePopup() {
    this.button.classList.toggle('button-disappear');
    this.button.classList.toggle('button-appear');
    this.popup.classList.toggle('popup-appear');
    this.popup.classList.toggle('popup-disappear');
    setTimeout(() => {
      this.button.classList.toggle('hidden');
      this.popup.classList.toggle('hidden');
    }, 500);
  }
}
