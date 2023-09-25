import './style.css';

export default class Liker {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  bindToDOM() {
    const html = `
    <div class="container3">
    <button class="button3">Like</button>
  </div>
    `;
    this.parentElement.insertAdjacentHTML('beforeend', html);

    this.container = this.parentElement.querySelector('.container3');
    this.button = this.container.querySelector('.button3');
    this.motions = ['first-motion', 'second-motion'];

    this.createHeart = this.createHeart.bind(this);
    this.button.addEventListener('click', this.createHeart);
  }

  static heart(motion) {
    return `
      <div class="heart ${motion}"></div>
    `;
  }

  createHeart() {
    const count = Math.floor(Math.random() * 2);
    const heart = Liker.heart(this.motions[count]);
    this.container.insertAdjacentHTML('beforeend', heart);
    setTimeout(() => this.container.querySelector('.heart').remove(), 1000);
  }
}
