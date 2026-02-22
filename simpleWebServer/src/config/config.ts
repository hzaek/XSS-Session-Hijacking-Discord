import connectPgSimple from "connect-pg-simple";
import pool from "./database"
import session from "express-session";

const pgSession = connectPgSimple(session);
export const sessionConfig = {
    secret: process.env.SECRET || "secret",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 30 * 6,
    },
    store: new pgSession({ pool: pool, tableName: "session" }),
  }


  export const corsConfig = {
    credentials: false,
    origin:"*",
  };
