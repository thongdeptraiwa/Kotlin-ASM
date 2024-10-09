const categories = require("../models/category");

module.exports = {
    getAllCate,
    addCate,
    deleteCate,
}

async function addCate(body) {
    try {
        const { nameCate, image } = body;
        const newItem = { nameCate, image };
        if (newItem) {
            await categories.create(newItem);
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function getAllCate() {
    try {
        const result = await categories.find({}, " -__v");
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteCate(body) {
    try {
        const { nameCate } = body;
        const result = await categories.findOneAndDelete({ "nameCate": nameCate });
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

