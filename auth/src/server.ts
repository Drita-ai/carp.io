import mongoose from "mongoose";
import app from "./app";

// Catching Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED EXCEPTION! Shutting down...");

  process.exit(1);
});

const DB = "mongodb://carp-auth-mongo-srv:27017/auth";

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");
});

const port = 3000;

const server = app.listen(port, () => {
  console.log(`App running on PORT ${port}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! Shutting down...");

  // By doing server.close(), we give server time to finish all requests that's
  // pending.
  server.close(() => {
    process.exit(1);
  });
});
