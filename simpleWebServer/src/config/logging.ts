import morgan from "morgan";
import path from "path";
import fs from "fs";

const logsDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../logs/access.log"),
  { flags: "a" }
);

const devLogging = morgan("dev");

const combinedLogging = morgan("combined", { stream: accessLogStream });

const setupLogging = (app: any) => {
  if (process.env.NODE_ENV === "production") {
    app.use(combinedLogging);
  } else {
    app.use(devLogging);
    app.use(combinedLogging);
  }
};

export {  setupLogging };
