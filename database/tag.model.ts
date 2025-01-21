import { model, models, Schema, Document } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

export interface ITagDoc extends ITag, Document {}
const TagSchema = new Schema<ITag>(
  {
    name: { type: String, required: true, unique: true },
    questions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

//If tag model exist than do not create new one.
const Tag = models?.Tag || model<ITag>("Tag", TagSchema);

export default Tag;
