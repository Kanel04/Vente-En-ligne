// Core Modules
const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);

const env = require("env-var");
const PORT = env.get("PORT").required().asInt();

// Middlewares
app.use(cors());
app.use(express.json());

  

// Server listen PORT
server.listen(PORT, () => {
    console.log("listening on *:", PORT);
  });

process.on("unhandledRejection", (err, promise) => {
console.log(`Logged Error: ${err.message}`);
   server.close(() => process.exit(1));
});