import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
const { createServer } = require("http");
const { Server } = require("socket.io");
import { connectDB, client } from "./config/mongoDb";
import router from "./indexRouters";
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });
import http from "http";

app.use(cors({ origin: "http://localhost:3000" }));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

(async function startServer() {
  try {
    await connectDB();
    server.listen(8081, () => {
      console.log(`Server is listening on http://localhost:8081`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1); // Exit the process with an error code
  }
})();
app.use("/", router);
