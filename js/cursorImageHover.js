// 먼저 변수 img에 #img1을 넣는다.
var img = document.querySelector(".IndexNumber");

// 이벤트 리스너를 사용하여 마우스가 움직일때("mousemove") 함수를 실행해준다.
document.addEventListener("mousemove", function(e){
    var posX = e.clientX / img.clientWidth -0.6;
        posY = e.clientY / img.clientHeight -0.6;
        // console.log(e);

        // gsap을 연결하여 사용하였다.
        gsap.to(".IndexNumber", 2, {
            rotationY: posX *9,
            rotationX: posY *7,
            ease: Power1.easeOut,
            });
            // 움직일 텍스트의 클래스 값을 입력했다.
        gsap.to(".IndexNumber2", 2, {
            rotationY: posX *9,
            rotationX: posY *7,
            ease: Power1.easeOut,
            });         
});