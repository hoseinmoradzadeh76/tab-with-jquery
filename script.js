$(".link-a").on('click', 'a', function () {
        $(".link-a").find('.active-tab').removeClass('active-tab');
        $(this).addClass('active-tab');
    });
$('#responsiveTabsDemo').responsiveTabs({
    animation: 'slide'

});
