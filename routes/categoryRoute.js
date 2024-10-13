var express = require('express');
var router = express.Router();

const categoryController = require("../controllers/categoryController");

//checkToken
//const checkToken = require("./checkToken");

//add cate
//http://localhost:3000/cate/addCate
router.post('/addCate', async function (req, res, next) {
  try {
    const body = req.body;
    const result = await categoryController.addCate(body);

    if (result) {
      res.status(200).json({ "status": true, "message": "add thành công" });
    } else {
      res.status(201).json({ "status": false, "message": "nameCate đã tồn tại" });
    }

  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

//get all cate ( danh muc )
//http://localhost:3000/cate/getAllCate
router.get('/getAllCate', async function (req, res, next) {
  try {
    const list = await categoryController.getAllCate();
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ "status": false, "categories": null });
  }
});


//deleteCate
//http://localhost:3000/cate/deleteCate
router.post('/deleteCate', async function (req, res, next) {
  try {
    const body = req.body;
    const result = await categoryController.deleteCate(body);
    if (result) {
      res.status(200).json({ "status": true, "mess": "delete thành công" });
    } else {
      res.status(201).json({ "status": false, "mess": "Không tìm thấy cate" });
    }

  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

module.exports = router;
