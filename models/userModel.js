import mongoose from "mongoose";
import validate from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name to proceed"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email id"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter valid email address",
    ],
    //validate: [validator.isEmail, "Please provide a valid email"],
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please enter password "],
    minlength: 4,
    malength: 100,
  },
  confirmPassword: {
    type: String,
    trim: true,
    required: [true, "Please enter password "],
    minlength: 4,
    malength: 100,
    //Checks whether password and confirm password are same.
    //This works only with SAVE and create object
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same",
    },
  },
  photo: String,
  passwordResetToken: String,
  passwordTokenDuration: Date,
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); //Check whether password has been modified or not
  console.log("Inside schema");
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.confirmPassword = undefined; //Needs to have only the hashed password
});

UserSchema.methods.correctPassword = async function (userProvidedPassword) {
  return await bcrypt.compare(userProvidedPassword, this.password);
};

UserSchema.methods.createResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = resetToken
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordTokenDuration = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", UserSchema);

export default User;
