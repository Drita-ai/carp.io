import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

const app = express();

// Security HTTP Headers
app.use(helmet());

// Middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// Rate Limiter
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter);

// Essential middlewares
app.use(express.json());
app.use(cookieParser());

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Implement: Sanitizing against XSS

export default app;
