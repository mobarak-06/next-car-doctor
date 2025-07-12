"use server";
import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);

  // validation
  const { email, password } = payload;
  if (!email || !password) return null;
  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashPassword = await bcrypt.hash(password, 10);
    payload.password = hashPassword;
    const result = await userCollection.insertOne(payload);
    return {
      success: true,
      acknowledge: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  }
  return { success: false };
};

export default registerUser;
