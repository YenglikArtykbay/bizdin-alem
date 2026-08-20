const langSwitcher = document.querySelector('.lang-switcher');
const langToggle = document.querySelector('.lang-switcher-toggle');
const langList = document.querySelector('.lang-switcher-list');
const langOptions = document.querySelectorAll('.lang-switcher-option');
const langArrow = document.querySelector('.arrow');

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const isOpen = langToggle.getAttribute('aria-expanded') === 'true';
        langList.hidden = isOpen;
        langToggle.setAttribute('aria-expanded', String(!isOpen));
        langArrow.classList.toggle('arrow--rotated', !isOpen);
    });

    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langList.hidden = true;
            langToggle.setAttribute('aria-expanded', 'false');
            langArrow.classList.remove('arrow--rotated');
        }
    });

    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.dataset.lang;
            langToggle.firstChild.textContent = selectedLang.toUpperCase() + ' ';
            langList.hidden = true;
            langToggle.setAttribute('aria-expanded', 'false');
            langArrow.classList.remove('arrow--rotated');
        });
    });
}

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

if (footerLangToggle) {
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
}


// Profile Child swiper
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

const badgesSwiperEl = document.querySelector('.info-card__swiper-badges');
if (badgesSwiperEl) {
    new Swiper(badgesSwiperEl, {
        slidesPerView: 2.5,
        spaceBetween: 20,
    });
}

const bookRowEl = document.querySelector('.teacher-card--books .book-row');
if (bookRowEl) {
    new Swiper(bookRowEl, {
        slidesPerView: 'auto',
        spaceBetween: 26,
        freeMode: true,
        slidesOffsetAfter: 26,
    });
}

const collectionSwiperEl = document.querySelector('.teacher-card--collections .collection-swiper');
if (collectionSwiperEl) {
    new Swiper(collectionSwiperEl, {
        slidesPerView: 'auto',
        watchOverflow: false,
        spaceBetween: 36,
        longSwipesRatio: 0.15,
        slidesOffsetAfter: 26,
        pagination: {
            el: collectionSwiperEl.querySelector('.swiper-pagination'),
            clickable: true,
        },
    });
}


// Survey page
const surveyCard = document.querySelector('.survey-page__card');

if (surveyCard) {
    const questionGroups = surveyCard.querySelectorAll('.survey-question__options');
    const submitBtn = surveyCard.querySelector('.survey-page__submit-btn');

    questionGroups.forEach((group) => {
        group.addEventListener('click', (e) => {
            const btn = e.target.closest('.survey-option');
            if (!btn) return;

            group.querySelectorAll('.survey-option').forEach((opt) => {
                opt.classList.remove('survey-option--selected');
                opt.setAttribute('aria-checked', 'false');
            });

            btn.classList.add('survey-option--selected');
            btn.setAttribute('aria-checked', 'true');
        });
    });

    submitBtn?.addEventListener('click', () => {
        const answers = [];
        let allAnswered = true;

        questionGroups.forEach((group, index) => {
            const selected = group.querySelector('.survey-option--selected');
            if (!selected) {
                allAnswered = false;
                return;
            }
            answers.push({
                question: index + 1,
                rating: Number(selected.dataset.rating),
            });
        });

        if (!allAnswered) {
            alert('Пожалуйста, ответь на все вопросы перед отправкой');
            return;
        }

        console.log('Ответы опроса:', answers);
        alert('Спасибо за участие!');
    });
}


// Registration page
const registrationBox = document.querySelector('.registration-box');

if (registrationBox) {
    const layout = registrationBox.closest('.registration__layout');

    const roleOptions = registrationBox.querySelectorAll('.registration-box__option');
    const childNameGroup = registrationBox.querySelector('.form-group--child-name');
    const schoolGroup = registrationBox.querySelector('.form-group--school');
    const rewardBlock = registrationBox.querySelector('.registration-reward');
    const form = registrationBox.querySelector('.registration-form');

    const headerSubtitleEl = layout?.querySelector('[data-role-header-subtitle]');
    const formSubtitleEl = registrationBox.querySelector('[data-role-form-subtitle]');

    const decorBlocks = layout?.querySelectorAll('[data-role-decor]') ?? [];
    const characterBlocks = layout?.querySelectorAll('[data-role-character]') ?? [];

    let selectedRole = null;

    const roleContent = {
        child: {
            headerSubtitle: 'создай аккаунт и открой мир интересных книг.',
            formSubtitle: 'Создай свой аккаунт и начни читать уже сегодня.',
        },
        parent: {
            headerSubtitle: 'создай аккаунт и читай книги вместе с ребёнком.',
            formSubtitle: 'Создай свой аккаунт, чтобы  начать читать книги с ребенком уже сегодня.',
        },
        teacher: {
            headerSubtitle: 'создай аккаунт и открой мир интересных книг.',
            formSubtitle: 'Создай свой аккаунт и начни читать уже сегодня.',
        },
    };

    function selectRole(role) {
        selectedRole = role;

        roleOptions.forEach((opt) => {
            opt.classList.remove('registration-box__option--selected');
            opt.setAttribute('aria-checked', 'false');
        });
        const activeOption = registrationBox.querySelector(`[data-role="${role}"]`);
        activeOption?.classList.add('registration-box__option--selected');
        activeOption?.setAttribute('aria-checked', 'true');

        if (childNameGroup) childNameGroup.hidden = role !== 'parent';
        if (schoolGroup) schoolGroup.hidden = role !== 'teacher';
        if (rewardBlock) rewardBlock.hidden = role !== 'child';

        const content = roleContent[role];
        if (content) {
            if (headerSubtitleEl) headerSubtitleEl.textContent = content.headerSubtitle;
            if (formSubtitleEl) formSubtitleEl.textContent = content.formSubtitle;
        }

        decorBlocks.forEach((block) => {
            block.hidden = block.dataset.roleDecor !== role;
        });
        characterBlocks.forEach((block) => {
            block.hidden = block.dataset.roleCharacter !== role;
        });
    }

    roleOptions.forEach((opt) => {
        const role = opt.dataset.role;

        opt.addEventListener('click', () => selectRole(role));

        opt.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectRole(role);
            }
        });
    });

    selectRole('parent');

    form?.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const payload = {
            role: selectedRole,
            fullName: formData.get('fullName'),
            email: formData.get('email'),
            password: formData.get('password'),
            passwordConfirm: formData.get('passwordConfirm'),
            agree: formData.get('agree') === 'on',
        };

        if (selectedRole === 'parent') {
            payload.childName = formData.get('childName');
        }
        if (selectedRole === 'teacher') {
            payload.school = formData.get('school');
        }

        if (payload.password !== payload.passwordConfirm) {
            alert('Пароли не совпадают');
            return;
        }
        if (!payload.agree) {
            alert('Нужно согласиться с правилами сайта');
            return;
        }

        console.log('Регистрация:', payload);
    });
}

// Little Writer — landing gallery selection
const lwGallery = document.querySelector('.lw-gallery__grid');
if (lwGallery) {
    lwGallery.addEventListener('click', (e) => {
        const item = e.target.closest('.lw-gallery__item');
        if (!item) return;

        lwGallery.querySelectorAll('.lw-gallery__item').forEach((el) => {
            el.classList.remove('lw-gallery__item--selected');
        });
        item.classList.add('lw-gallery__item--selected');

    });
}

// Little Writer — write page: подсказки вставляют текст, счётчик символов
const lwStoryText = document.getElementById('lwStoryText');
const lwCharCount = document.getElementById('lwCharCount');

if (lwStoryText && lwCharCount) {
    lwStoryText.addEventListener('input', () => {
        lwCharCount.textContent = lwStoryText.value.length;
    });

    document.querySelectorAll('.lw-hint').forEach((hint) => {
        hint.addEventListener('click', () => {
            const hintText = hint.textContent.trim();
            const separator = lwStoryText.value.trim() ? '\n\n' : '';
            lwStoryText.value += `${separator}${hintText} `;
            lwStoryText.dispatchEvent(new Event('input'));
            lwStoryText.focus();
        });
    });
}

const lwSaveBtn = document.getElementById('lwSaveBtn');
lwSaveBtn?.addEventListener('click', () => {
    const title = document.getElementById('lwStoryTitle')?.value.trim();
    const text = document.getElementById('lwStoryText')?.value.trim();

    if (!title || !text) {
        alert('Придумай название и напиши хотя бы немного текста перед сохранением!');
        return;
    }

    console.log('Сохранено:', { title, text });
    alert('История сохранена! (пока просто в консоли — бэк подключит сохранение)');
});

const lwBackBtn = document.getElementById('lwBackBtn');
lwBackBtn?.addEventListener('click', () => {
    window.location.href = '/pages/little-writer.html';
});