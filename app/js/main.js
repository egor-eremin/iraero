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
(function addTab() {
    // Get relevant elements and collections
    var tabbed = document.querySelector(".result-of-match");
    var tablist = tabbed.querySelector("ul");
    var tabs = tablist.querySelectorAll("a");
    var panels = tabbed.querySelectorAll('[id^="section"]');

    // The tab switching function
    var switchTab = function switchTab(oldTab, newTab) {
        newTab.focus();
        // Make the active tab focusable by the user (Tab key)
        newTab.removeAttribute("tabindex");
        // Set the selected state
        newTab.setAttribute("aria-selected", "true");
        oldTab.removeAttribute("aria-selected");
        oldTab.setAttribute("tabindex", "-1");
        // Get the indices of the new and old tabs to find the correct
        // tab panels to show and hide
        var index = Array.prototype.indexOf.call(tabs, newTab);
        var oldIndex = Array.prototype.indexOf.call(tabs, oldTab);
        panels[oldIndex].hidden = true;
        panels[index].hidden = false;
    };

    // Add the tablist role to the first <ul> in the .tabbed container
    tablist.setAttribute("role", "tablist");

    // Add semantics are remove user focusability for each tab
    Array.prototype.forEach.call(tabs, function (tab, i) {
        tab.setAttribute("role", "tab");
        tab.setAttribute("id", "tab" + (i + 1));
        tab.setAttribute("tabindex", "-1");
        tab.parentNode.setAttribute("role", "presentation");

        // Handle clicking of tabs for mouse users
        tab.addEventListener("click", function (e) {
            e.preventDefault();
            var currentTab = tablist.querySelector("[aria-selected]");
            if (e.currentTarget !== currentTab) {
                switchTab(currentTab, e.currentTarget);
            }
        });

        // Handle keydown events for keyboard users
        tab.addEventListener("keydown", function (e) {
            // Get the index of the current tab in the tabs node list
            var index = Array.prototype.indexOf.call(tabs, e.currentTarget);
            // Work out which key the user is pressing and
            // Calculate the new tab's index where appropriate
            var dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? "down" : null;
            if (dir !== null) {
                e.preventDefault();
                // If the down key is pressed, move focus to the open panel,
                // otherwise switch to the adjacent tab
                dir === "down" ? panels[i].focus() : tabs[dir] ? switchTab(e.currentTarget, tabs[dir]) : void 0;
            }
        });
    });

    // Add tab panel semantics and hide them all
    Array.prototype.forEach.call(panels, function (panel, i) {
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("tabindex", "-1");
        var id = panel.getAttribute("id");
        panel.setAttribute("aria-labelledby", tabs[i].id);
        panel.hidden = true;
    });

    // Initially activate the first tab and reveal the first tab panel
    tabs[0].removeAttribute("tabindex");
    tabs[0].setAttribute("aria-selected", "true");
    panels[0].hidden = false;
})();
(function fixMenu(){
    var navBlock = $('.nav-wrapper');
    navBlockTopPosition = navBlock.offset().top;

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > navBlockTopPosition) {
            $('.nav-wrapper').addClass('nav-wrapper_fixed');
        } else {
            $('.nav-wrapper').removeClass('nav-wrapper_fixed');
        }
    });
    $('.to-up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
})();
(function customSelect() {
    $('.aside-table_standings .tournament-selection__custom-selection').select2({
        dropdownParent: $('.aside-table_standings .aside-table__filter form'),
    });
    $('.aside-table_scorers .tournament-selection__custom-selection').select2({
        dropdownParent: $('.aside-table_scorers .aside-table__filter form'),
    });
})();