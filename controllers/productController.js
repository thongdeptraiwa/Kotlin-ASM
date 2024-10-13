const products = require("../models/product");

module.exports = {
    addPoduct,
    getProductCate,
    getProduct,
    getAllProducts,
    deleteProduct,
}

async function addPoduct(body) {
    try {
        const { nameProduct, price, image, description, idCate } = body;
        const newItem = { nameProduct, price, image, description, idCate };
        if (newItem) {
            await products.create(newItem);
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getProductCate(query) {
    try {
        const { idCate } = query;
        const result = await products.find({ "idCate": idCate }, " -__v");
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getProduct(query) {
    try {
        const { id } = query;
        const result = await products.findById(id, " -__v");
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getAllProducts() {
    try {
        const result = await products.find();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteProduct(body) {
    try {
        const { nameProduct } = body;
        const result = await products.findOneAndDelete({ "nameProduct": nameProduct });
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

