import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  imagename: { type: String, required: true }
});
