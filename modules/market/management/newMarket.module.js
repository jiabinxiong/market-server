const mongoose = require('mongoose');

const newMarketManagementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 200
    },
    province: [
        { 
            type: String,
            required: true    
        }
    ],
    cover: {
        type: String,
        min: 1,
        max: 1000
    },
    summary: {
        type: String,
        min: 1,
        max: 1000
    },
    hangOut: {
        type: String,
        min: 1,
        max: 1000
    },
    bus: {
        type: String,
        min: 1,
        max: 1000
    },
    subway: {
        type: String,
        min: 1,
        max: 1000
    },
    openTime: {
        type: String,
        min: 1,
        max: 1000
    },
    phone: {
        type: String,
        min: 1,
        max: 1000
    },
    http: {
        type: String,
        min: 1,
        max: 1000
    },
    address: {
        type: String,
        min: 1,
        max: 1000
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const NewMarketManagement = mongoose.model('marketLists', newMarketManagementSchema);

module.exports = NewMarketManagement;