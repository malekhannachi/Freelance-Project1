require("dotenv").config();
//import
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const compression = require("compression");
const cors = require("cors");
//db connection
mongoose.connect(process.env.MONGO_DB_URI);
mongoose.connection.on("connected", () => {
  console.log("DB connect");
});
mongoose.connection.on("error", (err) => {
  console.log("mongoose failed with", err);
});
//import routes
const adminRouter = require("./auth/admin.routes");
const authRouter = require("./auth/auth.routes");
const agentRoute = require("./routes/agentManager.routes");
const fournisseurRouter = require("./routes/fournisseur.routes");
const camionRouter = require("./routes/camion.routes");
const citerneRouter = require("./routes/ciretne.routes");
const addressRouter = require("./routes/address.routes");
const analyseRouter = require("./routes/analyseType.routes");
const bonReception = require("./routes/bonReception.routes");
//middelware
app.use(cors());
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(compression()); //reduire taile for operations
//routes middleware
app.use("/images", express.static("./uploads"));
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRouter);
app.use("/api/agent", agentRoute);
app.use("/api/fournisseur", fournisseurRouter);
app.use("/api/camion", camionRouter);
app.use("/api/citerne", citerneRouter);
app.use("/api/address", addressRouter);
app.use("/api/analyse", analyseRouter);
app.use("/api/bonReception", bonReception);

//listen server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server in running on http:/localhost:${port}`);
});
