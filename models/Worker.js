const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter FullName of Employee"],
    trim: true,
  },
  gender: {
    type: String,
    required: [true, `Please enter Gender`],
    maxlength: [1, "Gender could not be more than 1 digit"],
  },
  role: {
    type: String,
    required: [true, `Please enter Employee's Position/Role`],
  },
  phoneNo: {
    type: Number,
    required: [true, "Please enter the Phone No."],
    unique: true,
    maxlength: [10, "Phone No. could not be more than 10 digit"],
  },
  alternateNo: {
    type: Number,
    unique: true,
    maxlength: [10, "Phone No. could not be more than 10 digit"],
  },
  address: {
    type: String,
    required: [true, "Please enter valid address"],
  },
});

module.exports =
  mongoose.models.Worker || mongoose.model("Worker", WorkerSchema);
