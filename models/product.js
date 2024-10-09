const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const product = new Schema({
    id: { type: ObjectId }, // khóa chính
    nameProduct: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
        unique: true, // không được trùng
    },
    price: {
        type: Number, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },
    image: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },
    description: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },
    idCate: {
        type: ObjectId,
        ref: 'category',
    },
});
module.exports = mongoose.models.product || mongoose.model('product', product);
