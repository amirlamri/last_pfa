const mongoose = require('mongoose');

const UserSessionSchema = new mongoose.Schema({
  UserID: {
    type: Number,
    default: -1
  },
  timestamp:{
     type: Date,
     default : Date.now()
  },
  isDelete: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('UserSession', UserSessionSchema);
