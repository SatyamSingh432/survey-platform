import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  time: { type: String, default: () => new Date().toISOString() },
});

const User = mongoose.model("User", UserSchema);
export default User;
