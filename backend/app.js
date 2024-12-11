import express from "express";
import dbConnect from "./dbConfig/db.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { admin, adminRouter } from "./admin/admin.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import addressRouter from "./routes/address.route.js";
import orderRouter from "./routes/order.route.js";

configDotenv();

const app = express();

dbConnect();

app.use(admin.options.rootPath, adminRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["https://rahasyafragrances.netlify.app"],
  methods: "GET,POST",
  credentials: true,
};

app.use(cors(corsOptions));

//Routes
app.get("/collections", productRouter);
app.get("/collections/:name", productRouter);
app.post("/signup", userRouter);
app.post("/login", userRouter);

app.use("/address", addressRouter);

app.use("/orders", orderRouter);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from backend" });
});

app.get("/health", (req, res) => {
  res.status(200).send("Ok");
});

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
});
