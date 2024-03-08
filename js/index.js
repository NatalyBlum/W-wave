let burger = document.querySelector('.burger');
let menuTop = document.querySelector('.top-nav');
let menuBottom = document.querySelector('.bottom-nav');
let menuLinks = document.querySelectorAll('.nav__link');

// Бургер-меню

burger.addEventListener('click', function() {

    burger.classList.toggle('burger--active');

    menuTop.classList.toggle('top-nav--active');

    menuBottom.classList.toggle('bottom-nav--active');

    document.body.classList.toggle('stop-scroll');

  })

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');

    menuTop.classList.remove('top-nav--active');

    menuBottom.classList.toggle('bottom-nav--active');

    document.body.classList.remove('stop-scroll');

  })
})

// Селект

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  itemSelectText: '',
});

// Аккордеон

let acc = new Accordion('.guests__list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
});

acc.open(0);

new Accordion('.header__online', {
  elementClass: 'online__accordion',
  triggerClass: 'online__control',
  panelClass: 'online__content',
  activeClass: 'online__accordion--active'
});

// Табы

document.querySelectorAll('.tabs-nav__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__link').forEach(function(btn){
      btn.classList.remove('tabs-nav__link--active')
    });

    e.currentTarget.classList.add('tabs-nav__link--active');

    document.querySelectorAll('.cards__item').forEach(function(tabsBtn){
      tabsBtn.classList.remove('cards__item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('cards__item--active');
  });
});

// Слайдер

new Swiper('.about-us__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    320: {
			slidesPerView: 2.4,
      spaceBetween: 31,
		},
		768: {
			slidesPerView: 2,
      spaceBetween: 28,
		},
    1268: {
			slidesPerView: 4,
      spaceBetween: 25,
		}
	}
});

// Слайдер кнопок

new Swiper('.playlist__slider', {
  loop: true,

  slidesPerView: "auto",
  spaceBetween: 17,
});

// Подкасты

const btnMore = document.querySelector('.podcasts__btn');
const podcastsItems = document.querySelectorAll('.podcasts__item');
const podcastsList = document.querySelector('.podcasts__list');

btnMore.addEventListener('click', () => {
  podcastsItems.forEach(el => { el.classList.add('podcasts__item--visible') });
  podcastsList.classList.remove('indent');
  btnMore.classList.add('podcasts__btn--hidden');
});

// Поиск

let headerSearch = document.querySelector('.btn-search');
let searchForm = document.querySelector('.search');

headerSearch.addEventListener('click', function() {

  searchForm.classList.add('search--active');

  document.body.classList.toggle('stop-scroll');

})

//  Валидация

const validation = new JustValidate('#form');
validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'customRegexp',
      value: /[a-zA-Z]/gi,
      errorMessage: 'Ошибка',
    },
  ])
  .addField('#message', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели сообщение',
    },
    {
      rule: 'customRegexp',
      value: /[a-zA-Z]/gi,
      errorMessage: 'Ошибка',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Ошибка',
    },
  ]);


const validationPopup = new JustValidate('#popup-form');
validationPopup
  .addField('#login', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели логин',
    },
  ])
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели пароль',
    },
    {
      rule: 'password',
      errorMessage: 'Ошибка',
    },
  ]);

// Popup

let popup = document.querySelector('.popup');
let btnLogIn = document.querySelector('.btn-log-in');
let popupBtn = document.querySelector('.popup__btn');
let popupClose = document.querySelector('.popup__close');

btnLogIn.addEventListener('click', function() {

  popup.classList.toggle('popup--active');

  document.body.classList.toggle('stop-scroll');

})

popupBtn.addEventListener('click', function() {

  popup.classList.remove('popup--active');

  document.body.classList.remove('stop-scroll');

})

popupClose.addEventListener('click', function() {

  popup.classList.remove('popup--active');

  document.body.classList.remove('stop-scroll');

})
