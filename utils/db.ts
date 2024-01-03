import mongoose, { Connection } from "mongoose";

export const connectToDB = async (): Promise<void> => {
  if (!(mongoose.connections[0] as Connection).readyState) {
    try {
      const con = await mongoose.connect(process.env.MONGOURI as string, {
        // dbName: process.env.PRODUCTION === "true" ? "main" : "test",
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      });
      console.log(`MongoDB is Connected with Host: ${con.connection.host}`);
    } catch (error) {
      console.log("Error connecting to mongo.", error);
    }
  }
};
