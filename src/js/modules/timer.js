const CLASSES = {
  CONTAINER: 'circle-timer',
  CIRCLE: 'circle-timer__circle',
  CIRCLE_PATH: 'circle-timer__circle-path',
  LABEL: 'circle-timer__label',
};

const FULL_DASH_ARRAY = 283;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}`;
}

class CircleTimer {
  constructor(container) {
    this.elements = {};
    this.elements.container = container;

    this.timeLimit = parseInt(container.getAttribute('data-time-limit') || 120, 10); // В секундах

    this.timePassed = 0;
    this.timeLeft = this.timeLimit;
    this.timerInterval = null;

    if (!container) {
      return;
    }

    this.init();
  }

  init() {
    this.create();
    this.start();
  }

  create() {
    const HTML = `
      <div class="${CLASSES.CONTAINER}">
        <svg class="${CLASSES.CIRCLE}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-dasharray="${FULL_DASH_ARRAY}"
            class="${CLASSES.CIRCLE_PATH}"
            d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
          ></path>
        </svg>
        <span class="${CLASSES.LABEL} h3">${formatTime(this.timeLeft)}</span>
      </div>
    `;

    this.elements.container.innerHTML = HTML;

    this.elements.circlePath = this.elements.container.querySelector(`.${CLASSES.CIRCLE_PATH}`);
    this.elements.label = this.elements.container.querySelector(`.${CLASSES.LABEL}`);
  }

  onTimesUp() {
    clearInterval(this.timerInterval);
  }

  start() {
    this.timerInterval = setInterval(() => {
      this.timePassed = this.timePassed += 1;
      this.timeLeft = this.timeLimit - this.timePassed;

      this.elements.label.innerHTML = formatTime(this.timeLeft);
      this.setCircleDasharray();

      if (this.timeLeft === 0) {
        this.onTimesUp();
      }
    }, 1000);
  }

  calculateTimeFraction() {
    const rawTimeFraction = this.timeLeft / this.timeLimit;

    return rawTimeFraction - (1 / this.timeLimit) * (1 - rawTimeFraction);
  }

  setCircleDasharray() {
    const circleDasharray = `${(this.calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(
      0
    )} ${FULL_DASH_ARRAY}`;

    this.elements.circlePath.setAttribute('stroke-dasharray', circleDasharray);
  }
}


document
    .querySelectorAll(`.circle-timer`)
    .forEach(element => new CircleTimer(element));
