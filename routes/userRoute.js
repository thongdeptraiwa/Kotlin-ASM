var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

//token
const JWT = require('jsonwebtoken');
const config = require("../config");
//checkToken
//const checkToken = require("./checkToken");


//refreshToken
//http://localhost:3000/user/refreshToken
// router.post("/refreshToken", async function (req, res, next) {
//   const { refreshToken } = req.body;

//   JWT.verify(refreshToken, config.SECRETKEY, async function (err) {
//     if (err) {
//       res.status(401).json({ err: err });
//     } else {
//       var newToken = JWT.sign({ "data": "Thong dep trai wa" }, config.SECRETKEY, { expiresIn: '30s' });
//       res.status(200).json({ token: newToken });
//     }
//   });
// });

//addUser  
//http://localhost:3000/user/addUser
router.post('/addUser', async function (req, res, next) {
  try {
    const body = req.body;
    const result = await userController.addUser(body);

    if (result) {
      res.status(200).json({ "status": true, "message": "Đăng kí thành công" });
    } else {
      res.status(201).json({ "status": false, "message": "Tài khoản đã tồn tại" });
    }

  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

//login
//http://localhost:3000/user/login
router.post('/login', async function (req, res, next) {
  try {
    const body = req.body;
    const result = await userController.login(body);
    if (result.status == 200) {
      res.status(200).json({ "status": true, "message": result.message });
    } else if (result.status == 401) {
      //sai tài khoản 
      res.status(201).json({ "status": false, "message": result.message });
    } else if (result.status == 402) {
      //sai mật khẩu 
      res.status(202).json({ "status": false, "message": result.message });
    }
  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});


//get all
//http://localhost:3000/user/getAllUsers
router.get('/getAllUsers', async function (req, res, next) {
  try {
    const list = await userController.getAllUsers();
    res.status(200).json({ "status": true, "users": list });
  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});


//delete
//http://localhost:3000/user/delete
router.post('/delete', async function (req, res, next) {
  try {
    const body = req.body;
    const result = await userController.deleteUser(body);
    if (result) {
      res.status(200).json({ "status": true, "mess": "delete thành công" });
    } else {
      res.status(401).json({ "status": false, "mess": "Không tìm thấy user" });
    }

  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

module.exports = router;
