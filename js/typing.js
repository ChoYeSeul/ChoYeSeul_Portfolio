var target = document.querySelector("#dynamic");
var stringArr = ["3분의 1같은,", "0.333333...", "무한한 가능성,", "나눠지지 않는,"]

var selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
// 단어 하나하나가 쪼개져서 배열로 된다. - split
var selectStringArr = selectString.split("");

function randomString(){
    var stringArr = ["3분의 1같은,", "0.333333...", "무한한 가능성,", "나눠지지 않는,"]

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
        },80);
    }else{
        setTimeout(resetTyping, 1700);
    }
}

dynamic(randomString());

console.log(selectString);
// 커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);
// 0.5초 간격으로 깜빡여라

