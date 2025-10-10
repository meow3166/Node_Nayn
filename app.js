// 서버 !! 실행시키면 뜬다
const express = require("express");
const nunjucks = require("nunjucks");

const app = express();
app.set('view engine', 'html');

// View enging 설정
nunjucks.configure('views', {
    express: app,
    watch: true
})
// post 데이터 받기
app.use(express.urlencoded({
    extended: true
}));


// 정적파일 설정
app.use('/assets', express.static(__dirname + '/views/assets'));

// Routing 방법 
const indexRouter = require('./routers/home');
const membarRouter = require('./routers/member');


app.use('/', indexRouter.router);
app.use('/member', membarRouter.router);

// 404not Found 
app.use((req, res) => {
    res.status(404).send('404오류다. 끄지라')
});

app.listen(
    // 80 포트
    80, () => {
        console.log(80, '번에서 express 동작중');
    }
);

