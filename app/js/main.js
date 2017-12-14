(function  addDropDownMenu() {
    jQuery('.sub-menu').hide();
    jQuery('.main-nav__item_with-sub').hover(function () {
        if (document.documentElement.clientWidth > 1280) {
            clearTimeout(jQuery.data(this, 'timer'));
            jQuery('.sub-menu', this).stop(true, true).fadeIn(300);
        }
    }, function () {
        if (document.documentElement.clientWidth > 1280) {
            jQuery.data(this, 'timer', setTimeout(jQuery.proxy(function () {
                jQuery('.sub-menu', this).stop(true, true).fadeOut(300);
            }, this), 300));
        }
    });
    jQuery('.main-nav__item_with-sub').click(function () {
        if (document.documentElement.clientWidth < 1280) {
            if (jQuery('ul', this).css('display') == 'none') {
                jQuery('.sub-menu').hide();
                jQuery('.sub-menu', this).fadeIn(300);
            } else {
                jQuery('.sub-menu', this).fadeOut(300);
            }
        }
    });
    window.addEventListener("resize", function () {
        jQuery('.sub-menu').hide();
    }, false);
    window.addEventListener("orientationchange", function () {
        jQuery('.sub-menu').hide();
    }, false);
})();
(function noClickLink() {
    $('.no-click').on('click', function (e) {
        e.preventDefault();
    });
})();
(function closeVideo() {
    $('.close-video').on('click', function () {
        player.stopVideo();
        $('.show-video').slideUp(400);
    }) 
})();