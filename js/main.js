(function () {

  var time = 20;
  $('button').on('click', function () {
    let $button = $(this);
    $button.addClass('active').siblings().removeClass('active');
    let speed = $button.attr('data-speed');
    switch (speed) {
      case 'slow':
        time = 50;
        break;
      case 'normal':
        time = 20;
        break;
      case 'fast':
        time = 0.1;
        break;
    }
    console.log(time)
  });

  function writeCode(code) {
    let style = document.querySelector('#style');
    let showCode = document.querySelector('#showCode');
    let shockLeft = document.querySelector('.shockLeft');
    let shockRight = document.querySelector('.shockRight');
    let i = 0;
    let timer = setTimeout(function run() {
      i += 1;
      style.innerHTML = code.substring(0, i);
      showCode.innerHTML = code.substring(0, i);
      showCode.scrollTop = showCode.scrollHeight;
      if (i < code.length) {
        timer = setTimeout(run, time);
      } else {
        shockLeft.style.display = 'block';
        shockRight.style.display = 'block';
      }
    }, time);

    /*直接看结果*/
    $('#end').on('click', function () {
      window.clearTimeout(timer);
      showCode.style.visibility = 'hidden';
      style.innerHTML = code;
      shockLeft.style.display = 'block';
      shockRight.style.display = 'block';
    });
  }

  let code = `
/*
 * 首先画两只耳朵
 */
.ear {
    width: 35px;
    height: 140px;
    background: #FED823;
    position: absolute;
}

.ear.left {
    left: 48px;
    top: 3px;
    transform: rotate(20deg);
    border-top-left-radius: 80px 200px;
    border-top-right-radius: 60px 200px;
    border-bottom-left-radius: 100px 180px;
    border-bottom-right-radius: 40px 100px;
    border-left: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
}
.ear.right {
    left: 196px;
    top: 65px;
    background: #231815;
    border-top: 3px solid #0A0A0A;
    border-left: 3px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    transform: rotate(82deg);
    border-top-left-radius: 26px 90px;
    border-top-right-radius: 26px 60px;
    border-bottom-left-radius: 36px 110px;
    overflow: hidden;
    z-index: 20;
}
/*
 * 给耳朵添加颜色
 */
.angle {
    width: 30px;
    height: 40px;
    background: #231815;
    border-bottom: 3px solid #0A0A0A;
    border-top: 1px solid #0A0A0A;
    border-left: 1px solid #0A0A0A;
    border-right: 1px solid #0A0A0A;
    transform: rotate(20deg);
    position: absolute;
    left: 67px;
    top: 6px;
    border-top-left-radius: 100px 210px;
    border-top-right-radius: 60px 155px;
}
.ear.right .circle {
    width: 35px;
    height: 100px;
    background: #FED823;
    position: absolute;
    top: 36px;
    border-top-right-radius: 30px 80px;
}
/*
 * 然后画皮卡丘的头
 */
.pi-body .head {
    width: 170px;
    height: 160px;
    background: #FED823;
    position: absolute;
    left: 13px;
    border: 3px solid black;
    border-top-left-radius: 130px 120px;
    border-top-right-radius: 150px 125px;
    border-bottom-left-radius: 65px 100px;
    border-bottom-right-radius: 34px 130px;
    border-bottom: none;
    z-index: 10;
}
/*
 * 接着画眼睛和眉毛
 */
.pi-body .head .eyeLeft {
    width: 28px;
    height: 30px;
    background: #0A0A0A;
    border-radius: 50%;
    position: absolute;
    left: 93px;
    top: 55px;
    z-index: 100;
}
.pi-body .head .eyeLeft::before {
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    background: #0A0A0A;
    transform: rotate(-30deg);
    position: absolute;
    left: -3px;
}
.pi-body .head .eyeLeft::after {
    content: '';
    display: block;
    width: 10px;
    height: 12px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 7px;
    top: 5px;
}
.pi-body .head .eyeRight {
    width: 20px;
    height: 30px;
    background: #0A0A0A;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top: 50px;
    z-index: 1;
    transform: rotateZ(10deg);
}
.pi-body .head .eyeRight::before {
    content: '';
    display: block;
    width: 25px;
    height: 3px;
    background: #0A0A0A;
    transform: rotate(20deg) translateX(-2px);
}
.pi-body .head .eyeRight::after {
    content: '';
    display: block;
    width: 8px;
    height: 13px;
    background: white;
    border-radius: 50%;
    transform: translateX(8px) rotate(3deg);
}
/*
 * 接着画个小鼻子
 */
.pi-body .head .nose {
    width: 12px;
    height: 12px;
    background: #0A0A0A;
    position: absolute;
    top: 72px;
    left: 43px;
    border-radius: 0% 50% 30% 50%;
    transform: rotate(-20deg);
}
/*
 * 画一个微笑的嘴巴
 */
.pi-body .head .mouthLeft {
    width: 19px;
    height: 17px;
    position: absolute;
    top: 86px;
    left: 32px;
    border-radius: 0% 0% 90% 0%;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    transform: rotate(44deg);
}
.pi-body .head .mouthRight {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 86px;
    left: 55px;
    border-radius: 0% 0% 100% 0%;
    border-bottom: 4px solid #0A0A0A;
    border-right: 3px solid #0A0A0A;
    transform: rotate(52deg);
}
/*
 * 接着画皮卡丘经典的腮红
 */
.pi-body .head .face {
    width: 43px;
    height: 43px;
    background: #E94E24;
    border: 3px solid #0A0A0A;
    border-radius: 50%;
    position: absolute;
    top: 85px;
    left: 96px;
}
.pi-body .head .face::before {
    content: '';
    display: block;
    width: 30px;
    height: 70px;
    background: #FED823;
    position: absolute;
    left: -104px;
    transform: rotate(-31deg);
    border-top-left-radius: 150% 90px;
    border-bottom-left-radius: 150% 90px;
    border-left: 3px solid #0A0A0A;
}
.pi-body .head .face::after {
    content: '';
    display: block;
    width: 29px;
    height: 43px;
    border-radius: 50%;
    border: 3px solid #0A0A0A;
    background: #E94E24;
    position: absolute;
    left: -115px;
    top: 2px;
}
/*
 * 接下来画身体
 */
.pi-body .belly {
    width: 160px;
    height: 150px;
    background: #FED823;
    position: absolute;
    top: 163px;
    left: 35px;
    border-top-right-radius: 70px 140px;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 30px;
    border-right: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
    z-index: 10;
}
.pi-body .belly::before {
    content: '';
    display: block;
    width: 58px;
    height: 76px;
    background: #FED823;
    position: absolute;
    right: 23px;
    top: -25px;
    transform: rotate(84deg);
    border-top: 2px solid #0A0A0A;
}
/*
 * 画两只手
 */
.pi-body .belly .handLeft {
    width: 60px;
    height: 65px;
    background: #FED823;
    border-radius: 50%;
    transform: rotate(25deg);
    border-left: 2px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
    position: absolute;
    top: -5px;
    left: -15px;
    z-index: 100;
}
.pi-body .belly .handLeft::after {
    content: '';
    display: block;
    width: 40px;
    height: 20px;
    background: #FED823;
    border-radius: 30% 40% 0% 0%;
    border-top: 2px solid #0A0A0A;
    transform: rotate(-10deg);
    position: absolute;
    top: 10px;
    left: 15px;
}
.pi-body .belly .handRight {
    width: 85px;
    height: 65px;
    background: #FED823;
    position: absolute;
    left: 37px;
    top: -5px;
    border-radius: 80% 60% 40% 40%;
    border-left: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
    z-index: 200;
}
/*
 * 画个小肚子
 */
.pi-body .belly .big {
    width: 70px;
    height: 100px;
    background: #FED823;
    position: absolute;
    bottom: -3px;
    left: -20px;
    border-radius: 60% 0% 0% 50%;
    border-left: 3px solid #0A0A0A;
    border-bottom: 3px solid #0A0A0A;
}
/*
 * 接下来画两只脚
 */
.pi-body .foot {
    width: 65px;
    height: 35px;
    background: #FED823;
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    border: 3px solid #0A0A0A;
}
.pi-body .foot.left {
    transform: rotate(-20deg);
    bottom: 3px;
    left: 10px;
}
.pi-body .foot.right {
    bottom: 3px;
    right: -16px;
    transform: rotate(25deg);
}
/*
 * 再分别添加两根爪子
 */
.pi-body .foot.left::after {
    content: '';
    display: block;
    width: 25px;
    height: 8px;
    border-top: 3px solid #0A0A0A;
    border-radius: 50%;
    transform: rotate(-15deg);
    position: absolute;
    bottom: 14px;
    left: 0;
}
.pi-body .foot.left::before {
    content: '';
    display: block;
    width: 25px;
    height: 6px;
    border-top: 3px solid #0A0A0A;
    border-radius: 40%;
    transform: rotate(-15deg);
    position: absolute;
    bottom: 10px;
    left: 0;
}
.pi-body .foot.right::after {
    content: '';
    display: block;
    width: 25px;
    height: 8px;
    border-top: 3px solid #0A0A0A;
    border-radius: 50%;
    transform: rotate(10deg);
    position: absolute;
    bottom: 15px;
    right: 1px;
}
.pi-body .foot.right::before {
    content: '';
    display: block;
    width: 25px;
    height: 6px;
    border-top: 3px solid #0A0A0A;
    border-radius: 40%;
    transform: rotate(10deg);
    position: absolute;
    bottom: 10px;
    right: 1px;
}
/*
 * 画两道皮纹
 */
.pi-body .belly .pelageOne {
    width: 20px;
    height: 13px;
    background: #C76E29;
    position: absolute;
    right: 13px;
    top: 17px;
    border: 2px solid #0A0A0A;
    border-radius: 38% 5% 0% 46%;
    transform: rotate(-11deg);
}
.pi-body .belly .pelageTwo {
    width: 33px;
    height: 18px;
    background: #C76E29;
    position: absolute;
    right: -1px;
    bottom: 44px;
    border: 2px solid #0A0A0A;
    border-radius: 50% 5% 0% 39%;
    transform: rotate(-8deg);
}
/*
 * 最后是尾巴
 */
.tail {
    width: 150px;
    height: 250px;
    position: absolute;
    right: 0;
    top: 139px;
}
.tail .partOne {
    width: 50px;
    height: 15px;
    background: #983C0D;
    position: absolute;
    bottom: 29px;
    left: 9px;
    transform: rotate(-40deg);
    border-top: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
}
.tail .partTwo {
    width: 20px;
    height: 41px;
    background: #983C0D;
    position: absolute;
    bottom: 41px;
    left: 33px;
    transform: rotate(-41deg);
    border-right: 2px solid #0A0A0A;
    border-bottom: 2px solid #0A0A0A;
}
.tail .partTwo::before {
    content: '';
    display: block;
    position: absolute;
    border-top: 4px solid rgba(0, 0, 0, 0);
    border-right: 4px solid rgba(0, 0, 0, 0);
    border-left: 8px solid #FED823;
    border-bottom: 8px solid rgba(0, 0, 0, 0);
    transform: rotate(-25deg);
    top: -3px;
    right: -5px;
}
.tail .partTwo::after {
    content: '';
    display: block;
    position: absolute;
    border-top: 4px solid rgba(0, 0, 0, 0);
    border-right: 4px solid rgba(0, 0, 0, 0);
    border-left: 8px solid #FED823;
    border-bottom: 8px solid rgba(0, 0, 0, 0);
    transform: rotate(-28deg);
    top: -4px;
    left: 2px;
}
.tail .partThree {
    width: 70px;
    height: 25px;
    background: #FED823;
    position: absolute;
    bottom: 89px;
    left: 7px;
    transform: rotate(-39deg);
    border-top: 2px solid #0A0A0A;
}
.tail .partFour {
    width: 80px;
    height: 35px;
    background: #FED823;
    position: absolute;
    bottom: 120px;
    left: 3px;
    transform: rotate(52deg);
    border-top: 2px solid #0A0A0A;
}
.tail .partFive {
    width: 150px;
    height: 85px;
    background: #FED823;
    position: absolute;
    top: 9px;
    left: -7px;
    border-top-left-radius: 100% 30px;
    border-bottom-right-radius: 20% 10px;
    transform: rotate(-4deg);
    border: 2px solid #0A0A0A;
    border-bottom: none;
}
/*
 * 让尾巴摇摆
 */
.tail {
    animation: tail 3.5s ease infinite;
}
/*
 * 最后加两个小闪电
 */
.pi-body .shockLeft {
    position: absolute;
    left: -150px;
    top: 105px;
    z-index: 1000;
    transform: rotate(130deg);
}
.pi-body .shockRight {
    position: absolute;
    z-index: 1000;
    left: 130px;
    top: 105px;
}
/*
 * 好了，这只皮卡丘送给你！
 */   
  `;
  writeCode(code);
})();
