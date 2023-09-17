import './style.css';

export default class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get html() {
    return `
    <div class="container1">
  <div class="main-block">
    <button class="button1">Collapse</button>
    <div class="wrapper1">
      <div class="text">
      <p class="tip">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at nisi vel lectus fermentum sagittis in non lorem. Morbi dapibus mauris ac sodales mattis. Ut vitae ullamcorper urna. Pellentesque maximus sodales sapien sit amet mattis. Nam leo ipsum, elementum quis lacus sit amet, sagittis sollicitudin leo. In hac habitasse platea dictumst. Phasellus tempor est a convallis pharetra. Integer ultrices, elit et maximus eleifend, urna dui pharetra ipsum, nec fringilla nisi lorem a leo. Fusce sit amet justo nibh. Cras convallis augue ac orci ultricies, a auctor ex cursus.</p>
    </div>
    </div>
  </div>
</div>
    `;
  }

  bindToDOM() {
    this.parentEl.innerHTML += Collapse.html;

    this.wrapper = this.parentEl.querySelector('.wrapper1');
    this.button = this.parentEl.querySelector('.button1');

    this.toggleHidden = this.toggleHidden.bind(this);
    this.button.addEventListener('click', this.toggleHidden);
  }

  toggleHidden() {
    this.wrapper.classList.toggle('wrapper-second-state');
  }
}
