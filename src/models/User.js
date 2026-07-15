import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  identifier: {
    type: String,
    required: [true, 'Please provide an email or phone number.']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password.'],
  },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
