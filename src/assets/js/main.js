window.addEventListener('load', function() {
    function clickFilter() {
        $('.part-filter-content__main').not($(this)).removeClass('active');
        $('.part-filter-content__submain').not($(this).next()).slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    }
    document.querySelectorAll('.part-filter-content__main').forEach(function(item) {
        item.addEventListener('click', clickFilter);
    });
    document.querySelectorAll('.part-filter-content__submain').forEach(function(item) {
        item.addEventListener('click', function() {
            let buffText = this.closest('.part-filter-content__item').querySelector('.part-filter-content__main').textContent;
            this.closest('.part-filter-content__item').querySelector('.part-filter-content__main').textContent = this.textContent
            this.textContent = buffText;
            clickFilter();
        });
    })
});