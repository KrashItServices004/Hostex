const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
  
    password: {
        type: String,
        required: true
    }
});

const HostexLoginmodal = mongoose.model('HostexLoginmodal', loginSchema);

module.exports = HostexLoginmodal;