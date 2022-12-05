import { config } from "dotenv";

config();

export const MONGO_URI = `mongodb+srv://louis:${process.env.DB_PW}@cluster0.slgwadm.mongodb.net/?retryWrites=true&w=majority`;

export const APP_SECRET = process.env.SECRET || "TESTING";
