import mongoose, { Schema } from 'mongoose';

// Define movie schema
var profileSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  admission_no: Number,
  dob: Date,
  class: String,
  section: String,
  address: String,
  contact: Number,

});

// Export Mongoose model
export default mongoose.model('profile', profileSchema);