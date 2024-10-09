const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const category = new Schema({
    id: { type: ObjectId }, // khóa chính
    nameCate: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
        unique: true, // không được trùng
    },
    image: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải cós
    },
});
module.exports = mongoose.models.category || mongoose.model('category', category);
