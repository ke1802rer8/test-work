$(function(){
    jQuery.fn.swap = function(rem) {
        rem = jQuery(rem)[0];
        var clon = this[0],
            clon2 = clon.cloneNode(true),
            rem2 = rem.cloneNode(true),
            stack = this;

        clon.parentNode.replaceChild(rem2, clon);
        rem.parentNode.replaceChild(clon2, rem);

        stack[0] = rem2;
        return this.pushStack( stack );
    };

    $('.js-btn__remove').on('click', function(){
        $('.left').swap('.right');
    });
});