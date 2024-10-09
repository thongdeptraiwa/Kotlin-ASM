const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const user = new Schema({
    id: { type: ObjectId }, // khóa chính
    email: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
        unique: true, // không được trùng
    },
    name: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },
    password: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
    },


});
module.exports = mongoose.models.user || mongoose.model('user', user);
