const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config");
const apiRoutes = require("./routes/api");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Use routes
app.use("/api", apiRoutes);

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
