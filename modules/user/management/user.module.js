const mongoose = require('mongoose');

const userManagementSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    psw: {
        type: String,
        require: true,
        min: 6,
        max: 255
    },
    role: {
        type: Number,
        enum: [0, 1], // 0 超级管理员 1普通管理员
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const UserManagement = mongoose.model('userManagements', userManagementSchema);

module.exports = UserManagement;