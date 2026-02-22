import express from "express";
import router from "./routes/router";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import pool from "./config/database";
import { config } from "dotenv";
import { setupLogging } from "./config/logging";
import { corsConfig, sessionConfig } from "./config/config";
import { PrismaClient } from "@prisma/client";


const app = express();
const PORT = process.env.PORT || 3000;

config();
app.use(cors(corsConfig));
app.use(cookieParser(process.env.SECRET));
app.use(express.json({ limit: "15mb" }));
app.use(session(sessionConfig));
setupLogging(app);

app.use("/", router);

app.listen(PORT, () => {
  pool.connect();
  const prisma = new PrismaClient();
  prisma.$connect();
  console.log("Connected to Prisma");
  console.log(`Server is running on port ${PORT}`);
});
