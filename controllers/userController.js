const users = require("../models/user");
const bcrypt = require('bcryptjs');
//token
const JWT = require('jsonwebtoken');
const config = require("../config");


module.exports = {
    getAllUsers,//user
    addUser,
    login,
    deleteUser,
}

async function getAllUsers() {
    try {
        const result = await users.find();
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function addUser(body) {
    try {
        const { email, name, password } = body;
        var hashPass = bcrypt.hashSync(password, 10);
        const newItem = { email, name, password: hashPass };
        if (newItem) {
            await users.create(newItem);
            return true;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
}

async function login(body) {
    try {
        const { email, password } = body;
        const check_username = await users.findOne({ "email": email });

        if (check_username) {
            const ssPassword = bcrypt.compareSync(password, check_username.password);
            if (ssPassword) {
                //token
                //const token = JWT.sign({ email: email, data: "data ne" }, config.SECRETKEY, { expiresIn: '60s' });
                //const refreshToken = JWT.sign({ email: email }, config.SECRETKEY, { expiresIn: '1d' })

                //res.status(200).json({ "status": true, "user": check_username, token: token, refreshToken: refreshToken });
                return { "status": 200, "message": "Login thành công" };
            } else {
                //res.status(401).json({ "status": false, "message": "sai mật khẩu" });
                return { "status": 402, "message": "Sai mật khẩu" };
            }
        } else {
            //res.status(402).json({ "status": false, "message": "sai tài khoản " });
            return { "status": 401, "message": "Sai tài khoản" };
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteUser(body) {
    try {
        const { email } = body;
        const result = await users.findOneAndDelete({ "email": email });
        return result;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

