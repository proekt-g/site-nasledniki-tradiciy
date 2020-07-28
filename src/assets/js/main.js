function checkWidth() {
    if (window.innerWidth <= 768) {
        document.querySelector('.header-menu__desktop').insertAdjacentElement('beforeend', document.querySelector('.header__log'));
    }
    if (window.innerWidth >= 768) {
        document.querySelector('.header-container').insertAdjacentElement('beforeend', document.querySelector('.header__log'));
    }
}
window.addEventListener('load', function() {
    checkWidth();

    function clickFilter() {
        $('.part-filter-content__main').not($(this)).removeClass('active');
        $('.part-filter-content__submain').not($(this).next()).slideUp(300);
        $('.program .filter-content__main').not($(this)).removeClass('active');
        $('.program .filter-content__submain').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    }

    function clickSubmainItem() {
        let buffText;
        if (this.closest('.part-filter-content__item') !== null)
            if (this.closest('.part-filter-content__item').className === 'part-filter-content__item') this.closest('.part-filter-content__item').className += ' first-click';
        if (this.closest('.program .filter-content__item') !== null)
            if (this.closest('.filter-content__item').className === 'filter-content__item') this.closest('.filter-content__item').className += ' first-click';

        if (this.closest('.part-filter-content__item') !== null) {
            buffText = this.closest('.part-filter-content__item').querySelector('.part-filter-content__main').textContent;
            this.closest('.part-filter-content__item').querySelector('input').value = this.id;
            this.closest('.part-filter-content__item').querySelector('.part-filter-content__main').textContent = this.textContent;
        } else {
            buffText = this.closest('.program .filter-content__item').querySelector('.program .filter-content__main').textContent;
            this.closest('.program .filter-content__item').querySelector('input').value = this.id;
            this.closest('.program .filter-content__item').querySelector('.program .filter-content__main').textContent = this.textContent;
        }
        this.textContent = buffText;
        clickFilter();
    }

    function clickBurger() {
        this.closest('.header-menu').classList.toggle('menu_state_open');
        this.closest('.header-menu').querySelector('.header-menu__desktop').classList.toggle('open');
    }
    document.querySelectorAll('.program .filter-content__main').forEach(function(item) {
        item.addEventListener('click', clickFilter);
    });
    document.querySelectorAll('.part-filter-content__main').forEach(function(item) {
        item.addEventListener('click', clickFilter);
    });
    document.querySelectorAll('.part-filter-content__submain li').forEach(function(item) {
        item.addEventListener('click', clickSubmainItem);
    });
    document.querySelectorAll('.program .filter-content__submain li').forEach(function(item) {
        item.addEventListener('click', clickSubmainItem);
    });
    if (document.querySelector('.header-menu__burger') !== null) document.querySelector('.header-menu__burger').addEventListener('click', clickBurger);
});
window.addEventListener('resize', checkWidth);