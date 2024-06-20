const DEFAULT_DURATION = 50;
const MOBILE_DURATION = 30;
const marqueeContainer = document.querySelector('.marquee');
const breakpointMb = window.matchMedia('(max-width: 767px)');

class Marquee {
  constructor(element) {
    this.marquee = element;
  }

  init() {
    if (this.marquee) {
      this.setupMarquee();
      this.setupEventListeners();
    }
  }

  setupMarquee() {
    const wrappers = [...this.marquee.querySelectorAll('.marquee__wrapper')];
    wrappers.forEach((wrapper) => {
      if (!wrapper.getBoundingClientRect().width) {
        return;
      }
      const marqueeFragment = wrapper.querySelector('.marquee__fragment');
      if (!marqueeFragment) {
        return;
      }

      while (wrapper.getBoundingClientRect().width < window.innerWidth) {
        const fragment = marqueeFragment.cloneNode(true);
        wrapper.appendChild(fragment);
      }

      const defaultDuration = breakpointMb.matches ? MOBILE_DURATION : DEFAULT_DURATION;

      const duration = this.marquee.dataset.animationDuration ? this.marquee.dataset.animationDuration : defaultDuration;

      wrapper.style.animationDuration = `${duration}s`;
    });
    wrappers[1].style.left = `${wrappers[1].getBoundingClientRect().width}px`;
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.setupMarquee();
    }, true);
  }
}

const marquee = new Marquee(marqueeContainer);

const initMarquee = () => {
  marquee.init();
};

export {initMarquee};
