const langSwitcher = document.querySelector('.lang-switcher');
const langToggle = document.querySelector('.lang-switcher-toggle');
const langList = document.querySelector('.lang-switcher-list');
const langOptions = document.querySelectorAll('.lang-switcher-option');
const langArrow = document.querySelector('.arrow');

langToggle.addEventListener('click', () => {
    const isOpen = langToggle.getAttribute('aria-expanded') === 'true';

    langList.hidden = isOpen;
    langToggle.setAttribute('aria-expanded', String(!isOpen));
    langArrow.classList.toggle('arrow--rotated', !isOpen);
});

// закрытие при клике вне блока
document.addEventListener('click', (e) => {
    if (!langSwitcher.contains(e.target)) {
        langList.hidden = true;
        langToggle.setAttribute('aria-expanded', 'false');
        langArrow.classList.remove('arrow--rotated');
    }
});

// выбор языка
langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.dataset.lang;
        langToggle.firstChild.textContent = selectedLang.toUpperCase() + ' ';
        langList.hidden = true;
        langToggle.setAttribute('aria-expanded', 'false');
        langArrow.classList.remove('arrow--rotated');
    });
});

const heroSliderEl = document.querySelector('.hero-slider');
if (heroSliderEl) {
    new Swiper(heroSliderEl, {
        loop: true,
        autoplay: { delay: 5000, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        speed: 600,
    });
}

const trendingSliderEl = document.querySelector('.trending-slider');
if (trendingSliderEl) {
    new Swiper(trendingSliderEl, {
        slidesPerView: 3,
        spaceBetween: 40,
        watchOverflow: false,
        navigation: {
            prevEl: '.trending__nav--prev',
            nextEl: '.trending__nav--next',
        },
    });
}

const footerLangSwitcher = document.querySelector('.footer__lang-switcher');
const footerLangToggle = document.querySelector('.footer__lang-toggle');
const footerLangList = document.querySelector('.footer__lang-list');
const footerLangOptions = document.querySelectorAll('.footer__lang-option');
const footerLangArrow = document.querySelector('.footer__lang-arrow');

footerLangToggle.addEventListener('click', () => {
    const isOpen = footerLangToggle.getAttribute('aria-expanded') === 'true';
    footerLangList.hidden = isOpen;
    footerLangToggle.setAttribute('aria-expanded', String(!isOpen));
    footerLangArrow.classList.toggle('arrow--rotated', !isOpen);
});

document.addEventListener('click', (e) => {
    if (!footerLangSwitcher.contains(e.target)) {
        footerLangList.hidden = true;
        footerLangToggle.setAttribute('aria-expanded', 'false');
    }
});

footerLangOptions.forEach(option => {
    option.addEventListener('click', () => {
        const selectedLang = option.textContent;
        footerLangToggle.firstChild.textContent = selectedLang + ' ';
        footerLangList.hidden = true;
        footerLangToggle.setAttribute('aria-expanded', 'false');
    });
});


//Profile Child swiper 

// Общие свайперы карточек с книгами (с пагинацией)
document.querySelectorAll('.info-card__swiper').forEach((swiperEl) => {
    new Swiper(swiperEl, {
        slidesPerView: 3,
        spaceBetween: 12,
        pagination: {
            el: swiperEl.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });
});

// Свайпер значков (без пагинации, дробный slidesPerView)

const badgesSwiperEl = document.querySelector('.info-card__swiper-badges');
if (badgesSwiperEl) {
    new Swiper(badgesSwiperEl, {
        slidesPerView: 2.5,
        spaceBetween: 20,
    });
}