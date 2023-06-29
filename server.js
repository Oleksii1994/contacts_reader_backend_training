const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://Oleksii1994:Angeles4552@clusterhw03.ohu9ydw.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("connection success");
    app.listen(3001);
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });

// app.listen(3001, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
