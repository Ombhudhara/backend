import dns from "dns";
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// Atlas SRV connections rely on DNS SRV lookups. Some environments (VPNs, local DNS proxies)
// block SRV queries. Force a known public DNS server to avoid that.
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    const baseUrl = process.env.MONGODB_URL;
    if (!baseUrl) throw new Error("MONGODB_URL is not defined in environment");

    // If the connection string is SRV (mongodb+srv), it already contains the DB name.
    // Otherwise, append the DB name so we can support both forms.
    const uri = baseUrl.startsWith("mongodb+srv://")
      ? baseUrl
      : baseUrl.includes("?")
      ? `${baseUrl.split("?")[0]}/${DB_NAME}?${baseUrl.split("?")[1]}`
      : `${baseUrl}/${DB_NAME}`;

    const connectionInstance = await mongoose.connect(uri);
    console.log(`\n mongod connected succesfully!! DB host: ${connectionInstance.connection.host}\n`);
  } catch (err) {
    console.log("MongoDB connection error(failed):", err);
    process.exit(1);
  }
};
export default connectDB;
