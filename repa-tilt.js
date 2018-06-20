/***
 * Copyright (c) 2018 Gyuri Horák
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class RepaTilt extends PolymerElement {

  static get properties() {
    return {
      noX: Boolean,
      noY: Boolean,
      noMobile: Boolean,
      reversed: Boolean,
      noGradient: Boolean
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;

          padding: 5%;

          background: var(--repa-tilt-background, black);
          overflow: hidden;
        }

        .card {
          color: var(--repa-text-color, #fff);
          background: var(--repa-primary-color, #44a655);

          padding: 5%;
          height: 90%;

          display: flex;
          align-items: center;
          justify-content: center;

          will-change: transform;
          transition: transform 100ms ease;

          transform: perspective(100vh) rotateX(0deg) rotateY(0deg);
          transform-style: preserve-3d;
        }

        .card-gradient {
          background: linear-gradient(
            var(--repa-tilt-gradient-deg, 135deg),
            var(--repa-tilt-primary-color, #44a655),
            var(--repa-tilt-secondary-color, #6168a5)
          );
        }

        .content {
          text-align: center;
          transform: translateZ(var(--repa-tilt-z1, 10vh));
          transform-style: preserve-3d;
        }

        ::slotted(*) {
          transform-style: preserve-3d;
        }

        .high {
          transform: translateZ(var(--repa-tilt-z2, 5vh));
          display: inline-block;
        }
      </style>

      <div class$="card {{gradientClass()}}" on-mouseleave="reset" on-mousemove="mousemove">
        <div class="content">
          <slot>repa <b class="high">tilt</b>!</slot>
        </div>
      </div>
    `;
  }

  gradientClass() {
    return this.noGradient ? '' : 'card-gradient';
  }

  constructor() {
    super();

    this.position = {
      top: 0,
      left: 0,
      width: 1,
      height: 1
    };

    this.rotX = 0;
    this.rotY = 0;

    this.addEventListener('mouseenter', this.mouseinit.bind(this));
    this.addEventListener('mousemove', this.mousemove.bind(this));
    this.addEventListener('mouseleave', this.reset.bind(this));
    window.addEventListener('deviceorientation', this.handleOrientation.bind(this));

    this._updateTiltB = this._updateTilt.bind(this);
  }

  handleOrientation(e) {
    if (this.noMobile) {
      return;
    }

    let rotX = -e.gamma / 2,
        rotY = (e.beta-45) / 2;

    this.updateTilt(rotX, rotY);
  }

  mouseinit() {
    let crect = this.getBoundingClientRect();

    this.position = {
      top: crect.top,
      left: crect.left,
      width: crect.width,
      height: crect.height
    };
  }

  mousemove(e) {
    const MAXROT = 45;

    let dX = (e.clientX - this.position.left) / this.position.width, // 0 < dX < 1
        dY = (e.clientY - this.position.top) / this.position.height, // 0 < dY < 1
        rotX = (0.5 - dX) * MAXROT,
        rotY = (dY - 0.5) * MAXROT;

    this.updateTilt(rotX, rotY);
  }

  reset() {
    this.updateTilt(0, 0);
  }

  updateTilt(rotX, rotY) {
    this.rotX = this.reversed ? -rotX : rotX;
    this.rotY = this.reversed ? -rotY : rotY;

    if (this._updateRAF) {
      cancelAnimationFrame(this._updateRAF);
    }

    this._updateRAF = requestAnimationFrame(this._updateTiltB);
  }

  _updateTilt() {
    let card = this.shadowRoot.querySelector('.card');

    card.style.transform = `perspective(100vh)
                            rotateX(${this.noY ? 0 : this.rotY}deg)
                            rotateY(${this.noX ? 0 : this.rotX}deg)`;

    this._updateRAF = null;
  }
}

window.customElements.define('repa-tilt', RepaTilt);
