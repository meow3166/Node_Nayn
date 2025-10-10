const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let array = ['냥','펀','치','냥펀','펀치','냥펀치'];

    let sendData = {
        // 여기서 변수에 하나씩 담아두면됨
        title: '<strong>한병일의 홈페이지에 오신것을 환영합니다.</strong>',   // title에 이미 담아둠. 이게 index.html에 적용됨
        number: '9022037',
        fruits: array
    }
    res.render('index',sendData) // render 안에 html 파일 넣어줌
})

module.exports = {
    router    // router 넘겨줬고 이걸 app.js에서 받음(Routing 방법 부분)
}