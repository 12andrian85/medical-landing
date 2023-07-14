const slideReviews = document.querySelector('#reviews')
const slideNews = document.querySelector('#news')
const slideComment = document.querySelector('#comment')
const slideSocials = document.querySelector('#socials')
// const slideTwo = document.querySelector('#two')
const slideSubmenu = document.querySelector('#submenu')
// const slideMain = document.querySelector('#maincarousel')
const slideLogo = document.querySelector('#logo')
const slideSlide1 = document.querySelector('#slide1')


const allBreakpoints = {
  640: {
    perPage: 1,
  },
  768: {
    perPage: 2,
  },
  1200: {
    perPage: 3,
  },
  2570: {
    perPage: 3,
  },
}


if (slideReviews) {
  var reviews = new Splide('#reviews', {
    type: 'loop',
    perPage: 4,
    focus: 'center',
    arrows: boolean = false,
    breakpoints: {
      // ...allBreakpoints,
    }

  });

  reviews.mount();
}

if (slideNews) {
  var news = new Splide('#news', {
    type: 'loop',
    perPage: 3, // by default is max to be displayed
    focus: '',
    arrows: boolean = false,
    breakpoints: {
      // ...allBreakpoints,
      1440:{
        perPage:3,
      },
      2560: {
        perPage: 3,
      },
    }

  });

  news.mount();
}

if (slideSlide1) {
  var slide1 = new Splide('#slide1', {
    // type: '',
    perPage: 3,
    // focus: '',
    arrows: boolean = false,
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
    }

  });

  slide1.mount();
}

if (slideComment) {
  var comment = new Splide('#comment', {
    // type: 'loop',
    perPage: 1,
    // focus: 'center',
    // arrows: false,
    breakpoints: {
      // ...allBreakpoints
      640: {
        perPage: 1,
      },

    }

  })

  comment.mount();
}

if (slideSocials) {
var socials = new Splide('#socials', {
  // type: 'loop',
  perPage: 1,
  // focus: '',
  arrows: boolean = false,
  breakpoints: {
    640: {
      perPage: 2,
    },
    768: {
      perPage: 4,
    },
    1200: {
      perPage: 6,
    },
    2560: {
      perPage: 6,
    },
  }

});

socials.mount();
}

// if (slideTwo) {
//   var two = new Splide('#two', {
//     fixedWidth: 100,
//     fixedHeight: 60,
//     gap: 10,
//     rewind: true,
//     pagination: false,
//     cover: true,
//     type: '',
//     focus: 'center',
//     arrows: boolean = false,
//     isNavigation: true,
//     breakpoints: {
//       ...allBreakpoints,
//       1200: {
//         perPage: 6,
//       },
//       2560: {
//         perPage: 6,
//       },
//     },
//   });

//   two.mount();
// }

// if (slideMain) {
// var main = new Splide('#maincarousel', {
//   type: 'loop',
//   rewind: true,
//   pagination: false,
//   arrows: false,
//   breakpoints: {
//     ...allBreakpoints,
//   },
// });

// main.sync(two);
// main.mount();
// two.mount();
// }


if (slideNews) {
  var news = new Splide('#news', {
    type: 'loop',
    perPage: 3, // by default is max to be displayed
    focus: 'center',
    arrows: boolean = false,
    breakpoints: {
      ...allBreakpoints,
      // 1200: {
      //   perPage: 5,
      // },

    }

  });

  news.mount();
}


if (slideSubmenu) {
  var submenu = new Splide('#submenu', {
    // type: 'loop',
    perPage: 1,
    // focus: 'center',
    arrows: boolean = false,
    breakpoints: {
      640: {
        perPage: 3,
      },
      768: {
        perPage: 3,
      },
      1200: {
        perPage: 6,
      },
      2560: {
        perPage: 6,
      },
    }

  });

  submenu.mount();
}

if (slideLogo) {
  var logo = new Splide('#logo', {
    // type: '',
    perPage: 6, // by default is max to be displayed
    // focus: 'center',
    arrows: boolean = false,
    breakpoints: {
      // ...allBreakpoints,
      640: {
        perPage: 2,
      },
      768: {
        perPage: 4,
      },
      1200: {
        perPage: 6,
      },
    }
    
  });

  logo.mount();
}

const category = document.querySelector('.category')
const allTabButtons = category.querySelectorAll('.tab__item')
const allTabContents = category.querySelectorAll('.tab__content')
const tabContainer = category.querySelector('.tab__container')

// variant 1
Array.from(allTabButtons).forEach(element => {
  element.addEventListener('click', (e) => {
    let activeCat = e.target.dataset.cat
    
    Array.from(allTabContents).forEach((item) => {
      const targetTabContent = item.dataset.tag

      if (targetTabContent === activeCat) {
        item.classList.add('tab__content--active')
      } else {
        item.classList.remove('tab__content--active')
      }
    })
  })
});

// variant 2
// const artiom = [1, 'text', {}, null] // array is like a list
// const andrian = {andrian: 1, artiom: 'text'} // object

// const categories = [
//   {
//     tag: 'education',
//     imgUrl: 'img/services/education.jpg',
//     title: 'Education',
//     text: 'sdfds sdf sdfsd fds fsdf sd fsd fsd sdsdfsd. sdfsd'
//   },
//   {
//     tag: 'ecommerce',
//     imgUrl: 'img/services/ecommerce.jpg',
//     title: 'E-commerce',
//     text: 'sdfds sdf sdfsd fds fsdf sd fsd fsd sdsdfsd. sdfsd'
//   },
// ]

// Array.from(allTabButtons).forEach(element => {
//   element.addEventListener('click', (e) => {
//     let activeCat = e.target.dataset.cat
    
//     const {imgUrl, title, text} = categories.filter((cat) => cat.tag === activeCat)[0]
//     template(imgUrl, title, text)
//   })
// });

// function template(imgUrl, title, text) {
//   tabContainer.innerHTML =`
//     <div class="tab__content tab__content--active" data-tag="education">
//       <!-- item -->
//       <div class="card mb-3 p-md-4 px-lg-5 rounded-4">
//           <div class="row g-0">
//               <div class="col-md-7 order-md-2">
//                   <img src=${imgUrl} class="rounded-4 img-fluid"
//                       alt="...">
//               </div>
//               <div class="col-md-5 d-flex align-items-center">
//                   <div class="card-body align-items-md-start fs-1">
//                       <h5 class="card-title text-md-start">${title}</h5>
//                       <p class="card-text text-secondary text-center text-md-start fs-6">
//                           ${text}
//                       </p>
//                   </div>
//               </div>
//           </div>
//       </div>
//     </div>`
// }