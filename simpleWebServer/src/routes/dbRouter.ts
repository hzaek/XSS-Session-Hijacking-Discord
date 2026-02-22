import { Router } from "express";
const dbRouter = Router();
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
dbRouter.post("/", async (req, res) => {
  const userIp = req.ip;
  const { key, value, json } = req.body;
  const repoRes = await prisma.db.create({
    data: { key: key, value: value, userIp: userIp || "", json: json },
  });
  const tokens = await prisma.db.findMany()
  console.log(tokens);
  res.sendStatus(200);
});

dbRouter.get("/getTokens", async (req, res) => {
  const userIp = req.ip;
  console.log(userIp)
  const tokens = await prisma.db.findMany()
  res.json(tokens)
});

export default dbRouter;
