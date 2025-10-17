const model = require('../models/memberModel');
const common = require('../common/common');
const login = (req, res) => {
    try {
        res.render('member/login');
    } catch {
        res.status(500).send("500 Error")
    }
}

const loginProc = async (req, res) => {
    try {
        let { username, password } = req.body;

        // xss 공격 들어 있을 수 있어.. 
        username = common.reqeustFilter(username, 50, false);
        password = common.reqeustFilter(password, 50, false);

        
        console.log(username, password);
        const result = await model.loginCheck(username, password);

        if (result != null) {
            //로그인처리 = 세션 저장 
            req.session.user = {
                pkid: result.pkid,
                user_id: result.user_id,
                name: result.name
            };
            common.alertAndGo(res, "로그인 되었습니다.", "/");
        } else {
            // 아이디또는 비번이 틀림
            // res.send('<script>alert("아이디 또는 비밀번호가 틀립니다."); location.href="/member/login"; </script>') 
            common.alertAndGo(res, "아이디 또는 비밀번호가 틀립니다.", "/member/login");
        }
    } catch {
        console.log(user_id, user_pw);
        res.status(500).send("500 Error");
    }
}



module.exports = {
    login,
    loginProc
}
