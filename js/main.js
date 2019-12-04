!function () {
    var duration = 30
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch (speed) {
            case 'slow':
                duration = 60
                break
            case 'normal':
                duration = 30
                break
            case 'fast':
                duration = 5
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if (n < code.length) {
                id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
        }, duration)
    }

    let code = `
/*
 * 首先，需要准备皮卡丘的皮
 */
.preview {
  background: #FEE433;
}
/*
 * 接下來，画皮卡丘的鼻子
 */
.nose {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px;
  border-color: black transparent transparent;
  border-radius: 11px;
  position: absolute;
  left: 50%;
  top: 28px;
  transform: translateX(-50%);  
}
/*
 * 接下來，画皮卡丘的眼睛
 */
.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  border-radius: 50%;
  border: 2px solid #000;
}
/*
 * 眼睛里面的珠子
 */
.eye::before {
  content: '';
  display: block;
  width: 24px;
  height: 24px;
  background: white;
  position: absolute;
  border-radius: 50%;
  top: -1px;
  left: 6px;
  border: 2px solid #000;
}
/*
 * 左眼在左边
 */
.eye.left {
  right: 50%;
  margin-right: 90px;
}
/*
 * 右眼在右边
 */
.eye.right {
  left: 50%;
  margin-left: 90px;
}
/*
 * 然后，画皮卡丘的脸
 */
.face {
  width: 68px;
  height: 68px;
  background: #FC0D1C;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 85px;
}
/*
 * 将脸放到正确的位置
 */
.face.left {
  right: 50%;
  margin-right: 116px;
}
.face.right {
  left: 50%;
  margin-left: 116px;
}
/*
 * 上嘴唇
 */
.upperLip {
  height: 25px;
  width: 80px;
  border: 3px solid black;
  position: absolute;
  top: 50px;
  background: rgb(254, 228, 51);
}
.upperLip.left {
  right: 50%;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}
.upperLip.right {
  left: 50%;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/*
 * 下嘴唇
 */

    `

    writeCode('', code)

}.call()