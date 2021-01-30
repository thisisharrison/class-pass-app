const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    index: true
  },
  tags: [String], // TaggingSchema
  languages: [String]
}, {
  timestamps: true
})

module.exports = Class = mongoose.model('Class', ClassSchema);