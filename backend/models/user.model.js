const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: string,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true
})

export const User = mongoose.model('User', userSchema)