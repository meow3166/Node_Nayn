const model = require('../models/memberModel');



const login=(req,res) => {
    try{
        res.render('member/login');
    }catch{
        res.status(500).send("500 Error")
    }
}

const loginProc = async (req,res) =>{
    try{
        let {username,password} = req.body;

        console.log(username,password);
        const result =await model.loginCheck(username,password);

        if(result != null){
            //로그인처리 = 세션 저장 
        }else{
            // 아이디또는 비번이 틀림
            res.send('<script>alert("아이디 또는 비밀번호가 틀립니다."); location.href="/member/login"; </script>')
        }
    }catch{
        res.status(500).send("500 Error");
    }
}



module.exports={
    login,
    loginProc
}