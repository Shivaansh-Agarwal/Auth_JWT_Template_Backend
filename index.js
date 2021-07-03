const express = require("express");
const cors = require("cors");

const { router } = require("./routes/login.routes.js");
const { userRouter } = require("./routes/user.routes.js");
const { profileRouter } = require("./routes/profile.routes.js");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", router);
app.use("/user", userRouter);
app.use("/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("Learning Auth");
});

app.listen(3000, () => {
  console.log("server started");
});