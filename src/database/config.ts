import mongoose from "mongoose";

export const conectToDataBase = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Atlas ?? "");
    console.log("DataBase connection successful");
  } catch (error) {
    console.log(error);
    throw new Error("DataBase connection error");
  }
};
