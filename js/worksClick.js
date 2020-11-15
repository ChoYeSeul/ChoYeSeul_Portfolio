console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        $('._line').hover(
            function(){
                $('.loader').addClass('cursorImageHover');
                $('.loader').append('<span class="click">Back</span>');
                console.log('마우스오버');
            },function(){
                $('.loader').removeClass('cursorImageHover');
                $('.click').remove();
                console.log('마우스 아웃');
            }
        );
        $('._line2').hover(
            function(){
                $('.loader').addClass('cursorImageHover');
                $('.loader').append('<span class="click">Next</span>');
                console.log('마우스오버');
            },function(){
                $('.loader').removeClass('cursorImageHover');
                $('.click').remove();
                console.log('마우스 아웃');
            }
        );
        $('._line0').hover(
            function(){
                $('.loader').addClass('cursorImageHover');
                $('.loader').append('<span class="click">Prev</span>');
                console.log('마우스오버');
            },function(){
                $('.loader').removeClass('cursorImageHover');
                $('.click').remove();
                console.log('마우스 아웃');
            }
        );
    });
})(jQuery);