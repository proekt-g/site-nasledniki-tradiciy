function checkWidth() {
    if (window.innerWidth <= 768) {
        document.querySelector('.header-menu__desktop').insertAdjacentElement('beforeend', document.querySelector('.header__log'));
        if (document.querySelector('.content-open-middle__top') !== null) {
            document.querySelectorAll('.content-open-middle__top').forEach(function(item) {
                item.insertAdjacentElement('beforeend', item.parentNode.querySelector('.content-open-middle__info'));
            });
            document.querySelectorAll('.content-open-middle__information').forEach(function(item) {
                item.insertAdjacentElement('beforeend', item.querySelector('.content-open-middle__time'));
            });
        }
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
        $('.exhibition .filter-content__main').not($(this)).removeClass('active');
        $('.exhibition .filter-content__submain').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    }

    function clickSubmainItem() {
        let buffText;
        if (this.closest('.part-filter-content__item') !== null)
            if (this.closest('.part-filter-content__item').className === 'part-filter-content__item') this.closest('.part-filter-content__item').className += ' first-click';
        if (this.closest('.program .filter-content__item') !== null || this.closest('.exhibition .filter-content__item') !== null)
            if (this.closest('.filter-content__item').className === 'filter-content__item') this.closest('.filter-content__item').className += ' first-click';

        if (this.closest('.part-filter-content__item') !== null) {
            buffText = this.closest('.part-filter-content__item').querySelector('.part-filter-content__main').textContent;
            this.closest('.part-filter-content__item').querySelector('input').value = this.id;
            this.closest('.part-filter-content__item').querySelector('.part-filter-content__main').textContent = this.textContent;
        }
        if (document.querySelector('.program .filter-content__item') !== null || document.querySelector('.exhibition .filter-content__item')) {
            buffText = this.closest('.filter-content__item').querySelector('.filter-content__main').textContent;
            this.closest('.filter-content__item').querySelector('input').value = this.id;
            this.closest('.filter-content__item').querySelector('.filter-content__main').textContent = this.textContent;
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
    document.querySelectorAll('.exhibition .filter-content__main').forEach(function(item) {
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
    document.querySelectorAll('.exhibition .filter-content__submain li').forEach(function(item) {
        item.addEventListener('click', clickSubmainItem);
    });
    if (document.querySelector('.header-menu__burger') !== null) document.querySelector('.header-menu__burger').addEventListener('click', clickBurger);

    // ajax form
    // $(".part-filter-content__btn").click(
    //     function() {
    //         sendAjaxForm('result_form', 'test', 'index.php');
    //         return false;
    //     }
    // );

    // function sendAjaxForm(result_form, ajax_form, url) {
    //     $.ajax({
    //         url: url, //url страницы (action_ajax_form.php)
    //         type: "GET", //метод отправки
    //         dataType: "html", //формат данных
    //         data: $("#" + ajax_form).serialize(), // Сеарилизуем объект
    //         success: function(response) { //Данные отправлены успешно
    //             result = $.parseJSON(response);
    //             $('#result_form').html('Имя: ' + result.name + '<br>Телефон: ' + result.phonenumber);
    //         },
    //         error: function(response) { // Данные не отправлены
    //             $('#result_form').html('Ошибка. Данные не отправлены.');
    //         }
    //     });
    // }
    // /ajax form
});
window.addEventListener('resize', checkWidth);