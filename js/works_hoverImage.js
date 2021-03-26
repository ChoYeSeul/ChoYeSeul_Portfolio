console.log("Script Load");
(function($) {
    $(document).ready(function() {
        console.log('jQuery Ready');

    //     this.imagePreview = function(){
    //         xOffset = 200;
    //         yOffset = 60;

    //         $('li._1').hover(function(e){
    //             this.title = this.title;
    //             this.title = "";
    //             var c = (this.t!="")?"<br/>" + this.t:"";

    //             $(body).append("<p id='preview'><img src='" + $("pics" + this.id).val() + "'alt = 'Image preview' width = '499px' .>" + c + " </p>");
    //             $("#preview").css("top", (e.pageY- xOffset)+ "px");
    //             $("#preview").css("left", (e.pageX- yOffset)+ "px");
    //             $("#preview").fadeIn("fast");
    //         },
    //         function(){
    //             this.title = this.t;
    //             $("#preview").remove();
    //         });
    //     $('img.preview').mousemove(function(e){
    //         $('#preview').css("top", (e.pageY - xOffset) + 'px');
    //         $('#preview').css("left", (e.pageX - yOffset) + 'px');
    //     });
    // };

    // _0 에 대한 스크립트

    $(function(){
        $('._0').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;

                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents0.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '15%',
                    'height' : '15%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
        //         $('.IndexNumber').hover(function(){
        //             $('.loader').css('background-color', 'chartreuse');
        //             console.log('마우스 잇힝');
        //         },function(){
        //             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //             console.log('마우스 히잉');
        //         }
        //     );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._0').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
        
            console.log('마우스 오버');
    });


    // _1 에 대한 스크립트

    $(function(){
        $('._1').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;

                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents1.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '10%',
                    'height' : '25%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
        //         $('.IndexNumber').hover(function(){
        //             $('.loader').css('background-color', 'chartreuse');
        //             console.log('마우스 잇힝');
        //         },function(){
        //             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //             console.log('마우스 히잉');
        //         }
        //     );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._1').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
        
            console.log('마우스 오버');
    });

    // _2 에 대한 스크립트

    $(function(){
        $('._2').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents2.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '12%',
                    'height' : '25%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
        //         $('.IndexNumber').hover(function(){
        //             $('.loader').css('background-color', 'chartreuse');
        //             console.log('마우스 잇힝');
        //         },function(){
        //             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //             console.log('마우스 히잉');
        //         }
        //     );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._2').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
            console.log('마우스 오버');
    });

    // _3 에 대한 스크립트

    $(function(){
        $('._3').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents3.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '15%',
                    'height' : '15%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
            //     $('.IndexNumber').hover(function(){
            //         $('.loader').css('background-color', 'chartreuse');
            //         console.log('마우스 잇힝');
            //     },function(){
            //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
            //         console.log('마우스 히잉');
            //     }
            // );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._3').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
            console.log('마우스 오버');
    });

    // _4 에 대한 스크립트

    $(function(){
        $('._4').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents4.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '15%',
                    'height' : '15%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
        //         $('.IndexNumber').hover(function(){
        //             $('.loader').css('background-color', 'chartreuse');
        //             console.log('마우스 잇힝');
        //         },function(){
        //             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //             console.log('마우스 히잉');
        //         }
        //     );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._4').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
            console.log('마우스 오버');
    });


     // _5 에 대한 스크립트

     $(function(){
        $('._5').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents5.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '15%',
                    'height' : '15%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
        //         $('.IndexNumber').hover(function(){
        //             $('.loader').css('background-color', 'chartreuse');
        //             console.log('마우스 잇힝');
        //         },function(){
        //             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //             console.log('마우스 히잉');
        //         }
        //     );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._5').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
            console.log('마우스 오버');
    });



    // _6 에 대한 스크립트

    $(function(){
        $('._6').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents6.png)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '200px',
                    'height' : '200px',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
        //         $('.IndexNumber').hover(function(){
        //             $('.loader').css('background-color', 'chartreuse');
        //             console.log('마우스 잇힝');
        //         },function(){
        //             $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //             console.log('마우스 히잉');
        //         }
        //     );
        //     $('.IndexNumber2').hover(function(){
        //         $('.loader').css('background-color', 'chartreuse');
        //         console.log('마우스 오버');
        //     },function(){
        //         $('.loader').css('background-color', 'rgba(128, 255, 0, 0)');
        //         console.log('마우스 아웃');
        //     }
        // );
            });
                console.log('마우스 오버');
        });
      });

      $('._6').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
            console.log('마우스 오버');
    });


    // _7 에 대한 스크립트 _ ****2021. 03. 26 수정****

    $(function(){
        $('._7').mouseover(function(){
            $(document).mousemove(function(e) {
                mouseX = e.pageX;
                mouseY = e.pageY;
                // $('#loader').remove('.loader');
                $('#loader').css({
                    'background' : 'url(../img/Contents7.jpg)',
                    'background-size' : 100 + '% '+ 100 + '%',
                    'width' : '15%',
                    'height' : '15%',
                    'opacity' : '0.6',
                    'animation' : '',
                    'z-index' : '-999'
                });
                $('.loader').css({
                    'animation' : 'none',
                    'border-radius' : 0 + 'px',
                    'box-shadow' : 'none',
                });
                $('body').css({
                    'cursor' : 'pointer'
                });
            });
                console.log('마우스 오버');
        });
      });

      $('._7').mouseout(function(){
        $(document).mousemove(function(e) {
            mouseX = e.pageX;
            mouseY = e.pageY;
            $('#loader').css({
                'background' : 'none',
                'background-size' : 'none',
                'width' : 70 + 'px',
                'height' : 70 + 'px',
                'opacity' : 'none',
                'z-index' : '999'
            });
            $('.loader').css({
                'animation' : '3s bordertl linear infinite',
                'border-radius' : 100 + 'px',
                'box-shadow' : 'inset 0 0 0 2px chartreuse',
                'animation' : '3s bordertl linear infinite,4s border1 linear infinite,5.6s border2 linear infinite,3.3s border3 linear infinite,3s rotate linear infinite,2s hover ease-in-out infinite'
            });
            $('body').css({
                'cursor' : 'none'
            });
        });
            console.log('마우스 아웃');
    });
});
})(jQuery);