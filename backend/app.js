import express from "express";
import dbConnect from "./dbConfig/db.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { admin, adminRouter } from "./admin/admin.js";
import bodyParser from "body-parser";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";

configDotenv();

const app = express();

dbConnect();

app.use(admin.options.rootPath, adminRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.json());

app.get("/collections", productRouter);
app.get("/collections/:name", productRouter);
app.post("/signup", userRouter);
app.post("/login", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from backend" });
});

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
