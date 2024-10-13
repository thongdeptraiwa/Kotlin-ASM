var express = require('express');
var router = express.Router();

const productController = require("../controllers/productController");

//checkToken
//const checkToken = require("./checkToken");


//add product  
//http://localhost:3000/product/addProduct
router.post('/addProduct', async function (req, res, next) {
  try {
    const body = req.body;
    const result = await productController.addPoduct(body);

    if (result) {
      res.status(200).json({ "status": true, "message": "add thành công" });
    } else {
      res.status(201).json({ "status": false, "message": "add thất bại" });
    }

  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

//getProductCate
//http://localhost:3000/product/getProductCate
router.get('/getProductCate', async function (req, res, next) {
  try {
    const query = req.query;
    const list = await productController.getProductCate(query);
    res.status(200).json(list);
  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

//getProduct
//http://localhost:3000/product/getProduct
router.get('/getProduct', async function (req, res, next) {
  try {
    const query = req.query;
    const result = await productController.getProduct(query);
    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

//get all products
//http://localhost:3000/product/getAllProducts
router.get('/getAllProducts', async function (req, res, next) {
  try {
    const list = await productController.getAllProducts();
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
    const result = await productController.deleteProduct(body);
    if (result) {
      res.status(200).json({ "status": true, "mess": "delete thành công" });
    } else {
      res.status(201).json({ "status": false, "mess": "Không tìm thấy user" });
    }

  } catch (e) {
    res.status(400).json({ "status": false, "message": "lỗi" });
  }
});

module.exports = router;
