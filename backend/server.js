const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
const userRoute = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");
dotenv.config();
connectDB();

app.use(express.json());
app.use("/api/users", userRoute);
app.use(notFound);
app.use(errorHandler);
app.listen(
  process.env.PORT || 2000,
  console.log(`Server Started at ${process.env.PORT}`)
);
