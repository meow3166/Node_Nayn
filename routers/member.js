const express = require("express");
const router = express.Router();
const controller = require('../controllers/memberControllers')

router.get("/login", controller.login);
router.post("/login", controller.loginProc)


module.exports={
    router
}


// router.get('/', (req, res) => {
//     const { page,search_key} = req.query;
//     console.log(search_key,page,);
//     const sendData = {
//         search_key,
//         page
//     }
//     res.render('member/index',sendData);
// });
// router.get('/view', (req, res) => {
//     res.render('member/view');
// });
// module.exports={
//     router
// }

