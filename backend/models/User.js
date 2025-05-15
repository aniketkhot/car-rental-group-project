const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  university: { type: String },
  address: { type: String },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  securityQuestion: { type: String },
  securityAnswer: { type: String }, 
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }

  if (this.isModified('securityAnswer') && this.securityAnswer && !this.securityAnswer.startsWith('$2b$')) {

    const salt = await bcrypt.genSalt(10);
    this.securityAnswer = await bcrypt.hash(this.securityAnswer, salt);
  }

  next();
});


userSchema.methods.compareSecurityAnswer = async function(answer) {
  return await bcrypt.compare(answer, this.securityAnswer);
};


userSchema.methods.setSecurityAnswer = async function(answer) {
  const salt = await bcrypt.genSalt(10);
  this.securityAnswer = await bcrypt.hash(answer, salt);
};

module.exports = mongoose.model('User', userSchema);