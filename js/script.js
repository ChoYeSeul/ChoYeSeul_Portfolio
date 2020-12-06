
console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');
        $(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                $('.loader').css("left", mouseX-10).css("top", mouseY-10);
           });
          });
        //   $("#_1").hover(function(){$('.loader').addClass('cursorImageHover')},
        //    function(){
        //        $('.loader').removeClass('cursorImageHover');
        //        console.log('fffoof');
        //    }
        //    );
        //    $('.footerColor').hover(function(){
        //     console.log('over');
        // }, function(){
        //     console.log('out');
        // });

    //     var $image = $('#_1');
    //     $image.hover(
    //         function(){
    //             $('.loader').addClass('cursorImageHover');
    //             console.log('쨔쟝');
    //         },
    //         function(){
    //             $('.loader').removeClass('cursorImageHover');
    //         }
    //     )

    // $('label').click(function(){
    //     // $('.IndexNumber').addClass('startMenu');
    //     // $('.IndexNumber').toggleClass('startMenu');
    // })


    $('label').click(function(){
        $('.IndexNumber').toggleClass('startMenu');
        $('.Index').toggleClass('startMenuIndex');
        $('.IndexNumber2').toggleClass('startMenuIndexNumber2');
        $('.Sub').toggleClass('startMenuDelay');
        $('.IndexUse').toggleClass('startMenuDelay');
        $('.line').toggleClass('startMenuDelay');
        $('#footerColor').toggleClass('startMenuDelay2');
        $('.MenuCircle').toggleClass('startMenuDelay');
    })


    });
    $('#_1').hover(
        function(){
            $('.loader').addClass('cursorImageHover');
            $('.loader').append('<span class="click">Click</span>');
            console.log('마우스오버');
        },function(){
            $('.loader').removeClass('cursorImageHover');
            $('.click').remove();
            console.log('마우스 아웃');
        }
    );
    // $('#_1').click(function(){
    //     $(this).remove('#_1');
    //     $(this).addClass('_1spinBack');
    //     console.log('클릭');
    // })

    $('.IndexNumber').hover(
        function(){
            $('.loader').addClass('cursorImageHover');
            console.log('마우스 오버');
        },function(){
            $('.loader').removeClass('cursorImageHover');
            console.log('마우스 아웃');
        }
    )
    $('.IndexNumber2').hover(
        function(){
            $('.loader').addClass('cursorImageHover');
            console.log('마우스 오버');
        },function(){
            $('.loader').removeClass('cursorImageHover');
            console.log('마우스 아웃');
        }
    )


    // 첫 디자인 -> 좀 더 동글동글이 잘 보이면 좋겠다. -> 수정.

//  var i = 1;
//     $('#_1').click(function(){
//         if(i %2){ // 1
//             $('html').css('background-color', 'chartreuse');
//             $('.loader').css('box-shadow', 'inset 0 0 0 2px #fff');
//             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
//             $('img').removeClass('imageCircle');
//             $('img').remove('#_1');
//             $('img').remove('#_2');
//             $('img').remove('#_3');
//             $('img').remove('#_4');
//             $('img').remove('#_5');
//             $('img').remove('#_6');
//             $('img').remove('#_7');
//             // $('#_0').css('opacity', '1');
//             // $('#_1').addClass('._imageCircle');
//             // $('#_1').css('animation', 'none');
//             $('<img id="_0" src="./imageCircle.png" />').appendTo('.imageCon');
//             $('<div class="name">乂</div>').appendTo('.imageCon');

//         }else{ // 0
//             $('html').css('background-color', '#fff');
//             $('.loader').css('box-shadow', 'inset 0 0 0 2px chartreuse');

//         }
//         i++;
//     });
    // $('#_0').click(function(){
    //     if(i %2){ // 1
    //         $('img').removeClass
    //     }else{ // 0
    //         $('html').css('background-color', '#fff');
    //         $('.loader').css('box-shadow', 'inset 0 0 0 2px chartreuse');
    //     }
    //     i++;
    // });
    // 인트로 만들었당!
        setTimeout(function(){
            $('#text').remove();
        },3300);

    var i = 1;
    $('#_1').click(function(){
        if(i %2){ // 1
            $('html').css('background-color', 'chartreuse');
            $('.loader').css('box-shadow', 'inset 0 0 0 2px #fff');
            $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
            $('img').addClass('invertImage');
            $('#_0').css('animation', '_0spin 1s linear infinite');
            $('#_1').css('animation', '_1spin 1s linear infinite');
            $('#_2').css('animation', '_2spin 1s linear infinite');
            $('#_3').css('animation', '_3spin 1s linear infinite');
            $('#_4').css('animation', '_4spin 1s linear infinite');
            $('#_5').css('animation', '_5spin 1s linear infinite');
            $('#_6').css('animation', '_6spin 1s linear infinite');
            $('#_7').css('animation', '_7spin 1s linear infinite');
            $('#_1').hover(function(){
                $('.loader').addClass('cursorImageHover');
                console.log('마우스오버');
            },function(){
                $('.loader').removeClass('cursorImageHover');
                console.log('마우스 아웃');
            })

        }else{ // 0
            $('html').css('background-color', '#fff');
            $('.loader').css('box-shadow', 'inset 0 0 0 2px chartreuse');
            // $('.loader').css('background-color', 'chartreuse');
            $('img').removeClass('invertImage');
            $('#_0').css('animation', '_0spin 3s linear infinite');
            $('#_1').css('animation', '_1spin 3s linear infinite');
            $('#_2').css('animation', '_2spin 3s linear infinite');
            $('#_3').css('animation', '_3spin 3s linear infinite');
            $('#_4').css('animation', '_4spin 3s linear infinite');
            $('#_5').css('animation', '_5spin 3s linear infinite');
            $('#_6').css('animation', '_6spin 3s linear infinite');
            $('#_7').css('animation', '_7spin 3s linear infinite');
            $('#_1').hover(function(){
                $('.loader').css('background-color', 'chartreuse');
            },function(){
                $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
            });
            $('.IndexNumber').hover(function(){
                    $('.loader').css('background-color', 'chartreuse');
                    console.log('마우스 오버');
                },function(){
                    $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
                    console.log('마우스 아웃');
                }
            );
            $('.IndexNumber2').hover(function(){
                $('.loader').css('background-color', 'chartreuse');
                console.log('마우스 오버');
            },function(){
                $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
                console.log('마우스 아웃');
            }
        );

        }
        i++;
    });

})(jQuery);
