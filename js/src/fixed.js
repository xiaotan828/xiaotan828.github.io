
+function ($) {
	$(function() {
    var header = $(".site-brand-wrapper");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            header.removeClass('site-brand-wrapper').addClass("site-brand-wrapper-alt");
        } else {
            header.removeClass("site-brand-wrapper-alt").addClass('site-brand-wrapper');
        }
    });
});

}(jQuery);
