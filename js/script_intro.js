var target = document.querySelector('#text');
var stringArr = ["나눠지지 않는 3분의 1 같은, 끝없는 개발자 조예슬입니다."]

var selectString = stringArr[Math.floor(Math.random() * stringArr.length)];

var selectStringArr = selectString.split("");

function randomString(){
    var stringArr = ["나눠지지 않는 3분의 1 같은, 끝없는 개발자 조예슬입니다."]

    var selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    // 단어 하나하나가 쪼개져서 배열로 된다. - split
    var selectStringArr = selectString.split("");

    return selectStringArr;
}

// 타이핑 리셋
function resetTyping(){
    target.textContent = '';
    dynamic(randomString());
}
// 한글자씩 텍스트 출력 함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        },60);
    }else{
        setTimeout(resetTyping, 1700);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 300);
// 0.5초 간격으로 깜빡여라

// 페이지 전환을 위한

