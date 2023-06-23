var splide = new Splide('#reviews', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
  arrows: boolean = false,

  perPage: 4,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1200: {
      perPage: 3,
    },
    2440: {
      perPage: 4,
    },
  }

});

splide.mount();

var splide = new Splide('#news', {
  type: 'loop',
  perPage: 3,
  focus: 'center',
  arrows: boolean = false,

  perPage: 4,
  breakpoints: {
    640: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1200: {
      perPage: 3,
    },
    2440: {
      perPage: 3,
    },
  }

});

splide.mount();