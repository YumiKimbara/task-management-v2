import express from "express";
import bodyParser from "bodyParser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.user(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", taskRoutes);

const PORT = process.env.PORT || 3333;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
  })
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
