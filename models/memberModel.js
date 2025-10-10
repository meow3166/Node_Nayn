const db = require('../common/db');

const loginCheck = async (user_id,user_qw) =>{
    try{
        const sql = "select pkid, name from member where user_id =? and user_pw = ?";
        const params = [user_id, user_qw];

        const result =await db.runSql(sql,params);

        return result[0];
    }catch{
        throw "sql Error";
    }
}


module.exports={
    loginCheck
}