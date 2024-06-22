export initReviewsName = () => {

  const reviewsTitleBlok = reviewsTitleContainer.querySelector('.reviews__title');

  gsap.set('[data-animate-title="rotateX"]', {
    rotationX: -90,
    opacity: 0,
    scale: 0.7,
  });

  const titleRotateTimeline = gsap.timeline({paused: true});

  titleRotateTimeline.to('[data-animate-title="rotateX"]', {
    rotationX: 0,
    opacity: 1,
    scale: 1,
  });

  titleRotateTimeline.to('[data-animate-title="rotateX"]', {
    rotationX: 90,
    opacity: 0,
    scale: 0.7,
  });

  ScrollTrigger.create({
    trigger: reviewsTitleContainer,
    start: 'top 90%',
    end: 'top 10%',
    scrub: true,
    onUpdate: (self) => {
      titleRotateTimeline.progress(self.progress).paused(); // прогресс скроллтригера передаем в прогресс таймлайна
    },
  });
};
