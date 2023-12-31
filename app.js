const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const mongoose = require("mongoose");

// const DB_HOST =
//   "mongodb+srv://Oleksii1994:Angeles4552@clusterhw03.ohu9ydw.mongodb.net/db-contacts?retryWrites=true&w=majority";

// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log("connection success"))
//   .catch((e) => console.log(e.message));

const contactsRouter = require("./routes/api/contacts");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server Error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
