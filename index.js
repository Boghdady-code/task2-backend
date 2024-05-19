const express = require("express");
const app = express();
const ApiError = require("./utils/apiError");
const db = require("./models");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const globalError = require("./middlewares/errorMiddleware");
const cors = require("cors");
const ticketRoute = require("./routes/ticketRoute");
const tableDataRoute = require("./routes/tableDataRoute");
app.use(cors());
app.use(express.json());


app.use("/api/tickets", ticketRoute);
app.use("/api/tabledata", tableDataRoute);


app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find ${req.originalUrl} on this server`, 400));
});

app.use(globalError);

db.sequelize.sync().then(() => {
        console.log("DB connected");
    })

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });

process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
      process.exit(1);
    });
  });