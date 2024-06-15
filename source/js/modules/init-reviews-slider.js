const reviewsContainer = document.querySelector('.reviews__slider');
const breakpointMb = window.matchMedia('(max-width: 767px)');
let reviewsSlider;

const removeFocus = () => {
  document.activeElement.blur();
};

const initReviewsSlider = () => {
  if (!reviewsContainer) {
    return;
  }

  const nextBtn = document.querySelector('.slider-buttons__btn--next');
  const prevBtn = document.querySelector('.slider-buttons__btn--prev');
  const scrollBar = document.querySelector('.reviews .swiper-scrollbar');

  const initReviewsSwiper = () => {
    // eslint-disable-next-line
    reviewsSlider = new Swiper(reviewsContainer, {
      loop: false,
      speed: 600,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      //spaceBetween: 60,
      navigation: {
        nextEl: nextBtn,
        prevEl: prevBtn,
      },
      scrollbar: {
        el: scrollBar,
        dragSize: 'auto',
      },
      allowTouchMove: true,
      breakpoints: {
        320: {
          enabled: false,
        },
        768: {
          enabled: true,
          slidesPerGroup: 2,
        },
        1023: {
          slidesPerGroup: 1,
        },
      },
    });

    reviewsSlider.on('touchStart', removeFocus);
    nextBtn.removeEventListener('mouseup', removeFocus);
    prevBtn.removeEventListener('mouseup', removeFocus);
    nextBtn.addEventListener('mouseup', removeFocus);
    prevBtn.addEventListener('mouseup', removeFocus);
  };

  const breakpointChecker = () => {
    if (breakpointMb.matches) {
      if (reviewsSlider) {
        reviewsSlider.destroy(true, true);
      }
      return;
    } else {
      initReviewsSwiper();
    }
  };

  breakpointMb.addListener(breakpointChecker);
  breakpointChecker();
};

export {initReviewsSlider};
