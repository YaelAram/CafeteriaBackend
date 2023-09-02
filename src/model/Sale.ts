import { Schema, model } from "mongoose";

export interface ISale {
  age: number;
  temperature: number;
  drink: number;
}

const saleSchema = new Schema<ISale>({
  age: { type: Number, required: true },
  temperature: { type: Number, required: true },
  drink: { type: Number, required: true },
});

saleSchema.methods.toJSON = function () {
  const { __v, password, state, _id, ...user } = this.toObject();
  user.uid = _id;
  return user;
};

export const Sale = model<ISale>("Sale", saleSchema);
